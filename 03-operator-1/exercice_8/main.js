//

const SalaireMensuel = 500 ;

//calcule du Loyer

const loyer = 0.30 * SalaireMensuel ;

//calcule pour la Nourriture

const Nourriture = 0.20 * SalaireMensuel ;

//calcule du Transport

const Transport = 0.10 * SalaireMensuel ;

//valeur ajouter aux autres dépenses

let Autresdepenses = 50 ;
Autresdepenses += 25;


//calcule de la somme

let totalDepenses = loyer + Nourriture + Transport + Autresdepenses;

//calcule du reste

let reste =SalaireMensuel - totalDepenses ;

//Affichage

console.log("Le Salairemensuel est de :" + SalaireMensuel + "$");
console.log("Le loyer est =" + loyer  + "$");
console.log("La Nourriture =" + Nourriture  + "$");
console.log("Le Transport =" + Transport + "$");
console.log("Les Autresdepenses sont =" + Autresdepenses  + "$");
console.log("La somme est =" + totalDepenses  + "$");
console.log("Le Reste est = " + reste  + "$");
