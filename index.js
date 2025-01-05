import app from "./src/app.js";
import updateClassName from "./src/helper/updateClassName.js";

const LOADER = document.querySelector(".container-loadding");
let isImages = false;
const images = document.querySelectorAll("img");
let imagesLoaded = 0;

images.forEach((img) => {
  // Listener para imágenes que se cargan normalmente
  img.addEventListener("load", () => {
    imagesLoaded++;
    checkImagesLoaded();
  });

  // Contar las imágenes que ya están en caché
  if (img.complete) {
    imagesLoaded++;
  }
});

// Verificar si todas las imágenes ya están cargadas
checkImagesLoaded();

function checkImagesLoaded() {
  if (imagesLoaded === images.length) {
    isImages = true;
    updateClassName("remove", LOADER, null, "loadding-show");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // if (location.pathname.includes("/index.html")) {
    if(isImages){
      updateClassName("remove", LOADER, null, "loadding-show");
    }
    app();
  // }
});
