/* let imagesBanners = [

    UnitedStates = {
        name: "Nova York",
        image: "https://images.pexels.com/photos/1770775/pexels-photo-1770775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "Cidade de Nova York"
    },

    Canada = {
        name: "Toronto",
        image: "https://images.pexels.com/photos/935474/toronto-beauty-clouds-skyline-935474.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "Cidade de Toronto"
    },

    UnitedKingdon = {
        name: "Londres",
        image: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "Cidade de Londre"
    }, 

    Spain = {
        name: "Barcelona", 
        image: "https://images.pexels.com/photos/4969900/pexels-photo-4969900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "Cidade de Barcelona"
    },

    France = {
        name: "Paris",
        image: "https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "Cidade de Paris"
    },

    Italy = {
        name: "Roma",
        image: "https://images.pexels.com/photos/10922/pexels-photo-10922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "Cidade de Roma"
    },

    Greece = {
        name: "Atenas",
        image: "https://images.pexels.com/photos/4388164/pexels-photo-4388164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "Cidade de Atenas"
    }, 

    Australia = {
        name: "Sydney",
        image: "https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "Cidade de Sydney"
    },

    Japan = {
        name: "Tokyo",
        image: "https://images.pexels.com/photos/161164/senso-ji-kyoto-japan-temple-161164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "Cidade de Tokyo"
    }, 

    Thailand = {
        name: "Bagkok",
        image: "https://images.pexels.com/photos/2797526/pexels-photo-2797526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "Cidade de Bangkok"
    },

    UnitedArabEmirates = {
        name: "Dubai", 
        image: "https://images.pexels.com/photos/823696/pexels-photo-823696.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "Cidade de Dubai"
    }, 

    Chile = {
        name: "Ilha de Páscoa",
        image: "https://images.pexels.com/photos/2819082/pexels-photo-2819082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940mach",
        alt: "Cidade de Ilha de Páscoa"
    },


    Peru = {
        name: "Machu Picchu",
        image: "https://images.pexels.com/photos/1570610/pexels-photo-1570610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "Cidade de Machu Picchu"
    }

];

let currentBanner = 0;

function changeBannerCarroussel () {

    currentBanner = (currentBanner + 12) % 13;
    document.querySelector(".").src

    for (let i = 0; i < images.length; i++) {
        console.log(images[i]);
    }

    for(let i in images) {
        html += `<div class="carroussel-home"><img src="${images[i].image}"></div>`;
    }

    <div class="carousel-item active">
          <img class="d-block w-100" src="" alt="">
    </div>
    
}

imageCarrousselButton.onclick = changeBannerCarroussel;


 */

$('.carousel').carousel()

$('.carousel').carousel({
    interval: 1000
  })