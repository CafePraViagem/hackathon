/* let imagesBanners = [

    UnitedStates = {
        name: "Nova York",
        image: "https://images.pexels.com/photos/1770775/pexels-photo-1770775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "Cidade de Nova York"
    },

    Spain = {
        name: "Barcelona", 
        image: "https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "Cidade de Barcelona"
    },

    France = {
        name: "Paris",
        image: "https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "Cidade de Paris"
    },

    Italy = {
        name: "Roma",
        image: "https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "Cidade de Roma"
    }, 

    Germany = {
        name: "Berlim", 
        image: "https://images.pexels.com/photos/1963082/pexels-photo-1963082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "Cidade de Berlim"
    },

    Peru = {
        name: "Machu Picchu",
        image: "https://images.pexels.com/photos/1570610/pexels-photo-1570610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "Cidade de Machu Picchu"
    }

];

function carouselItem () {
    let divCarouselItem = document.querySelector(".carousel-item");

    for(let i = 0; i < imagesBanners.length; i++) {
        divCarouselItem.innerHTML = `<div class="carousel-item"><img class="image-width-height-carousel" src="${imagesBanners.image[i]}" alt="${imagesBanners.alt[i]}"> </div> `;
    }
}

setInterval(carouselItem, 2000); */


$('.carousel').carousel()

$('.carousel').carousel({
    interval: 1000
})