//

let SalaireMensuel = 500 ;

//calcule du Loyer

let loyer = 0.30 * SalaireMensuel ;

//calcule pour la Nourriture

let Nourriture = 0.20 * SalaireMensuel ;

//calcule du Transport

let Transport = 0.10 * SalaireMensuel ;

//valeur ajouter aux autres dépenses

let Autresdepenses = 50 ;
Autresdepenses += 25 ;

//calcule de la somme

let somme = loyer + Nourriture + Transport + Autresdepenses;

//calcule du reste

let reste =SalaireMensuel - somme ;

//Affichage

console.log("Le Salairemensuel est de :" + SalaireMensuel)
console.log("Le loyer est =" + loyer)
console.log("La Nourriture =" + Nourriture)
console.log("Le Transport =" + Transport)
console.log("Les Autresdepenses sont =" + Autresdepenses)
console.log("La somme est =" + somme)
console.log("Le Reste est =" + reste)
