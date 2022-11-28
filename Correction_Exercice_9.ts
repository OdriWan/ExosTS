/**
 * Retourne le nombre de billets et de pièces nécessaires
 * @param nombre Valeur à identifier
 */
function monnaieDeux(nombre: number): void {
  const monnaies: number[] = [
    500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.02, 0.01,
  ];

  for (let monnaie of monnaies) {
    let nombreMonnaie = Math.floor(nombre / monnaie);
    if (nombreMonnaie !== 0) {
      if (monnaie >= 5) {
        console.log(`Billet(s) de ${monnaie}€ : ${nombreMonnaie}`);
      } else {
        console.log(`Pièce(s) de ${monnaie}€ : ${nombreMonnaie}`);
      }
      nombre -= nombreMonnaie * monnaie;
    }
  }
}

monnaieDeux(888.88);
