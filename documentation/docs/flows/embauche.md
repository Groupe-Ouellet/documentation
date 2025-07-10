---
sidebar_label: "Embauche"
---

# Embauche (Flow)
*Ce flow répond au besoin de la loi 25 sur la conservation de documents confidentitels* 

## Déclencheur
- Quand un formulaire d'embauche est rempli.

## Étapes principales
1. **Initialisation**
   - Créer la variable Jour d'attente.
2. **Contôleur**
   - Obtenir le courriel du contrôleur.
3. **Informe**
   - Envoie un courriel au contrôleur pour l'avertir d'une complétion du formulaire d'embauche
4. **Gestion des délais**
   - Attend deux jour de moins que la valeur d'attente
   - Averti le contrôleur que les documents seront supprimé dans deux jours
   - Attend les deux jours restants
6. **Suppression**
   - Supprime les fichiers confidentiels.
---

## Notifications (exemple de courriel généré)

![Exemple d'email d'embauche](/img/email-onboarding.png)
