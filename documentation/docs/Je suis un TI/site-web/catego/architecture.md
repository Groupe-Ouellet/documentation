---
sidebar_label: "Architecture"
---

# Documentation de l'Architecture

Cette section décrit l'architecture globale du système CatéGO (QuizMaster).

## Vue d'ensemble

CatéGO est une application web moderne construite avec une architecture client-serveur utilisant React pour le frontend et Node.js/Express pour le backend, avec une base de données SQLite pour le stockage des données.

## Architecture générale

```
┌─────────────────┐    HTTP/API    ┌─────────────────┐    SQLite    ┌─────────────────┐
│   Frontend      │ ◄────────────► │   Backend       │ ◄──────────► │   Base de       │
│   (React)       │                │   (Express)     │              │   Données       │
│                 │                │                 │              │   (SQLite)      │
└─────────────────┘                └─────────────────┘              └─────────────────┘
```

## Composants

### Frontend (React)

Le frontend est développé avec React 18 et TypeScript, utilisant des technologies modernes pour une interface utilisateur réactive et intuitive.

**Technologies utilisées :**
- **React 18** : Framework principal
- **TypeScript** : Typage statique
- **Tailwind CSS** : Framework CSS utilitaire
- **Lucide React** : Bibliothèque d'icônes
- **React Router** : Navigation entre pages
- **Vite** : Outil de build et développement

**Structure des composants :**
```
src/
├── components/          # Composants réutilisables
│   ├── CategoryButton.tsx
│   ├── GameCard.tsx
│   ├── PasswordModal.tsx
│   ├── QuizCard.tsx
│   └── UserNameModal.tsx
├── contexts/           # Contextes React
│   └── AppContext.tsx
├── pages/             # Pages principales
│   ├── HomePage.tsx
│   ├── QuizPage.tsx
│   ├── AdminPage.tsx
│   └── ValidationPage.tsx
└── main.tsx          # Point d'entrée
```

**Fonctionnalités principales :**
- Interface utilisateur intuitive pour les quiz
- Système d'authentification pour admin et validation
- Gestion des soumissions en temps réel
- Interface d'administration complète
- Export de données dans différents formats

### Backend (Node.js/Express)

Le backend est développé avec Node.js et Express, fournissant une API REST complète pour gérer toutes les opérations de l'application.

**Technologies utilisées :**
- **Node.js** : Runtime JavaScript
- **Express** : Framework web
- **SQLite3** : Driver de base de données
- **CORS** : Gestion des requêtes cross-origin
- **Multer** : Gestion des fichiers
- **XLSX** : Export Excel
- **CSV-Writer** : Export CSV

**Structure du serveur :**
```
server/
├── database.js        # Configuration et initialisation de la DB
├── server.js          # Serveur Express principal
└── routes/           # Routes API
    ├── quiz.js       # Gestion des quiz
    ├── cards.js      # Gestion des cartes
    ├── categories.js # Gestion des catégories
    ├── submissions.js # Gestion des soumissions
    └── export.js     # Export de données
```

**Fonctionnalités principales :**
- API REST complète
- Authentification par mot de passe
- Gestion CRUD pour toutes les entités
- Export de données multi-format
- Validation des données
- Gestion des erreurs

### Base de Données (SQLite)

La base de données utilise SQLite pour un déploiement simple et une maintenance facile.

**Caractéristiques :**
- **SQLite** : Base de données légère et portable
- **4 tables principales** : quiz, card, category, submission
- **Contraintes de clés étrangères** : Intégrité référentielle
- **Données d'exemple** : Initialisation automatique

**Avantages :**
- Aucune installation de serveur de base de données requise
- Fichier unique facile à sauvegarder
- Performance excellente pour des applications de taille moyenne
- Support complet des transactions

## Flux de données

### 1. Création d'un quiz
```
Admin → Frontend → API POST /quiz → Base de données
```

### 2. Participation à un quiz
```
Utilisateur → Frontend → API POST /submissions → Base de données
```

### 3. Validation des soumissions
```
Validateur → Frontend → API PATCH /submissions/{id}/status → Base de données
```

### 4. Export des données
```
Admin → Frontend → API POST /export/data → Génération fichier → Téléchargement
```

## Sécurité

### Authentification
- Système de mots de passe pour l'accès admin et validation
- Routes protégées par middleware d'authentification
- Mots de passe stockés en dur (à améliorer en production)

### CORS
- Configuration CORS pour le domaine autorisé
- Headers de sécurité appropriés
- Gestion des requêtes preflight

### Validation des données
- Validation côté serveur pour toutes les entrées
- Sanitisation des données utilisateur
- Gestion des erreurs appropriée

## Déploiement

### Configuration
- **Port** : 7236 (configurable via variable d'environnement)
- **Domaine** : quizmaster.ptranet.com
- **Base de données** : Fichier SQLite local

### Scripts disponibles
```json
{
  "dev": "concurrently \"npm run server\" \"vite\"",
  "prod": "npm run build && npm run server",
  "server": "cd server && node server.js",
  "build": "vite build"
}
```

### Variables d'environnement
- `PORT` : Port du serveur (défaut: 7236)
- `NODE_ENV` : Environnement (development/production)



## Maintenance

### Mises à jour
- Mise à jour des dépendances