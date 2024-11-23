// Changement des images dans le slider
const images = ["PiggyDOWNLOAD.png","LOGGO.png"];
let currentImageIndex = 0;
const sliderImg = document.getElementById("slider-img");

setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    sliderImg.src = images[currentImageIndex];
}, 3000); // Change d'image toutes les 3 secondes
