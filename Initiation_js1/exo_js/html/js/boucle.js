for (var i = 1; i <= 10; i += 2) {
  document.write("<p> instruction exécutée : " + i + "</p>");
}
/*WHILE SERT A MAINTENIR LA BOIte de diallogue*/

for (var j = 1; j <= 10; j++) {
  document.write("<p> Instruction executée :" + j + "</p>");
}

var monCompte = false;
var temps = 0;

while (monCompte == false) {
  monCompte = true;
  temps++;
}
document.write("<h3> Sous sur mon compte : " + monCompte + "</h3>");
document.write("<h3> Jusqu'a 2000$ , il me faut :" + temps + "mois </h3>"); //

/*var age = window.prompt("Veuillez saisir un age compris entre 3-120 (ans)");
age >= 4;
document.write("tu as " + age + " ans.");
age <= 119;
document.write("tu as " + age + " ans.");

if (age <= 4) {
  alert("vous n'êtes âs assez agé");
  document.location.href = "http://nom de domaine d'un site";
} else if (age >= 119) {
  alert("vous n'etes plus vivants");
  document.location.href = "http://nom de domaine d'un site";
}*/

/*1- Je déclare la majorité légale "majoriteFR" avec la valeur 18
2- Je demande l'age de l'utilisateur
3- Je déclare une variable "age" et j'affecte le la réponse de l'utilisateur à cette variable
4- Je convertie la réponse de l'utilisateur, qui est en chaîne de caractère en type "number", en utilisant la fonction "parseInt" par défaut de JS, car la boîte de dialogue du formulaire nous retourne toujours un type de chaîne de caractère, même si la valeur saisie est un chiffre*/
/*var majoriteFR = 18;
var age = parseInt(window.prompt("inserez votre "));
//nous allons effectuer plusieurs action en une seul syntaxe:1declarerune variable age||2convertir la valeur de retour d"une boite de dialogue
var age = prompt("message"); /***prompt*** est une fonction */
/*age = parseInt(age);/*/

/*6- J'utilise la boucle "while" et j'affecte une condition afin de vérifier si la valeur de la réponse et (inférieur ou égale à 3) ou bien (suppérieur ou égale à 120). Tant que l'utilisateur ne saisie pas une valeur entre 4 et 119, la boîte de dialogue s'affichera
7- Dans le cas contraire et en dehors de la boucle, je vérifie si l'age est suppérieur ou égale à 18 et inférieur à 120 : dans ce cas j'aurai le message :  "Bienvenue, vous êtes majeur" sinon : j'affiche une boîte de dialogue "Allez voir un autre super site..." et la redirection vers mon site préféré : "https://fr.boohoo.com/"
*/

var age = parseInt(window.prompt("Inserez votre age (entre 4-119 ans)! "));
var ageMin = 3;
var ageMax = 120;
var majoriterFr = 18;

while (age <= ageMin || age >= ageMax) {
  age = parseInt(
    window.prompt(
      "tant que vous n'avez pas saisis un nombre coorect vous resterez dans la boucle!"
    )
  );

  //FILTRE [4.119],]3.120[
}
if (age >= majoriterFr && age <= ageMax) {
  document.write("bienvenue mayeuks :)");
} else if (age > ageMin && age < majoriterFr) {
}
