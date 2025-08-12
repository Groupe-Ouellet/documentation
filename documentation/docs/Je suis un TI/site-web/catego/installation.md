---
sidebar_label: "Installation"
---

# Documentation d'Installation

Cette section décrit les étapes nécessaires pour installer et configurer CatéGO (QuizMaster).

## Prérequis

Avant de commencer l'installation, assurez-vous que les éléments suivants sont installés sur votre système :

- **Node.js** (version 18 ou supérieure)
- **npm** (version 8 ou supérieure) ou **yarn** (version 1.22 ou supérieure)
- **Git** (pour cloner le dépôt)

## Étapes d'Installation

### Étape 1 : Cloner le dépôt

Clonez le dépôt QuizMaster depuis le gestionnaire de versions :

```bash
git clone https://github.com/Groupe-Ouellet/QuizMaster.git
cd QuizMaster
```

### Étape 2 : Installer les dépendances

Installez toutes les dépendances nécessaires pour le projet :

```bash
npm install
```

Cette commande installera automatiquement les dépendances pour :
- Le frontend React (React, TypeScript, Tailwind CSS, etc.)
- Le backend Express (Express, SQLite3, CORS, etc.)
- Les outils de développement (Vite, ESLint, etc.)

### Étape 3 : Configuration de la base de données

La base de données SQLite sera automatiquement créée et initialisée lors du premier démarrage de l'application. Aucune configuration manuelle n'est requise.

### Étape 4 : Configuration des variables d'environnement

Créez un fichier `.env` dans le répertoire racine du projet (optionnel) :

```env
PORT=7236
NODE_ENV=development
```

**Variables disponibles :**
- `PORT` : Port du serveur (défaut: 7236)
- `NODE_ENV` : Environnement (development/production)

### Étape 5 : Démarrer l'application

#### Mode développement

Pour le développement, utilisez la commande suivante qui démarre simultanément le serveur backend et le client frontend :

```bash
npm run dev
```

Cette commande lance :
- Le serveur Express sur le port 7236
- Le serveur de développement Vite sur le port 5173

#### Mode production

Pour la production, construisez l'application et démarrez le serveur :

```bash
npm run prod
```

Cette commande :
1. Construit l'application React avec `npm run build`
2. Démarre le serveur Express avec `npm run server`

### Étape 6 : Accéder à l'application

Une fois l'application démarrée, vous pouvez accéder à CatéGO en ouvrant votre navigateur et en naviguant vers :

**Mode développement :**
```
http://localhost:5173
```

**Mode production :**
```
http://localhost:7236
```

## Configuration Additionnelle

### Configuration du serveur

Le serveur Express est configuré dans le fichier `server/server.js`. Les principales configurations incluent :

- **Port** : Configurable via variable d'environnement `PORT`
- **CORS** : Configuration pour le domaine `quizmaster.ptranet.com`
- **Base de données** : Fichier SQLite automatiquement créé

### Configuration de la base de données

La base de données SQLite est configurée dans le fichier `server/database.js`. Les caractéristiques incluent :

- **Fichier** : `server/quiz_master.db`
- **Tables** : Création automatique des tables
- **Données d'exemple** : Insertion automatique de quiz de test

### Configuration du frontend

Le frontend React est configuré avec Vite dans le fichier `vite.config.ts`. Les principales configurations incluent :

- **Build** : Optimisation pour la production
- **TypeScript** : Support complet du typage
- **Tailwind CSS** : Framework CSS utilitaire

## Scripts disponibles

Le projet inclut plusieurs scripts npm pour différentes tâches :

```json
{
  "dev": "concurrently \"npm run server\" \"vite\"",
  "prod": "npm run build && npm run server",
  "server": "cd server && node server.js",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

**Description des scripts :**
- `dev` : Démarre le mode développement (serveur + client)
- `prod` : Construit et démarre en mode production
- `server` : Démarre uniquement le serveur backend
- `build` : Construit l'application pour la production
- `lint` : Vérifie le code avec ESLint
- `preview` : Aperçu de la build de production

## Données d'exemple

Lors du premier démarrage, l'application crée automatiquement des données d'exemple :

### Quiz créés :
1. **Quiz Fruits et Légumes** : Associez chaque aliment à sa catégorie correcte
2. **Quiz Animaux** : Classifiez les animaux selon leur habitat naturel

### Catégories :
- **Quiz 1** : Fruit, Légume
- **Quiz 2** : Terrestres, Aquatiques, Aériens

### Cartes :
- **Quiz 1** : Orange, Tomate, Pomme, Carotte, Banane, Brocoli
- **Quiz 2** : Lion, Dauphin, Aigle, Éléphant, Requin, Faucon

## Authentification

L'application utilise un système d'authentification par mot de passe :

### Mots de passe par défaut :
- **Validation** : `validation123`
- **Administration** : `admin123`

**⚠️ Important :** En production, changez ces mots de passe par défaut !

## Résolution des Problèmes

### Problèmes courants

#### Erreur de port déjà utilisé
```
Error: listen EADDRINUSE: address already in use :::7236
```

**Solution :**
```bash
# Trouver le processus utilisant le port
lsof -i :7236

# Tuer le processus
kill -9 <PID>

# Ou changer le port dans le fichier .env
PORT=7237
```

#### Erreur de dépendances
```
npm ERR! code ERESOLVE
npm ERR! ERESOLVE could not resolve
```

**Solution :**
```bash
# Supprimer node_modules et package-lock.json
rm -rf node_modules package-lock.json

# Réinstaller les dépendances
npm install
```

#### Erreur de base de données
```
Error opening database: EACCES: permission denied
```

**Solution :**
```bash
# Vérifier les permissions du dossier
ls -la server/

# Donner les bonnes permissions
chmod 755 server/
chmod 644 server/quiz_master.db
```

#### Erreur de build
```
Build failed with errors
```

**Solution :**
```bash
# Nettoyer le cache
npm run build -- --force

# Ou supprimer le dossier dist
rm -rf dist/
npm run build
```

### Logs et débogage

Pour activer les logs de débogage, ajoutez dans le fichier `.env` :

```env
DEBUG=*
NODE_ENV=development
```

### Support

Si vous rencontrez des problèmes non résolus, consultez :
1. Les logs du serveur dans la console
2. Les erreurs dans la console du navigateur
3. La documentation de l'API
4. Les issues du projet sur GitHub