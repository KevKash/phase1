///var moyenne = window.prompt("veuillez rentrez votre moyenne :");
///var recale = 9.999;
//var recu = 10;
//var mention = 12;

//if (moyenne <= recale) {
// document.write("Vous etes recaler bon courage! ");
//}
//else if (moyenne > recu || moyenne < recu) {
//document.write("Vous etes recu bravo! ");
//}
//else if (moyenne > mention) {
// document.write("Vous etes recu avec mention Félécitation!");
//}
//else {
//  document.write("Invalide !")
//}

///     || = ET       && = OU

var noteRecal = 10;
var noteRecu = 12;
var noteBien = 20;
var valeurSaisie1 = window.prompt("noteBien");
var valeurSaisie2 = 45;
//console.log(
//"si le type de variable est number la  fonction 'isNaN' retourne 'false' : " +    isNaN
//isNaN(valeurSaisie1)
//);

//console.log(
//"si le type de variable est number la  fonction 'isNaN' retourne 'false' : " +
//isNaN(valeurSaisie2)
//);
/*if (!isNaN(valeurSaisie1 > 10)) {
  {
    alert("vous étes recalé");
  }
  if (moyenne >= noteRecu && moyenne < noteRecu) {
    document.write("vous etes reçu !");
  } else if (valeurSaisie1 >= noteRecu && valeurSaisie1 <= noteBien) {
    document.write("vous êtes reçu avec mention");
  }
} else {
  document.write("note invalide");
}*/

var mavaleu = window.prompt("saisissez une valeur");
var resBoolean = isNaN(maValeu);

if (!resBoolean) {
  document.write("le type de votre saissi est 'number'");
}
//document.write()
//alert();
//console.log();
//parsInt();
//parseFloat();
//window.prompt();
