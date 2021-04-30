var listImageBackground = ["https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/935474/toronto-beauty-clouds-skyline-935474.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/1770775/pexels-photo-1770775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/10922/pexels-photo-10922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/4388164/pexels-photo-4388164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/4344748/pexels-photo-4344748.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/2797526/pexels-photo-2797526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/823696/pexels-photo-823696.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/2819082/pexels-photo-2819082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940mach",
"https://images.pexels.com/photos/1570610/pexels-photo-1570610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",]


// Função para randomizar o url da background
function randomImage() {
    // Encontra um valor aleatorio entre 0 e tamanho da lista de imgs
    let max = listImageBackground.length
    let index = Math.floor(Math.random() * (max))

    // Usa o valor como index da lista
    var imgURL = listImageBackground[index]

    // Encontra na DOM oque deve ser modificado
    var backgroundHTML = document.getElementById("backgroundImage")
    // Modificia na DOM
    backgroundHTML.style.background = "url(" + imgURL + ") no-repeat center center fixed"
}

// Tempo em milisegundos
setInterval(function() { randomImage() }, 10000)

html {
    font-size: 100%;
}

body {
    background-color: blue;
    font-family: Arial, Helvetica, sans-serif;
}

.bs-grid-big {
    background: #fff;
    margin-bottom: 10px;
}
    
.bs-grid-small {
    background: #fff;
    margin-bottom: 10px;
}

h2 {
    font-size: 0.875rem;
    color: red;
    text-transform: uppercase;
    font-weight: 600;
}

p {
    font-size: 0.75rem;
}
      
@media (min-width: 768px) { html { font-size:100%;} }

@media (min-width: 992px) { html { font-size:120%;} }

@media (min-width: 1200px) { html { font-size:140%; } }