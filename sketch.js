// Variables pour stocker la position de la souris
let mouseXPos;
let mouseYPos;

function setup() {
	// Créer le canvas P5.js
	createCanvas(400, 200).parent('canvas-container');
	// Ajouter un événement de souris pour détecter la position de la souris
	canvas.addEventListener('mousemove', function(event) {
		mouseXPos = event.clientX;
		mouseYPos = event.clientY;
	});
	// Initialiser CommentBox.io
	commentBox('5757921497448448-proj', {
		createBoxUrl(boxId) {
			// Renvoyer l'URL de la page actuelle avec l'ID de la boîte ajouté à la fin
			return window.location.href + '#' + boxId;
		},
	}).then(function(commentBox) {
		// Ajouter un événement de souris pour afficher la boîte de commentaires
		canvas.addEventListener('mousemove', function() {
			if (mouseXPos <= 400 && mouseYPos <= 200) {
				commentBox.show();
			} else {
				commentBox.hide();
			}
		});
	});
}

function draw() {
	// Dessiner quelque chose sur le canvas P5.js
	background(220);
	fill(255, 0, 0);
	ellipse(200, 100, 50, 50);
}
