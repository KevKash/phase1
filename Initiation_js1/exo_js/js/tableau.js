var fruit;
var fruit = ["apple", "banane", "orange"];
var tailletab = fruit.length; //permet d'afficher aux tableau

console.log(tailletab);
console.log(fruit[0]);
console.log(fruit[tailletab - 1]);

var couleur;
var couleur = ["marron", "orange", "bleu"]; //marron=0 orange=1 bleu=2
var tailletab = couleur.length;

console.log(tailletab);
console.log(couleur["2"]); //couleur selectionner bleu
console.log(couleur);

for (var i = 0; i < couleur.length; i++) {
  console.log(couleur[i]);
}
