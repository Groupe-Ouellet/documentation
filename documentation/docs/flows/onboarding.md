---
sidebar_label: 'Onboarding'
---

# Onboarding (Flow)

## Déclencheur
- Quand un formulaire d'onboarding est rempli.

## Étapes principales
1. **Initialisation**
   - Créer des variables pour les listes de logiciels et de matériels.
2. **Collecte d'informations**
   - Obtenir les courriels des partenaires TI depuis `DB.xlsx`.
   - Obtenir le courriel du DG depuis `DB.xlsx`.
3. **Création de compte**
   - Créer une nouvelle adresse email pour l'utilisateur.
4. **Gestion du matériel**
   - Construire les listes de matériel à installer et à acheter.
5. **Notifications**
   - Envoyer un courriel récapitulatif au partenaire TI et au DG.
6. **Gestion des erreurs**
   - En cas d'erreur, envoyer un avis au créateur de la requête.

---

## Notifications (exemples de courriels générés)

![Exemple d'email d'onboarding](/img/email-onboarding.png) 