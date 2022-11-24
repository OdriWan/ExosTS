// Exercice 1 -> Fonction qui affiche bonjour suivi du prénom

/** Retourne "Bonjour" suivi du prénom passée en paramètre*/
const hello = function(name: string) :string {
    return (`Bonjour ${name} !`);
}

console.log(hello("Audrey"));


// Exercice 2 -> Fonction qui prend deux nombres en paramètres et retourne la somme de ces deux nombres

//** Retourne la somme de deux nombres passés en paramètre */
const somme = function(nombre1: number, nombre2: number) :number {
    return (nombre1 + nombre2);
}

console.log(somme(18, 9));


// Exercice 3 -> Fonction qui prend en paramètre le coût de fabrication et son prix de vente et retourne le bénéfice

/** Retourne s'il y a un gain ou une perte en fonction du coût de fabrication et du prix de vente */
const benefice = function(coutFabrication: number, prixVente: number) :string {
    if (prixVente > coutFabrication) { // Si le prix de vente est supérieur au coût de fabrication -> Gain
        return (`Gain de ${prixVente - coutFabrication}€`);
    } else if (coutFabrication > prixVente) { // Si le coût de fabrication est supérieur au prix de vente -> Perte
        return (`Perte de ${coutFabrication - prixVente}€`);
    } else { // Si le prix de vente est égal au coût de fabrication -> Pas de gain ni de perte
        return (`Pas de gain ni de perte`);
    }
}

console.log(benefice(8, 20));


// Exercice 4 -> Fonction qui retourne le plus grand des 3 nombres passés en paramètres

//** Retourne le plus grand des 3 nombre en paramètres */
const plusGrand = function(nombre1: number, nombre2: number, nombre3: number) :string {
    let resultat:number = nombre1; // On passe le premier nombre dans une variable intermédiaire
    if (nombre2 > resultat) { // Si le nombre 2 est supérieur à celui de la variable intermédiaire
        resultat = nombre2;
    } else if (nombre3 > resultat) { // Si le nombre 3 est supérieur à celui de la variable intermédiaire
        resultat = nombre3;
    }
    return (`Le plus grand nombre est ${resultat}`);
}

console.log(plusGrand(12, 18, -20));


// Exercice 5 -> Fonction qui retourne le plus grand d'un nombre indéfini de nombre

/** Retourne le plus grand nombre d'une liste indéfinie */
const plusGrandIndefini = function(...nombres: number[]) :string {
    let resultat:number = nombres[0];
    for (let index = 1; index < nombres.length; index++) {
        if (nombres[index] > resultat) {
            resultat = nombres[index];
        }
    } 
    return (`Le nombre le plus grand est ${resultat}`);
}

console.log(plusGrandIndefini(12, 15, 18, 65, -80, 8));