var jour1 = "lundi";
var jour2 = "mardi";
var jour3 = "mercredi";
var jour4 = "jeudi";
var jour5 = "vendredi";
var jour6 = "samedi";
var jour7 = "dimanche";

var jour = window.prompt(" Quelle jour est-il aujourd'hui ?");
var error = "erreur";

if (jour == jour1) {
  alert(jour1);
  document.write("aujourd'hui nous somme " + jour1 + ".");
} else if (jour == jour2) {
  alert(jour2);
  document.write("aujourd'hui nous somme " + jour2 + ".");
} else if (jour == jour3) {
  alert(jour3);
  document.write("aujourd'hui nous somme " + jour3 + ".");
} else if (jour == jour4) {
  alert(jour4);
  document.write("aujourd'hui nous somme " + jour4 + ".");
} else if (jour == jour5) {
  alert(jour5);
  document.write("aujourd'hui nous somme " + jour5 + ".");
} else if (jour == jour6) {
  alert(jour6);
  document.write("aujourd'hui nous somme " + jour6 + ".");
} else if (jour == jour7) {
  alert(jour7);
  document.write("aujourd'hui nous somme " + jour7 + ".");
} else {
  document.write("il y a une " + error + ".");
}
