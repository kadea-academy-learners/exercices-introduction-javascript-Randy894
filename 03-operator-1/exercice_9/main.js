// Déclaration des montants de départ
const a = 60000000 ;
const b = 40000000 ;
const c = 20000000 ;

// Somme totale des montants
const somme = a + b + c ;

// Catégorie A représente 75% de la somme
const categoriesA = somme / 100 * 75 ;

// Répartition de la catégorie A en trois parts égales
const paul = categoriesA / 3 ;
const marie = categoriesA / 3 ;
const ericetClaire = categoriesA / 3 / 2 ; // Chaque part de la troisième portion est divisée en deux

// Catégorie B représente 25% de la somme
const categoriesB = somme / 100 * 25 ;

// Répartition de la catégorie B en trois parts égales
const mmemukuna = categoriesB / 3 ;
const joseph = categoriesB / 3 ;
const sarah = categoriesB / 3 ;

// Affichage des résultats
console.log("Paul reçoit : " + paul)
console.log("Marie reçoit : " +  marie)
console.log("Eric et Claire reçoivent chacun : " +  ericetClaire)
console.log("Madame MUKUNA reçoit : " +  mmemukuna)
console.log("Joseph reçoit : " + joseph)
console.log("Sarah reçoit : " + sarah)
