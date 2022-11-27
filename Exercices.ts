// Exercice 1 -> Fonction qui affiche bonjour suivi du prénom

/** Retourne "Bonjour" suivi du prénom passée en paramètre*/
const hello = function (name: string): string {
  return `Bonjour ${name} !`;
};

console.log(hello("Audrey"));

// Exercice 2 -> Fonction qui prend deux nombres en paramètres et retourne la somme de ces deux nombres

//** Retourne la somme de deux nombres passés en paramètre */
const somme = function (nombre1: number, nombre2: number): number {
  return nombre1 + nombre2;
};

console.log(somme(18, 9));

// Exercice 3 -> Fonction qui prend en paramètre le coût de fabrication et son prix de vente et retourne le bénéfice

/** Retourne s'il y a un gain ou une perte en fonction du coût de fabrication et du prix de vente */
const benefice = function (coutFabrication: number, prixVente: number): string {
  if (prixVente > coutFabrication) {
    // Si le prix de vente est supérieur au coût de fabrication -> Gain
    return `Gain de ${prixVente - coutFabrication}€`;
  } else if (coutFabrication > prixVente) {
    // Si le coût de fabrication est supérieur au prix de vente -> Perte
    return `Perte de ${coutFabrication - prixVente}€`;
  } else {
    // Si le prix de vente est égal au coût de fabrication -> Pas de gain ni de perte
    return `Pas de gain ni de perte`;
  }
};

console.log(benefice(8, 20));

// Exercice 4 -> Fonction qui retourne le plus grand des 3 nombres passés en paramètres

//** Retourne le plus grand des 3 nombre en paramètres */
const plusGrand = function (
  nombre1: number,
  nombre2: number,
  nombre3: number
): string {
  let resultat: number = nombre1; // On passe le premier nombre dans une variable intermédiaire
  if (nombre2 > resultat) {
    // Si le nombre 2 est supérieur à celui de la variable intermédiaire
    resultat = nombre2;
  } else if (nombre3 > resultat) {
    // Si le nombre 3 est supérieur à celui de la variable intermédiaire
    resultat = nombre3;
  }
  return `Le plus grand nombre est ${resultat}`;
};

console.log(plusGrand(12, 18, -20));

// Exercice 5 -> Fonction qui retourne le plus grand d'un nombre indéfini de nombre

/** Retourne le plus grand nombre d'une liste indéfinie */
const plusGrandIndefini = function (...nombres: number[]): string {
  let resultat: number = nombres[0];
  for (let index = 1; index < nombres.length; index++) {
    if (nombres[index] > resultat) {
      resultat = nombres[index];
    }
  }
  return `Le nombre le plus grand est ${resultat}`;
};

console.log(plusGrandIndefini(12, 15, 18, 65, -80, 8));

// Exercice 6 -> Calcul la moyenne de l'élève et retourne une mention

/** Calcul la moyenne du tableau de notes passé en paramètres */
const moyenneEleve = function (notes: number[]): number {
  let moyenne: number = 0;
  for (let index = 0; index < notes.length; index++) {
    if (notes[index] < 0 || notes[index] > 20) {
      console.log("Note non valide");
      moyenne = -1; // Passe la moyenne en "non valide" pour ne pas exécuter la fonction suivante
      break;
    } else {
      moyenne = moyenne + notes[index];
    }
  }
  moyenne = moyenne / notes.length;
  return moyenne;
};

/** Affiche une mention en fonction de la liste de notes de l'élève */
const mentionEleve = function (nom: string, ...notes: number[]): string {
  let moyenne: number = moyenneEleve(notes);
  if (moyenne >= 0 && moyenne <= 4) {
    return "Catastrophique";
  } else if (moyenne >= 5 && moyenne <= 10) {
    return "Insuffisant";
  } else if (moyenne >= 11 && moyenne <= 14) {
    return "Passable";
  } else if (moyenne >= 15 && moyenne <= 18) {
    return "Bien";
  } else if (moyenne >= 19 && moyenne <= 20) {
    return "Très bien";
  } else {
    return "Moyenne non valide";
  }
};

console.log(mentionEleve("Audrey", 12, 15, -18, 15, 19));

// Exercice 7 -> Fonction qui prend en paramètres deux nombres et un opérateur et effectue l'opération

/** Retourne le résultat de deux nombres et d'un opérateur passés en paramètres */
const operation = function (
  nombre1: number,
  operateur: string,
  nombre2: number
): number {
  return parseInt(eval(`${nombre1} ${operateur} ${nombre2}`));
};

console.log(operation(12, "+", 8));

// Exercice 8 -> Fonction qui prend en paramètre un nombre et affiche une pyramide d'étoiles

//** Retourne une pyramide du nombre d'étoiles passé en paramètres */
const pyramideEtoiles = function (nombre: number): void {
  for (let index = 1; index <= nombre; index++) {
    console.log("*".repeat(index));
  }
  for (let index = nombre - 1; index > 0; index--) {
    console.log("*".repeat(index));
  }
};

pyramideEtoiles(10);

// Exercice 9 -> Fonction qui prend en paramètre un nombre décimal et qui retourne le nombre de billets et de pièces nécessaires pour atteindre ce nombre

/**
 * Fonction qui décompose un nombre en indiquant le nombre de billets et de pièces nécessaires
 * @param nombre Le nombre de départ
 */
const monnaie = function (nombre: number): void {
  const monnaie: number[] = [500, 200, 20, 10, 5, 2, 0.5, 0.02, 0.01];
  let resultat: number = nombre;
  let compteur: number = 0;
  for (let index = 0; index < monnaie.length; index++) {
    while (resultat - monnaie[index] >= 0) {
      resultat = Math.floor((resultat - monnaie[index]) * 100) / 100;
      compteur++;
    }
    if (monnaie[index] > 2) {
      console.log(`Billet(s) de ${monnaie[index]} : ${compteur}`);
    } else {
      console.log(`Pièce(s) de ${monnaie[index]} : ${compteur}`);
    }
    compteur = 0;
  }
};

monnaie(2437.57);
