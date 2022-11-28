/**
 * Fonction qui retourne le plus grand nombre
 * @param nombre1 un nombre
 * @param nombre2 un autre nombre
 * @param nombre3 encore un nombre
 * @returns le plus grand nombre
 */
function plusGrandNombre(nombre1 :number, nombre2 :number, nombre3 :number) :string {
    let plusGrandNombre :number = nombre1;
    if (nombre2 > plusGrandNombre) {
        plusGrandNombre = nombre2;
    } else if (plusGrandNombre < nombre3) {
        plusGrandNombre = nombre3;
    }
    return `Le plus grand nombre est ${plusGrandNombre} ♥`;
};

console.log(plusGrandNombre(3, 8, 90));