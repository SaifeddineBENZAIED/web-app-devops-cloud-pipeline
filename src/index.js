const express = require('express');
const cors = require('cors');
const path = require('path');
const client = require('prom-client');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware et configuration de l'application
app.use(cors());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '../', 'public')));

// Configuration de Prometheus
const register = new client.Registry();
client.collectDefaultMetrics({ register });

const httpRequestsTotal = new client.Counter({
    name: 'http_requests_total',
    help: 'Total number of HTTP requests',
    labelNames: ['method', 'status'],
});

// Middleware pour enregistrer les métriques des requêtes HTTP
app.use((req, res, next) => {
    res.on('finish', () => {
        httpRequestsTotal.inc({
            method: req.method,
            status: res.statusCode,
        });
    });
    next();
});

// Routes
app.get('/metrics', async (req, res) => {
    try {
        res.set('Content-Type', register.contentType);
        res.end(await register.metrics());
    } catch (err) {
        res.status(500).end(err.message);
    }
});

app.get('/', (req, res) => {
    res.send('<h1>Hello, Prometheus!</h1>');
});

// Middleware pour les erreurs
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.send(`<h1>Error: ${error.message}</h1>`);
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
