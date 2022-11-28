type Chat = {
  nom: string;
  race: string;
  age: number;
  poids: number;
};

/**
 * Affiche les informations du chat passé en paramètre
 * @param chat Un chat de type chat
 * @param surnoms Surnoms du chat
 * @returns Les informations du chat + ses surnoms
 */
function infosChat(chat: Chat, ...surnoms: string[]) {
  return `${chat.nom} est un chat ${chat.race}, de ${chat.age} ans, qui pèse ${chat.poids} kg. Ses surnoms sont ${surnoms}`;
}

let Pandora: Chat = {
  nom: "Pandora",
  race: "Européen",
  age: 2,
  poids: 3,
};

console.log(
  infosChat(Pandora, "Chipie", "Minille", "Jolie", "ChiPommeDeTerre")
);

// Correction

const chat = {
  nom: "Bébou",
  age: 3,
  race: "Clochard",
  poids: 200,
};

function getChat(...surnoms: string[]) {
  let listeSurnoms = surnoms.map((surnom) => `${surnom}`).join(", ");
  console.log(
    `Mon super chat s'appelle ${chat.nom},  il a ${chat.age} ans, il pèse ${chat.poids} et c'est un ${chat.race}. Ses surnoms sont ${listeSurnoms}`
  );
}

getChat("SDF", "GROTA", "TG", "SuperTramp");
