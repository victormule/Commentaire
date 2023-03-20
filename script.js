// initialiser un tableau vide pour stocker les commentaires
var commentaires = [];

function setup() {
  // créer une référence au bouton "envoyer"
  var boutonEnvoyer = select('#envoyer');
  // ajouter un événement "click" au bouton "envoyer"
  boutonEnvoyer.mousePressed(ajouterCommentaire);
}

function ajouterCommentaire() {
  // récupérer les valeurs du pseudo et du commentaire depuis les éléments HTML
  var pseudo = select('#pseudo').value();
  var commentaire = select('#commentaire').value();
  // récupérer l'heure actuelle
  var date = new Date();
  var heure = date.getHours();
  var minute = date.getMinutes();
  // ajouter le commentaire au tableau
  commentaires.push({pseudo: pseudo, commentaire: commentaire, heure: heure, minute: minute});
  // effacer les champs de saisie
  select('#pseudo').value('');
  select('#commentaire').value('');
  // mettre à jour l'affichage des commentaires
  afficherCommentaires();
}

function afficherCommentaires() {
  // créer une référence au div qui contiendra les commentaires
  var divCommentaires = select('#commentaires');
  // effacer le contenu du div
  divCommentaires.html('');
  // parcourir tous les commentaires et les ajouter au div
  for (var i = 0; i < commentaires.length; i++) {
    var commentaire = commentaires[i];
    var heure = commentaire.heure < 10 ? '0' + commentaire.heure : commentaire.heure;
    var minute = commentaire.minute < 10 ? '0' + commentaire.minute : commentaire.minute;
    var texteCommentaire = '<p><strong>' + commentaire.pseudo + '</strong> a écrit à ' + heure + ':' + minute + ':<br>' + commentaire.commentaire + '</p>';
    divCommentaires.html(texteCommentaire + divCommentaires.html());
  }
}

// créer un objet P5 pour exécuter le code
var p5 = new p5();
