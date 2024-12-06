# Étape 1 : Utiliser une image officielle de Node.js comme base
FROM node:14

# Étape 2 : Définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Étape 3 : Copier les fichiers de configuration et installer les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Étape 4 : Copier tout le contenu du projet dans le conteneur
COPY . .

# Étape 5 : Exposer le port utilisé par votre application
EXPOSE 3000

# Étape 6 : Commande pour démarrer votre application
CMD ["npm", "start"]
