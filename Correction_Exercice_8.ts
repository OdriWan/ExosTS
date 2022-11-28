function pyramide(nombre: number) {
  let ligne = "";
  for (let index = 0; index < nombre; index++) {
    ligne += "*";
    console.log(ligne);
  }
  for (let index = nombre - 1; index > 0; index--) {
    ligne = ligne.substring(0, index);
    console.log(ligne);
  }
}

pyramide(10);
