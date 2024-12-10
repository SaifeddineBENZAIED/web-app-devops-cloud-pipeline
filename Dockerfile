# Étape 1 : Utiliser une image Node.js comme base
FROM node:14

# Étape 2 : Définir le répertoire de travail
WORKDIR /usr/src/app

# Étape 3 : Copier les fichiers de l'application
COPY package*.json ./
COPY . .

# Étape 4 : Installer les dépendances
RUN npm install

# Étape 5 : Exposer le port utilisé par l'application
EXPOSE 3000

# Étape 6 : Démarrer l'application
CMD ["npm", "start"]
