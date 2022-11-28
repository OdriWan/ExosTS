/**
 * Je réinvente la méthode eval ♥
 * @param nombre1 Un nombre
 * @param nombre2 Un deuxième nombre
 * @param operateur Un opérateur
 * @returns Le calcul
 */
function calculSimple(nombre1 :number, nombre2 :number, operateur: string) :number {
    return eval(`${nombre1} ${operateur} ${nombre2}`);
};