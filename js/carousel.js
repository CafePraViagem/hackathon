let imagesBanner = document.querySelectorAll("#carousel .carousel-item");
let maxImagesBanner = imagesBanner.length;
let imagesAdventurous = document.querySelectorAll("#adventurous .carousel-item");
let maxImagesAdventurous = imagesAdventurous.length;
let imagesYoung = document.querySelectorAll("#young .carousel-item");
let maxImagesYoung = imagesYoung.length;
let time = 3000;
let i = 0;


function nextImage(images, maxImages) {

    images[i].classList.remove("active");

    i++

    if (i >= maxImages ) {
        i = 0;
    }

    images[i].classList.add("active");
}

function startImagesMainBanner () {
    
    setInterval(() => {
        nextImage(imagesBanner, maxImagesBanner);
    }, time);
}

function startImagesTypeAdventurous () {
    
    setInterval(() => {
        nextImage(imagesAdventurous, maxImagesAdventurous);
    }, time);
}

function startImagesTypeYoung () {
    
    setInterval(() => {
        nextImage(imagesYoung, maxImagesYoung);
    }, time);
}

window.addEventListener("load", startImagesMainBanner);

let buttonTypeTripAdventurous = document.querySelector(".button-type-trip-adventure");
buttonTypeTripAdventurous.addEventListener("click", startImagesTypeAdventurous);

let buttonTypeTripYoung = document.querySelector(".button-type-trip-young");
buttonTypeTripYoung.addEventListener("click", startImagesTypeYoung);
