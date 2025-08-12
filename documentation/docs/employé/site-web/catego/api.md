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

<details>
<summary>POST /api/auth/validation</summary>

Authentification pour l'accès à l'interface de validation.

**Paramètres :**
```json
{
  "password": "validation123"
}
```

**Réponse :**
```json
{
  "success": true,
  "message": "Accès validation autorisé"
}
```
</details>

<details>
<summary>POST /api/auth/admin</summary>

Authentification pour l'accès à l'interface d'administration.

**Paramètres :**
```json
{
  "password": "admin123"
}
```

**Réponse :**
```json
{
  "success": true,
  "message": "Accès admin autorisé"
}
```
</details>

## Quiz

<details>
<summary>GET /api/quiz/active</summary>

Récupère tous les quiz actifs.

**Réponse :**
```json
{
  "quizzes": [
    {
      "id": 1,
      "name": "Quiz Fruits et Légumes",
      "description": "Associez chaque aliment à sa catégorie correcte.",
      "isActive": 1,
      "created_at": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```
</details>

<details>
<summary>GET /api/quiz/all</summary>

Récupère tous les quiz (pour l'administration).

**Réponse :**
```json
{
  "quizzes": [
    {
      "id": 1,
      "name": "Quiz Fruits et Légumes",
      "description": "Associez chaque aliment à sa catégorie correcte.",
      "isActive": 1,
      "created_at": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```
</details>

<details>
<summary>GET /api/quiz/{id}</summary>

Récupère un quiz spécifique avec ses cartes et catégories.

**Réponse :**
```json
{
  "quiz": {
    "id": 1,
    "name": "Quiz Fruits et Légumes",
    "description": "Associez chaque aliment à sa catégorie correcte.",
    "isActive": 1,
    "created_at": "2024-01-01T00:00:00.000Z"
  },
  "cards": [
    {
      "id": 1,
      "text_description": "Orange",
      "quiz_id": 1,
      "created_at": "2024-01-01T00:00:00.000Z"
    }
  ],
  "categories": [
    {
      "id": 1,
      "name": "Fruit",
      "quiz_id": 1,
      "created_at": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```
</details>

<details>
<summary>POST /api/quiz</summary>

Crée un nouveau quiz.

**Paramètres :**
```json
{
  "name": "Nouveau Quiz",
  "description": "Description du quiz",
  "isActive": true
}
```

**Réponse :**
```json
{
  "id": 3,
  "name": "Nouveau Quiz",
  "description": "Description du quiz",
  "isActive": true
}
```
</details>

<details>
<summary>PUT /api/quiz/{id}</summary>

Met à jour un quiz existant.

**Paramètres :**
```json
{
  "name": "Quiz Modifié",
  "description": "Nouvelle description",
  "isActive": false
}
```

**Réponse :**
```json
{
  "id": 1,
  "name": "Quiz Modifié",
  "description": "Nouvelle description",
  "isActive": false
}
```
</details>

<details>
<summary>PATCH /api/quiz/{id}/toggle</summary>

Active/désactive un quiz.

**Réponse :**
```json
{
  "id": 1,
  "name": "Quiz Fruits et Légumes",
  "description": "Associez chaque aliment à sa catégorie correcte.",
  "isActive": 0,
  "created_at": "2024-01-01T00:00:00.000Z"
}
```
</details>

<details>
<summary>DELETE /api/quiz/{id}</summary>

Supprime un quiz et toutes ses données associées.

**Réponse :**
```json
{
  "message": "Quiz deleted successfully"
}
```
</details>

## Cartes

<details>
<summary>GET /api/cards/{quizId}</summary>

Récupère toutes les cartes d'un quiz.

**Réponse :**
```json
[
  {
    "id": 1,
    "text_description": "Orange",
    "quiz_id": 1,
    "created_at": "2024-01-01T00:00:00.000Z"
  }
]
```
</details>

<details>
<summary>POST /api/cards</summary>

Crée une nouvelle carte.

**Paramètres :**
```json
{
  "text_description": "Nouvelle carte",
  "quiz_id": 1
}
```

**Réponse :**
```json
{
  "id": 7,
  "text_description": "Nouvelle carte",
  "quiz_id": 1
}
```
</details>

<details>
<summary>DELETE /api/cards/{id}</summary>

Supprime une carte.

**Réponse :**
```json
{
  "message": "Card deleted successfully"
}
```
</details>

## Catégories

<details>
<summary>GET /api/categories/{quizId}</summary>

Récupère toutes les catégories d'un quiz.

**Réponse :**
```json
[
  {
    "id": 1,
    "name": "Fruit",
    "quiz_id": 1,
    "created_at": "2024-01-01T00:00:00.000Z"
  }
]
```
</details>

<details>
<summary>POST /api/categories</summary>

Crée une nouvelle catégorie.

**Paramètres :**
```json
{
  "name": "Nouvelle catégorie",
  "quiz_id": 1
}
```

**Réponse :**
```json
{
  "id": 3,
  "name": "Nouvelle catégorie",
  "quiz_id": 1
}
```
</details>

<details>
<summary>DELETE /api/categories/{id}</summary>

Supprime une catégorie.

**Réponse :**
```json
{
  "message": "Category deleted successfully"
}
```
</details>

## Soumissions

<details>
<summary>POST /api/submissions</summary>

Crée une nouvelle soumission.

**Paramètres :**
```json
{
  "user_name": "John Doe",
  "card_id": 1,
  "category_id": 1
}
```

**Réponse :**
```json
{
  "id": 1,
  "user_name": "John Doe",
  "card_id": 1,
  "category_id": 1,
  "status": "pending"
}
```
</details>

<details>
<summary>GET /api/submissions/pending</summary>

Récupère toutes les soumissions en attente de validation.

**Réponse :**
```json
{
  "submissions": {
    "Fruit": [
      {
        "id": 1,
        "user_name": "John Doe",
        "timestamp": "2024-01-01T00:00:00.000Z",
        "status": "pending",
        "card_description": "Orange",
        "category_name": "Fruit",
        "category_id": 1
      }
    ]
  }
}
```
</details>

<details>
<summary>PATCH /api/submissions/{id}/status</summary>

Met à jour le statut d'une soumission.

**Paramètres :**
```json
{
  "status": "approved"
}
```

**Réponse :**
```json
{
  "id": 1,
  "status": "approved"
}
```
</details>

<details>
<summary>GET /api/submissions/export</summary>

Récupère les soumissions pour export.

**Paramètres de requête :**
- `quiz_id` (optionnel) : ID du quiz ou "all"
- `status` (optionnel) : "approved" pour filtrer

**Réponse :**
```json
{
  "submissions": [
    {
      "id": 1,
      "user_name": "John Doe",
      "timestamp": "2024-01-01T00:00:00.000Z",
      "status": "approved",
      "card_description": "Orange",
      "category_name": "Fruit",
      "quiz_name": "Quiz Fruits et Légumes"
    }
  ]
}
```
</details>

## Export

<details>
<summary>POST /api/export/data</summary>

Exporte les données dans différents formats.

**Paramètres :**
```json
{
  "format": "csv",
  "quiz_id": "all",
  "status": "approved"
}
```

**Formats supportés :**
- `json` : Fichier JSON
- `csv` : Fichier CSV
- `xlsx` : Fichier Excel
- `sqlite` : Base de données SQLite

**Réponse :** Fichier téléchargé selon le format demandé
</details>

## Codes d'erreur

- `400` : Requête invalide
- `401` : Non autorisé (mot de passe incorrect)
- `404` : Ressource non trouvée
- `500` : Erreur serveur interne