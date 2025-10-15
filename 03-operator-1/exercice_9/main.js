// Déclaration des montants de départ
let a = 60000000 ;
let b = 40000000 ;
let c = 20000000 ;

// Somme totale des montants
let somme = a + b + c ;

// Catégorie A représente 75% de la somme
let categoriesA = somme / 100 * 75 ;

// Répartition de la catégorie A en trois parts égales
let paul = categoriesA / 3 ;
let marie = categoriesA / 3 ;
let ericetClaire = categoriesA / 3 / 2 ; // Chaque part de la troisième portion est divisée en deux

// Catégorie B représente 25% de la somme
let categoriesB = somme / 100 * 25 ;

// Répartition de la catégorie B en trois parts égales
let mmemukuna = categoriesB / 3 ;
let joseph = categoriesB / 3 ;
let sarah = categoriesB / 3 ;

// Affichage des résultats
console.log("Paul reçoit : " + paul)
console.log("Marie reçoit : " +  marie)
console.log("Eric et Claire reçoivent chacun : " +  ericetClaire)
console.log("Madame MUKUNA reçoit : " +  mmemukuna)
console.log("Joseph reçoit : " + joseph)
console.log("Sarah reçoit : " + sarah)
