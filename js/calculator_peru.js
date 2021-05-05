let Peru = {
        name: "Peru",
        image:"https://images.pexels.com/photos/1570610/pexels-photo-1570610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        hospedagem: {
            
            hospedagem1: {
                nomeHospedagem1: "5 Estrelas",
                valor: 670.00,
            },

            hospedagem2: {
                nomeHospedagem2: "4 Estrelas",
                valor: 350.00
            },

            hospedagem3: {
                nomeHospedagem3: "3 Estrelas",
                valor: 280.00
            },
            hospedagem4: {
                nomeHospedagem4: "AirBnB",
                valor: 0.00
            }
    
        },
        
        aluguelCarro: {

            nomeCategoria: "Aluguel Carro",
            carro1: {
                nomeCarro1: "Carro Comum",
                valor: 10.00
            },

            carro2: {
                nomeCarro2: "Carro 5+",
                valor: 15.00
            }

        },

        alimentacao: {
            nomeCategoria: "Alimentação",
            cafeDaManha: {
                nome: "Café da Manhã",
                valor: 10.00
            },
            almoco: {
                nome:"Almoço",
                valor: 15.50
            },
            jantar: {
                nome: "Jantar",
                valor: 14.90
            }
        },

        seguroViagem: {
            nomeCategoria: "Seguro Viagem",
            seguroBagagem: {
                nome: "Bagagem",
                valor: 900.30
            },
            seguroVida: {
                nome: "Vida",
                valor: 876.87
            },
            seguroSaude: {
                nome: "Saúde",
                valor: 677.99
            }
        },

        pontosTuristicos: {
            nomeCategoria: "Turismo",
            primeiroPontoTuristico: {
                nome: "Huayna Picchu",
                valor: 135.00
            },
            segundoPontoTuristico: {
                nome: "Intihuatana",
                valor: 100.00
            },
            terceiroPontoTuristico: {
                nome: "Tempo do Sol",
                valor: 150.00
            }

        },

        Extras: {
            nomeCategoria: "Extras",
            extraTour: {
                nome: "Tour com o Especialista",
                valor: 900.00
            },
            extraVIP: {
                nome: "VIP Casa Noturna",
                valor: 390.99
            },
            extraPet: {
                nome: "Família com Pet",
                valor: 580.00
            }
        }

    }

/* Função para trocar a imagem do fundo */
function mudarFundoCalculadora() {
    var imgURL = document.getElementsByClassName("header-image")
    imgURL[0].style.background = "url('" + Peru["image"] + "') no-repeat center"
    imgURL[0].style.backgroundSize = "cover"
}
mudarFundoCalculadora()

function somaHospedagem(){
    let valorSoma = 0;
    let dados = document.getElementsByName('hospedagem');

    for (let i = 0; i < dados.length; i++){
        if ( dados[i].checked ) {
            if(dados[i].value == Peru.hospedagem.hospedagem1.nomeHospedagem1){
                valorSoma = Peru.hospedagem.hospedagem1.valor;
            }else if (dados[i].value == Peru.hospedagem.hospedagem2.nomeHospedagem2) {
                valorSoma = Peru.hospedagem.hospedagem2.valor;
            }else if (dados[i].value == Peru.hospedagem.hospedagem3.nomeHospedagem3) {
                valorSoma = Peru.hospedagem.hospedagem3.valor;
            }else if(dados[i].value == Peru.hospedagem.hospedagem4.nomeHospedagem4){
                valorSoma = Peru.hospedagem.hospedagem4.valor;
            }
        }
    }
    return valorSoma;
}

function calculaHospedagem(){
    let output = document.getElementById("output1");
    let precoHospedagem = somaHospedagem();
    output.innerHTML = `Total: R$ ${precoHospedagem.toFixed(2)}`;
}

function somaAluguelCarro() {
    let dados = document.getElementsByName('aluguelCarro');
    let valorSoma = 0;
    for (let i = 0; i < dados.length; i++){
        if ( dados[i].checked ) {
            if(dados[i].value == Peru.aluguelCarro.carro1.nomeCarro1){
                valorSoma = Peru.aluguelCarro.carro1.valor;
            }else if (dados[i].value == Peru.aluguelCarro.carro2.nomeCarro2) {
                valorSoma = Peru.aluguelCarro.carro2.valor;
            }
        }
    }
    return valorSoma;
}

function calculaAluguelCarros(){
    let precoAluguel = somaAluguelCarro();
    let output = document.getElementById("output2");
    output.innerHTML = `Total: R$ ${precoAluguel.toFixed(2)}`;
}

function somaTurismo(){
    let dados = document.getElementsByName('turismo');
    let valorSoma = 0;
    for (let i = 0; i < dados.length; i++){
        if ( dados[i].checked ) {
            if(dados[i].value == Peru.pontosTuristicos.primeiroPontoTuristico.nome){
                valorSoma = Peru.pontosTuristicos.primeiroPontoTuristico.valor;
            }if (dados[i].value == Peru.pontosTuristicos.segundoPontoTuristico.nome) {
                valorSoma = valorSoma + Peru.pontosTuristicos.segundoPontoTuristico.valor;
            } if (dados[i].value == Peru.pontosTuristicos.terceiroPontoTuristico.nome) {
                valorSoma = valorSoma + Peru.pontosTuristicos.terceiroPontoTuristico.valor;
            }
        }
    }
    return valorSoma;
}

function calculaTurismo(){
    let precoTurismo = somaTurismo();
    let output = document.getElementById("output3");
    output.innerHTML = `Total: R$ ${precoTurismo.toFixed(2)}`;
}

function somaAlimentacao(){
    let dados = document.getElementsByName('alimentacao');
    let valorSoma = 0;
    for (let i = 0; i < dados.length; i++){
        if ( dados[i].checked ) {
            if(dados[i].value == Peru.alimentacao.cafeDaManha.nome){
                valorSoma = Peru.alimentacao.cafeDaManha.valor;
            }else if (dados[i].value == Peru.alimentacao.almoco.nome) {
                valorSoma = valorSoma + Peru.alimentacao.almoco.valor;
            }else if (dados[i].value == Peru.alimentacao.jantar.nome) {
                valorSoma = valorSoma + Peru.alimentacao.jantar.valor;
            }
        }
    }
    return valorSoma;
}

function calculaAlimentacao(){
    let precoAlimentacao = somaAlimentacao();
    let output = document.getElementById("output4");
    output.innerHTML = `Total: R$ ${precoAlimentacao.toFixed(2)}`;
}

function somaSeguro(){
    let dados = document.getElementsByName('seguro');
    let valorSoma = 0;
    for (let i = 0; i < dados.length; i++){
        if ( dados[i].checked ) {
            if(dados[i].value == Peru.seguroViagem.seguroBagagem.nome){
                valorSoma = Peru.seguroViagem.seguroBagagem.valor;
            }else if (dados[i].value == Peru.seguroViagem.seguroSaude.nome) {
                valorSoma = valorSoma + Peru.seguroViagem.seguroSaude.valor;
            }else if (dados[i].value == Peru.seguroViagem.seguroVida.nome) {
                valorSoma = valorSoma + Peru.seguroViagem.seguroVida.valor;
            }
        }
    }
    return valorSoma;
}

function calculaSeguroVida(){
    let precoSeguro = somaSeguro();
    let output = document.getElementById("output5");
    output.innerHTML = `Total: R$ ${precoSeguro.toFixed(2)}`;
}

function somaExtra(){
    let dados = document.getElementsByName('extra');
    let valorSoma = 0;
    for (let i = 0; i < dados.length; i++){
        if ( dados[i].checked ) {
            if(dados[i].value == Peru.Extras.extraTour.nome){
                valorSoma = Peru.Extras.extraTour.valor;
            }else if (dados[i].value == Peru.Extras.extraVIP.nome){
                valorSoma = valorSoma + Peru.Extras.extraVIP.valor;
            }else if (dados[i].value == Peru.Extras.extraPet.nome){
                valorSoma = valorSoma + Peru.Extras.extraPet.valor;
            }
        }
    }
    return valorSoma;
}

function calculaExtra(){
    let precoExtra = somaExtra();
    let output = document.getElementById("output6");
    output.innerHTML = `Toral: R$ ${precoExtra.toFixed(2)}`;
}

function getNumeroViajantes(){
    let dados = document.getElementById("numberOfTravelers");
    return dados.value;    
}

function getNumeroDias(){
    let dados = document.getElementById('numberOfDays');
    return dados.value;
}

function verificaDias(dias){
    if(dias <= 90 && dias >= 50){
        return 1.5;
    }else if(dias < 50 && dias >= 1){
        return 1.2;
    }else{
        return 0;
    }
}

function taxa(){
    let output = document.getElementById('outputTaxa');
    let valorTaxa = verificaDias(getNumeroDias());
    
    if(valorTaxa == 1.2){
        output.innerHTML = `Acrésicmo de 20% no valor total`
    }else if(valorTaxa == 1.5){
        output.innerHTML = `Acrésicmo de 50% no valor total`
    }else{
        output.innerHTML = `A quantidade de dias deve estar entre 1 e 90`
    }
}

function validaViajantes(){
    let viajantes = getNumeroViajantes();
    let output = document.getElementById('outputViajantes');
    if(viajantes >= 1 && viajantes <= 100){
        output.innerHTML.display = "none";
        return true;
    }else{
        output.innerHTML = `A quantidade de pessoas deve estar entre 1 e 100`
        return false;
    }
}

function somaTotal(){
    return getNumeroViajantes() * (somaHospedagem() + somaTurismo() 
    + somaAlimentacao() + somaSeguro() + somaExtra()) + somaAluguelCarro();
}

function valorT(){
    let taxaDias = verificaDias(getNumeroDias());
    let output = document.getElementById('resultado');
    
    if(validaViajantes()){
        taxa();
        valorTotal = somaTotal() * taxaDias;
        output.innerHTML = `Valor total a ser investido: R$ ${valorTotal.toFixed(2)}`;  
    }
}
