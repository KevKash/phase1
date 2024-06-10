//var fruit;
//var fruit = ["apple", "banane", "orange"];
//var tailletab = fruit.length; //permet d'afficher aux tableau

//console.log(tailletab);
//console.log(fruit[0]);
//console.log(fruit[tailletab - 1]);

//var couleur;
//var couleur = ["marron", "orange", "bleu"]; //marron=0 orange=1 bleu=2
//var tailletab = couleur.length;

//console.log(tailletab);
//console.log(couleur["2"]);
//console.log(couleur);

//for (var i = 0; i < couleur.length; i++) {
//console.log(couleur[i]);
//}

//for (var i = 10; i >= 0; i--) {
//document.write(i + "<br>");
//}
fruits = ["Apple", "Banana"];

var newLength = fruits.push("Orange");

console.log(fruits);
console.log(newLength);

/*********4 fonctions pour manipuler un tableau indexé *********/
fruits = ["Apple", "Banana"];
//Ajouter à la fin du tableau

//Ajouter à la fin du tableau
// la fonction push exécute deux actions :
// 1- Ajouter un élément à la fin d'un tableau
// 2- Retourner la taille mise à jour du tableau. Dans cette exemple la valeur de "newLength" est égale à 3
var newLength = fruits.push("Orange");
// ["Apple", "Banana", "Orange"]
console.log(fruits);
console.log(newLength);

//Supprimer le dernier élément du tableau
// la fonction pop exécute deux actions :
// 1- Supprimer un élément à la fin d'un tableau
// 2- Retourner la valeur supprimée dans le tableau. Dans cette exemple la valeur de la variable "last" est égale à "orange"
var last = fruits.pop(); // supprime Orange (à la fin)
// ["Apple", "Banana"];
console.log(fruits);
console.log(last);

//Supprimer le premier élément du tableau
// La fonction "shift" exécute deux actions :
// 1- Supprimer le premier élément du tableau
// 2- Retourner la valeur de l'élément supprimé
var first = fruits.shift(); // supprime Apple (au début)

console.log(fruits);
// ["Banana"];
console.log(first);
// ["Apple"];

//Ajouter au début du tableau
// La fonction "unshift" exécute deux actions :

// 1- Ajouter un élément au début du tableau
// 2- Retourner la valeur de la taille du tableau
var newLength = fruits.unshift("Strawberry"); // ajoute au début

console.log(fruits);
// ["Strawberry", "Banana"];
console.log(newLength);
//2
