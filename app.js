// Récupération des différents éléments
const button = document.querySelector(".btn");
const body = document.querySelector("body");
const text = document.querySelector(".color__hexadecimal");

// Création de la fonction generateColor qui génére une couleur héxadécimale de manière aléatoire
const generateColor = () => {
  // Ecoute de l'événement "click" sur le bouton
  button.addEventListener("click", () => {
    // Création de la constante random :
    // Utilisation de la méthode Math.random() créé un nombre aléatoire compris entre 0 et 1 (0 et 1 exclus)
    // Utilisation de la méthode Math.floor() afin d'obtenir un nombre entier             - ffffff est la plus grande valeur héxadécimale
    // ffffff est la plus grande valeur héxadécimale
    // Tranformation du nombre aléatoire en valeur héxadécimale avec la méthode toString() de base 16 afin de bien obtenir une valeur héxadécimale
    const random = Math.floor(Math.random() * 0xffffff).toString(16);

    // Modification de la couleur de background
    body.style.backgroundColor = "#" + random;

    // Affichage de la valeur héxadécimale généré
    text.textContent = "#" + random;
  });
};

// Appel de la fonction generateColor()
generateColor();
