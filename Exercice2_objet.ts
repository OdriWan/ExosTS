class ChatBis {
  nom!: string;
  race!: string;
  age!: number;
  poids!: number;

  afficherChatDeux(): void {
    console.log(
      `${this.nom} est un chat ${this.race}, âgé de ${this.age} ans et qui pèse ${this.poids}kg`
    );
  }
}

const chat1: ChatBis = new ChatBis();
chat1.nom = "Guppy";
chat1.race = "Exotic Shorthair";
chat1.age = 5;
chat1.poids = 3.5;

chat1.afficherChatDeux();
