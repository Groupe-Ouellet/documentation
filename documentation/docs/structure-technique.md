---
sidebar_label: 'Structure technique'
---

## Bibliothèque de Documents

* **zzz_Configuration/** : Dossier principal contenant toutes les configurations.
    * `DB.xlsx` : Contient les données nécessaires pour faire fonctionner les scripts (ex: courriels des DG).
    * `Documentation.docx` : Le document original de ce guide.
* **Email templates/** : Dossier des matrices HTML utilisées pour l'envoi de courriels.
    * `onboarding.html`, `offboarding.html`, `erreur.html`.
* **Flows/** : Dossier contenant les flows exportés (`.zip`) pour sauvegarde.

---

## Flows / Scripts Power Automate

### Onboarding

* **Déclencheur** : Quand un formulaire d'onboarding est rempli.
* **Schéma** :
    1. Créer des variables pour les listes de logiciels et de matériels.
    2. Obtenir les courriels des partenaires TI depuis `DB.xlsx`.
    3. Créer une nouvelle adresse email pour l'utilisateur.
    4. Construire les listes de matériel (à installer / à acheter).
    5. Obtenir le courriel du DG depuis `DB.xlsx`.
    6. Envoyer un courriel récapitulatif au partenaire TI et au DG.
    7. En cas d'erreur, envoyer un avis au créateur de la requête.

### Offboarding

* **Déclencheur** : Quand un formulaire d'offboarding est rempli.
* **Schéma** :
    1. Créer des variables pour le matériel, les logiciels et l'ID de l'employé.
    2. Rechercher dans la liste Onboarding le nom de l'employé qui part.
    3. Obtenir toutes les informations de l'employé grâce à sa demande d'onboarding initiale.
    4. Mettre à jour les listes de matériel et de logiciels à récupérer/désactiver.
    5. Supprimer la demande d'offboarding et d'onboarding des listes.
    6. Envoyer un courriel récapitulatif au partenaire TI et au DG.
    7. En cas d'erreur, envoyer un avis au créateur de la requête.

---

### Notifications (exemples de courriels générés)

**Avis de création de compte (Onboarding) :**
![Exemple d'email d'onboarding](/img/email-onboarding.png)

**Avis de départ (Offboarding) :**
![Exemple d'email d'offboarding](/img/email-offboarding.png)