---
sidebar_label: "Base de données"
---

# Documentation de la Base de Données

Cette section décrit le schéma de la base de données SQLite pour CatéGO (QuizMaster).

## Vue d'ensemble

La base de données utilise SQLite et contient 4 tables principales pour gérer les quiz, les cartes, les catégories et les soumissions des utilisateurs.

## Tables

### Quiz

Stocke les informations sur les quiz disponibles.

| Champ        | Type     | Description                                    |
|--------------|----------|------------------------------------------------|
| id           | INTEGER  | Identifiant unique du quiz (clé primaire)     |
| name         | TEXT     | Nom du quiz                                    |
| description  | TEXT     | Description du quiz                            |
| isActive     | BOOLEAN  | Statut du quiz (1 = actif, 0 = inactif)       |
| created_at   | DATETIME | Date de création (défaut: CURRENT_TIMESTAMP)  |

**Exemple de données :**
```sql
INSERT INTO quiz (name, description, isActive) VALUES 
('Quiz Fruits et Légumes', 'Associez chaque aliment à sa catégorie correcte.', 1),
('Quiz Animaux', 'Classifiez les animaux selon leur habitat naturel.', 1);
```

### Card

Stocke les cartes (éléments) de chaque quiz.

| Champ            | Type     | Description                                    |
|------------------|----------|------------------------------------------------|
| id               | INTEGER  | Identifiant unique de la carte (clé primaire) |
| text_description | TEXT     | Description textuelle de la carte              |
| quiz_id          | INTEGER  | Identifiant du quiz (clé étrangère)           |
| created_at       | DATETIME | Date de création (défaut: CURRENT_TIMESTAMP)  |

**Contraintes :**
- `FOREIGN KEY (quiz_id) REFERENCES quiz (id) ON DELETE CASCADE`

**Exemple de données :**
```sql
INSERT INTO card (text_description, quiz_id) VALUES 
('Orange', 1),
('Tomate', 1),
('Pomme', 1),
('Carotte', 1);
```

### Category

Stocke les catégories disponibles pour chaque quiz.

| Champ      | Type     | Description                                    |
|------------|----------|------------------------------------------------|
| id         | INTEGER  | Identifiant unique de la catégorie (clé primaire) |
| name       | TEXT     | Nom de la catégorie                            |
| quiz_id    | INTEGER  | Identifiant du quiz (clé étrangère)           |
| created_at | DATETIME | Date de création (défaut: CURRENT_TIMESTAMP)  |

**Contraintes :**
- `FOREIGN KEY (quiz_id) REFERENCES quiz (id) ON DELETE CASCADE`

**Exemple de données :**
```sql
INSERT INTO category (name, quiz_id) VALUES 
('Fruit', 1),
('Légume', 1),
('Terrestres', 2),
('Aquatiques', 2);
```

### Submission

Stocke les soumissions des utilisateurs.

| Champ       | Type     | Description                                    |
|-------------|----------|------------------------------------------------|
| id          | INTEGER  | Identifiant unique de la soumission (clé primaire) |
| user_name   | TEXT     | Nom de l'utilisateur                           |
| card_id     | INTEGER  | Identifiant de la carte (clé étrangère)       |
| category_id | INTEGER  | Identifiant de la catégorie (clé étrangère)   |
| timestamp   | DATETIME | Date de soumission (défaut: CURRENT_TIMESTAMP) |
| status      | TEXT     | Statut de la soumission (pending/approved/rejected) |

**Contraintes :**
- `FOREIGN KEY (card_id) REFERENCES card (id) ON DELETE CASCADE`
- `FOREIGN KEY (category_id) REFERENCES category (id) ON DELETE CASCADE`
- `CHECK (status IN ('pending', 'approved', 'rejected'))`

**Exemple de données :**
```sql
INSERT INTO submission (user_name, card_id, category_id, status) VALUES 
('John Doe', 1, 1, 'pending'),
('Jane Smith', 2, 2, 'approved');
```

## Relations

```
Quiz (1) ←→ (N) Card
Quiz (1) ←→ (N) Category
Card (1) ←→ (N) Submission
Category (1) ←→ (N) Submission
```


## Initialisation

La base de données est automatiquement initialisée avec des données d'exemple lors du premier démarrage de l'application. Le fichier `database.js` contient la logique d'initialisation et d'insertion des données de test.