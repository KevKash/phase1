var num0 = parseInt;

var num1 = window.prompt("inserez une premiere valeur numérique");

var secval = secval >= val;

window.prompt("veuillez entrez une  premier valeur: ");

window.prompt("veuillez rentrez une seconde valeur :");

// Le type de la variable "num1" est "string"
var num1 = window.prompt("Insérez la première valeur numérique !");
console.log(
  "Le type de la valeur de retour de la fonction 'prompt' : " + typeof num1
);
// Pour appliquer les opérations arythmétique à une variable, il faut absolument convertir le type de cette variable à un valeur numérique, grâce à la fonction parseInt ou bien la fonction "parseFloat"
num1 = parseInt(num1);
console.log(
  "Le type de la valeur de retour de la fonction 'parseInt' : " + typeof num1
);
// var
var num2 = window.prompt("Insérez la deuxième valeur numérique !");
num2 = parseInt(num2);

if (num1 < num2) {
  document.write(
    "La valeur du premier chiffre : " +
      num1 +
      " est inférieur de la valeur du deuxième chiffre : " +
      num2
  );
} else if (num1 > num2) {
  document.write(
    "La valeur du premier chiffre : " +
      num1 +
      " est supérieur de la valeur du deuxième chiffre : " +
      num2
  );
} else if (num1 == num2) {
  document.write(
    "La valeur du premier chiffre : " +
      num1 +
      " est égale de la valeur du deuxième chiffre : " +
      num2
  );
}
var couleurs = ["rouge", "jaune", "bleu", "vert", "orange"];
for (var i = couleurs.lenght; i >= 0; --i) {
  console.log(couleurs[i]);
}

1- A partir d'une boucle "for", afficher les chiffres de 10 à 0 sur la page du navigateur
2- Les chiffres doivent aller à la ligne à chaque exécution de la boucle "utilisation de la bvalise <br>"

for (var i = 10; i >= 0; i--) {
  document.write(i + "<br>");
}


fruits = ["Apple", "Banana"];
//Ajouter à la fin du tableau
var newLength = fruits.push("Orange");

console.log(fruits);
console.log(newLength);



/********* 4 fonctions pour manipuler un tableau indexé *********/
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



Comparaison de deux nombres
Ecrivez un programme comparaison.js qui fait saisir deux nombres puis compare leurs valeurs et affiche un message approprié (plus grand, plus petit, égal).

1- Afficher deux champs de formulaires à l'aide de la fonction prompt
2- Convertir les valeurs de retour des fonctions prompt aux valeurs numérique, grâce à la fonction "parseInt"
3- Affecter les valeurs de retours, chacune dans une variable : num1, num2
4- La partie comparaison : c'est à vous de développer


// Le type de la variable "num1" est "string"
var num1 = window.prompt("Insérez la première valeur numérique !");
console.log(
  "Le type de la valeur de retour de la fonction 'prompt' : " + typeof num1
);
// Pour appliquer les opérations arythmétique à une variable, il faut absolument convertir le type de cette variable à un valeur numérique, grâce à la fonction parseInt ou bien la fonction "parseFloat"
num1 = parseInt(num1);
console.log(
  "Le type de la valeur de retour de la fonction 'parseInt' : " + typeof num1
);
// var
var num2 = window.prompt("Insérez la deuxième valeur numérique !");
num2 = parseInt(num2);

if (num1 < num2) {
  document.write("La valeur du premier chiffre : " + num1 + " est inférieur de la valeur du deuxième chiffre : " + num2);
} else if (num1 > num2) {
    document.write(
      "La valeur du premier chiffre : " +
        num1 +
        " est supérieur de la valeur du deuxième chiffre : " +
        num2
    );
} else if (num1 == num2) {
    document.write(
      "La valeur du premier chiffre : " +
        num1 +
        " est égale de la valeur du deuxième chiffre : " +
        num2
    );
}


// La fonction "isNaN" il prend un paramètre (ici c'est num1) et vérifie si le type de la variable "number" ou "string". Après la vérification, elle retourne un boolean : true ou false.
// Si le type du paramètre est 'string', la fonction retourn true, sinon elle retourne false
var chaineDeCaractere = isNaN(num1);
console.log(chaineDeCaractere); 
// Sachant que le type de la variable num1 est devenu numérique (après avoir appliqué la fonction parseInt), quand on exécute la fonction 'isNaN'en lui envoyant la variable 'num1', comme paramètre, la valeur de retour de la fonction 'isNaN' sera 'false'.  
