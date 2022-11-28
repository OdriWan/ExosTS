// Bulletin : Nom du gars, notes
    // Calculer la moyenne
    // Vérifier note
        // Si note inférieure à 0 et supérieure à 20 : PAS PRISE EN COMPTE
        // Additionner toutes les valeurs et diviser par le nombre de valeurs
        // Retourner la moyenne
    // Définir la mention
        // Si c'est inférieur à 4 : Catastrophe
        // Inférieur à 10 : Insuffisant
        // Inférieur à 14 : Passable
        // Inférieur à 18 : Bien
        // Inférieur à 20 : Très bien

/**
 * Vérifier que la note est bien comprise entre 0 et 20
 * @param note Note
 * @returns Vrai si la note est valide
 */
function verifierNote(note: number): boolean {
    if (note < 0 || note > 20) {
        return false;
    } else {
        return true;
    }
}

/**
 * Calcule la moyenne d'un élève à partir de la liste de ses notes
 * @param notes Liste de notes
 * @returns La moyenne / 20
 */
function calculerMoyenne(...notes: number[]) :number {
    let moyenne = 0;
    for (let note of notes) {
        if (verifierNote(note)) {
            moyenne += note;
        } else {
            console.log(`La note ${note} a été ignorée car non valide !`);
        }

    }
    return moyenne / notes.length;
}

/**
 * Attribue une mention en fonction de la moyenne
 * @param moyenne La moyenne à vérifier
 * @returns Une mention
 */
function definirMention(moyenne: number) :string {
    if (moyenne < 4) {
        return `Catastrophique`;
    } else if (moyenne < 10) {
        return `Insuffisant`;
    } else if (moyenne < 14) {
        return `Passable`;
    } else if (moyenne < 18) {
        return `Bien`;
    } else {
        return `Très bien`;
    }
}

/**
 * Retourne le bulletin d'un élève
 * @param nomEleve Nom de l'élève
 * @param notes Notes de l'élève
 * @returns Bulletin et appréciation
 */
function bulletin(nomEleve: string, ...notes: number[]) :string {
    let moyenne: number = calculerMoyenne(...notes);
    let mention: string = definirMention(moyenne);
    return `${nomEleve} a une moyenne de ${moyenne}, son travail est donc ${mention} !`;
}

const bulletinTheodule :string = bulletin("Théodule", 5, 8, 20, 6, 9, 15, 12, 11, 5, 7);

console.log(bulletinTheodule);