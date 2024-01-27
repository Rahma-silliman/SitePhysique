// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Exemple de code JavaScript

    // Ajouter un message d'accueil interactif
    const welcomeMessage = document.querySelector('#welcome-message');
    if (welcomeMessage) {
        welcomeMessage.addEventListener('click', function () {
            alert('Bienvenue sur notre site éducatif !');
        });
    }

    // Ajouter une fonctionnalité de changement de couleur
    const changeColorButton = document.querySelector('#change-color-button');
    if (changeColorButton) {
        changeColorButton.addEventListener('click', function () {
            document.body.style.backgroundColor = getRandomColor();
        });
    }

    // Fonction pour générer une couleur aléatoire
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
