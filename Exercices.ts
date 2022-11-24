// Exercice 1 -> Fonction qui affiche bonjour suivi du prénom

/** Retourne "Bonjour" suivi du prénom passée en paramètre*/
const hello = function(name: string) {
    return console.log(`Bonjour ${name}`);
}

hello("Audrey");


// Exercice 2 -> Fonction qui prend deux nombres en paramètres et retourne la somme de ces deux nombres

//** Retourne la somme de deux nombres passés en paramètre */
const somme = function(nombre1: number, nombre2: number) {
    return console.log(`${nombre1} + ${nombre2} = ${nombre1 + nombre2}`);
}

somme(18, 9);