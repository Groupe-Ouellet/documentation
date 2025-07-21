---
sidebar_label: "Embauche"
---

# Embauche (Flow)
*Ce flow répond au besoin de la loi 25 sur la conservation de documents confidentiels*

## Déclencheur
- Quand un formulaire d'embauche est rempli.

## Étapes principales
1. **Initialisation**
   - Créer la variable Jour d'attente.
2. **Contrôleur**
   - Obtenir le courriel du contrôleur.
3. **Informe**
   - Envoie un courriel au contrôleur pour l'avertir de la complétion du formulaire d'embauche
4. **Gestion des délais**
   - Attend deux jours de moins que la valeur d'attente
   - Avertit le contrôleur que les documents seront supprimés dans deux jours
   - Attend les deux jours restants
5. **Suppression**
   - Supprime les fichiers confidentiels.
---

## Notifications (exemple de courriel généré)

![Exemple d'email d'embauche](/img/email-embauche.png)
