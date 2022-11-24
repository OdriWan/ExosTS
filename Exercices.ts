// Exercice 1 -> Fonction qui affiche bonjour suivi du prénom

/** Fonction qui retourne "Bonjour" suivi du prénom passée en paramètre*/
const hello = function(name: string) {
    return console.log(`Bonjour ${name}`);
}

hello("Audrey");