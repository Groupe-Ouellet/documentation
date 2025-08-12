---
sidebar_label: "Embauche"
---

# Embauche (Flow)
*Ce flow répond au besoin de la loi 25 sur la conservation de documents confidentiels*

<details>
<summary><strong>Déclencheur</strong></summary>

- Quand un formulaire d'embauche est rempli.

</details>

<details>
<summary><strong>Étapes principales</strong></summary>

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

</details>
---

<details>
<summary><strong>Notifications (exemple de courriel généré)</strong></summary>

<details>
<summary><strong>Voir l'exemple de courriel</strong></summary>

![Exemple d'email d'embauche](/img/email-embauche.png)

</details>

</details>
