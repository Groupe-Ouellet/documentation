---
sidebar_label: "API"
---

# Documentation de l'API

Cette section décrit les endpoints de l'API REST pour CatéGO (QuizMaster).

## Base URL

```
http://localhost:7236/api
```

## Authentification

L'API utilise un système d'authentification par mot de passe pour les routes protégées.

### Endpoints d'authentification

#### POST /api/auth/validation

Authentification pour l'accès à l'interface de validation.

**Paramètres :**
- password: "validation123"

**Réponse :**
- success: true
- message: "Accès validation autorisé"

#### POST /api/auth/admin

Authentification pour l'accès à l'interface d'administration.

**Paramètres :**
- password: "admin123"

**Réponse :**
- success: true
- message: "Accès admin autorisé"

## Quiz

#### GET /api/quiz/active

Récupère tous les quiz actifs.

**Réponse :**
- quizzes: Liste des quiz actifs

#### GET /api/quiz/all

Récupère tous les quiz (pour l'administration).

**Réponse :**
- quizzes: Liste de tous les quiz

#### GET /api/quiz/:id

Récupère un quiz spécifique avec ses cartes et catégories.

**Réponse :**
- quiz: Détails du quiz
- cards: Liste des cartes
- categories: Liste des catégories

#### POST /api/quiz

Crée un nouveau quiz.

**Paramètres :**
- name: Nom du quiz
- description: Description du quiz
- isActive: État actif

#### PUT /api/quiz/:id

Met à jour un quiz existant.

#### PATCH /api/quiz/:id/toggle

Active/désactive un quiz.

#### DELETE /api/quiz/:id

Supprime un quiz et toutes ses données associées.

## Cartes

#### GET /api/cards/quiz/:quizId

Récupère toutes les cartes d'un quiz.

#### POST /api/cards

Crée une nouvelle carte.

#### PUT /api/cards/:id

Met à jour une carte.

#### DELETE /api/cards/:id

Supprime une carte.

## Catégories

#### GET /api/categories/quiz/:quizId

Récupère toutes les catégories d'un quiz.

#### POST /api/categories

Crée une nouvelle catégorie.

#### PUT /api/categories/:id

Met à jour une catégorie.

#### DELETE /api/categories/:id

Supprime une catégorie.

## Soumissions

#### POST /api/submissions

Crée une nouvelle soumission.

#### GET /api/submissions/pending

Récupère toutes les soumissions en attente de validation.

#### PATCH /api/submissions/:id/status

Met à jour le statut d'une soumission.

#### GET /api/submissions/export

Récupère les soumissions pour export.

## Export

#### POST /api/export/data

Exporte les données dans différents formats.

**Formats supportés :**
- json: Fichier JSON
- csv: Fichier CSV
- xlsx: Fichier Excel
- sqlite: Base de données SQLite

## Codes d'erreur

- 400: Requête invalide
- 401: Non autorisé (mot de passe incorrect)
- 404: Ressource non trouvée
- 500: Erreur serveur interne