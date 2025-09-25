// Déclaration des montants de départ
let a = 60000000 ;
let b = 40000000 ;
let c = 20000000 ;

// Somme totale des montants
let somme = a + b + c ;

// Catégorie A représente 75% de la somme
let categoriesA = somme / 100 * 75 ;

// Répartition de la catégorie A en trois parts égales
let Paul = categoriesA / 3 ;
let Marie = categoriesA / 3 ;
let EricetClaire = categoriesA / 3 / 2 ; // Chaque part de la troisième portion est divisée en deux

// Catégorie B représente 25% de la somme
let categoriesB = somme / 100 * 25 ;

// Répartition de la catégorie B en trois parts égales
let Mmemukuna = categoriesB / 3 ;
let Joseph = categoriesB / 3 ;
let Sarah = categoriesB / 3 ;

// Affichage des résultats
console.log("Paul reçoit : " + Paul)
console.log("Marie reçoit : " +  Marie)
console.log("Eric et Claire reçoivent chacun : " +  EricetClaire)
console.log("Madame MUKUNA reçoit : " +  Mmemukuna)
console.log("Joseph reçoit : " + Joseph)
console.log("Sarah reçoit : " + Sarah)
