// Exercice 1 -> Fonction qui affiche bonjour suivi du prénom

/** Retourne "Bonjour" suivi du prénom passée en paramètre*/
const hello = function(name: string) {
    return console.log(`Bonjour ${name} !`);
}

hello("Audrey");


// Exercice 2 -> Fonction qui prend deux nombres en paramètres et retourne la somme de ces deux nombres

//** Retourne la somme de deux nombres passés en paramètre */
const somme = function(nombre1: number, nombre2: number) {
    return console.log(`${nombre1} + ${nombre2} = ${nombre1 + nombre2}`);
}

somme(18, 9);


// Exercice 3 -> Fonction qui prend en paramètre le coût de fabrication et son prix de vente et retourne le bénéfice

/** Retourne s'il y a un gain ou une perte en fonction du coût de fabrication et du prix de vente */
const benefice = function(coutFabrication: number, prixVente: number) {
    if (prixVente > coutFabrication) { // Si le prix de vente est supérieur au coût de fabrication -> Gain
        return console.log(`Gain de ${prixVente - coutFabrication}€`);
    } else if (coutFabrication > prixVente) { // Si le coût de fabrication est supérieur au prix de vente -> Perte
        return console.log(`Perte de ${coutFabrication - prixVente}€`);
    } else { // Si le prix de vente est égal au coût de fabrication -> Pas de gain ni de perte
        return console.log(`Pas de gain ni de perte`);
    }
}

benefice(8, 20);