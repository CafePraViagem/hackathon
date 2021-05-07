let Italy = {
    name: "Italy",
    image: "https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    hospedagem: {

        hospedagem1: {
            nomeHospedagem1: "5 Estrelas",
            valor: 450.00,
        },

        hospedagem2: {
            nomeHospedagem2: "4 Estrelas",
            valor: 345.00
        },

        hospedagem3: {
            nomeHospedagem3: "3 Estrelas",
            valor: 225.00
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
            valor: 60.00
        },

        carro2: {
            nomeCarro2: "Carro 5+",
            valor: 83.00
        }

    },

    alimentacao: {
        nomeCategoria: "Alimentação",
        cafeDaManha: {
            nome: "Café da Manhã",
            valor: 23.00
        },
        almoco: {
            nome: "Almoço",
            valor: 47.00
        },
        jantar: {
            nome: "Jantar",
            valor: 51.50
        }
    },

    seguroViagem: {
        nomeCategoria: "Seguro Viagem",
        seguroBagagem: {
            nome: "Bagagem",
            valor: 350.99
        },
        seguroVida: {
            nome: "Vida",
            valor: 589.59
        },
        seguroSaude: {
            nome: "Saúde",
            valor: 175.79
        }
    },

    pontosTuristicos: {
        nomeCategoria: "Turismo",
        primeiroPontoTuristico: {
            nome: "Coliseu",
            valor: 190.00
        },
        segundoPontoTuristico: {
            nome: "Capela Sistina",
            valor: 150.00
        },
        terceiroPontoTuristico: {
            nome: "Torre de Pisa",
            valor: 113.00
        }

    },

    Extras: {
        nomeCategoria: "Extras",
        extraTour: {
            nome: "Tour com o Especialista",
            valor: 129.00
        },
        extraVIP: {
            nome: "VIP Casa Noturna",
            valor: 257.99
        },
        extraPet: {
            nome: "Família com Pet",
            valor: 89.50
        }
    }

}

/* Função para trocar a imagem do fundo */
function mudarFundoCalculadora() {
    var imgURL = document.getElementsByClassName("header-image")
    imgURL[0].style.background = "url('" + Italy["image"] + "') no-repeat center"
    imgURL[0].style.backgroundSize = "cover"
}
mudarFundoCalculadora()

function somaHospedagem() {
    let valorSoma = 0;
    let dados = document.getElementsByName('hospedagem');

    for (let i = 0; i < dados.length; i++) {
        if (dados[i].checked) {
            if (dados[i].value == Italy.hospedagem.hospedagem1.nomeHospedagem1) {
                valorSoma = Italy.hospedagem.hospedagem1.valor;
            } else if (dados[i].value == Italy.hospedagem.hospedagem2.nomeHospedagem2) {
                valorSoma = Italy.hospedagem.hospedagem2.valor;
            } else if (dados[i].value == Italy.hospedagem.hospedagem3.nomeHospedagem3) {
                valorSoma = Italy.hospedagem.hospedagem3.valor;
            } else if (dados[i].value == Italy.hospedagem.hospedagem4.nomeHospedagem4) {
                valorSoma = Italy.hospedagem.hospedagem4.valor;
            }
        }
    }
    return valorSoma;
}

function calculaHospedagem() {
    let output = document.getElementById("output1");
    let precoHospedagem = somaHospedagem();
    
    if(validaViajantes() == 0 || taxa() == 0){
        output.innerHTML = 'Quantidade de dias ou pessoas inválida!';    
        return 0;
    }else{
        precoHospedagem = getNumeroDias() * getNumeroViajantes() * precoHospedagem;
        output.innerHTML = `Total: R$ ${precoHospedagem.toFixed(2)}`;
        return precoHospedagem;
    }   
}

function somaAluguelCarro() {
    let dados = document.getElementsByName('aluguelCarro');
    let valorSoma = 0;
    for (let i = 0; i < dados.length; i++) {
        if (dados[i].checked) {
            if (dados[i].value == Italy.aluguelCarro.carro1.nomeCarro1) {
                valorSoma = Italy.aluguelCarro.carro1.valor;
            } else if (dados[i].value == Italy.aluguelCarro.carro2.nomeCarro2) {
                valorSoma = Italy.aluguelCarro.carro2.valor;
            }
        }
    }
    return valorSoma;
}

function calculaAluguelCarros() {
    let precoAluguel = somaAluguelCarro();
    let output = document.getElementById("output2");
    
    if(validaViajantes() == 0 || taxa() == 0){
        output.innerHTML = 'Quantidade de dias ou pessoas inválida!';    
        return 0;
    }else{
        precoAluguel = getNumeroDias() * precoAluguel;
        output.innerHTML = `Total: R$ ${precoAluguel.toFixed(2)}`;
        return precoAluguel;
    }   
}

function somaTurismo() {
    let dados = document.getElementsByName('turismo');
    let valorSoma = 0;
    for (let i = 0; i < dados.length; i++) {
        if (dados[i].checked) {
            if (dados[i].value == Italy.pontosTuristicos.primeiroPontoTuristico.nome) {
                valorSoma = Italy.pontosTuristicos.primeiroPontoTuristico.valor;
            } else if (dados[i].value == Italy.pontosTuristicos.segundoPontoTuristico.nome) {
                valorSoma = valorSoma + Italy.pontosTuristicos.segundoPontoTuristico.valor;
            } else if (dados[i].value == Italy.pontosTuristicos.terceiroPontoTuristico.nome) {
                valorSoma = valorSoma + Italy.pontosTuristicos.terceiroPontoTuristico.valor;
            }
        }
    }
    return valorSoma;
}

function calculaTurismo() {
    let precoTurismo = somaTurismo();
    let output = document.getElementById("output3");
    if(validaViajantes() == 0 || taxa() == 0){
        output.innerHTML = 'Quantidade de dias ou pessoas inválida!';    
        return 0;
    }else{
        precoTurismo = getNumeroViajantes() * precoTurismo;
        output.innerHTML = `Total: R$ ${precoTurismo.toFixed(2)}`;
        return precoTurismo;
    }   
}

function somaAlimentacao() {
    let dados = document.getElementsByName('alimentacao');
    let valorSoma = 0;
    for (let i = 0; i < dados.length; i++) {
        if (dados[i].checked) {
            if (dados[i].value == Italy.alimentacao.cafeDaManha.nome) {
                valorSoma = Italy.alimentacao.cafeDaManha.valor;
            } else if (dados[i].value == Italy.alimentacao.almoco.nome) {
                valorSoma = valorSoma + Italy.alimentacao.almoco.valor;
            } else if (dados[i].value == Italy.alimentacao.jantar.nome) {
                valorSoma = valorSoma + Italy.alimentacao.jantar.valor;
            }
        }
    }
    return valorSoma;
}

function calculaAlimentacao() {
    let precoAlimentacao = somaAlimentacao();
    let output = document.getElementById("output4");
    if(validaViajantes() == 0 || taxa() == 0){
        output.innerHTML = 'Quantidade de dias ou pessoas inválida!';    
        return 0;
    }else{
        precoAlimentacao = getNumeroViajantes() * precoAlimentacao * getNumeroDias();
        output.innerHTML = `Total: R$ ${precoAlimentacao.toFixed(2)}`;
        return precoAlimentacao;
    }   
}

function somaSeguro() {
    let dados = document.getElementsByName('seguro');
    let valorSoma = 0;
    for (let i = 0; i < dados.length; i++) {
        if (dados[i].checked) {
            if (dados[i].value == Italy.seguroViagem.seguroBagagem.nome) {
                valorSoma = Italy.seguroViagem.seguroBagagem.valor;
            } else if (dados[i].value == Italy.seguroViagem.seguroSaude.nome) {
                valorSoma = valorSoma + Italy.seguroViagem.seguroSaude.valor;
            } else if (dados[i].value == Italy.seguroViagem.seguroVida.nome) {
                valorSoma = valorSoma + Italy.seguroViagem.seguroVida.valor;
            }
        }
    }
    return valorSoma;
}

function calculaSeguroVida() {
    let precoSeguro = somaSeguro();
    let output = document.getElementById("output5");
    
    if(validaViajantes() == 0 || taxa() == 0){
        output.innerHTML = 'Quantidade de dias ou pessoas inválida!';    
        return 0;
    }else{
        precoSeguro = getNumeroViajantes() * precoSeguro;
        output.innerHTML = `Total: R$ ${precoSeguro.toFixed(2)}`;
        return precoSeguro;
    }
}

function somaExtra() {
    let dados = document.getElementsByName('extra');
    let valorSoma = 0;
    for (let i = 0; i < dados.length; i++) {
        if (dados[i].checked) {
            if (dados[i].value == Italy.Extras.extraTour.nome) {
                valorSoma = Italy.Extras.extraTour.valor;
            } else if (dados[i].value == Italy.Extras.extraVIP.nome) {
                valorSoma = valorSoma + Italy.Extras.extraVIP.valor;
            } else if (dados[i].value == Italy.Extras.extraPet.nome) {
                valorSoma = valorSoma + Italy.Extras.extraPet.valor;
            }
        }
    }
    return valorSoma;
}

function calculaExtra() {
    let precoExtra = somaExtra();
    let output = document.getElementById("output6");
    
    if(validaViajantes() == 0 || taxa() == 0){
        output.innerHTML = 'Quantidade de dias ou pessoas inválida!';    
        return 0;
    }else{
        precoExtra = getNumeroViajantes() * precoExtra;
        output.innerHTML = `Toral: R$ ${precoExtra.toFixed(2)}`;
        return precoExtra;
    }
}

function getNumeroViajantes() {
    let dados = document.getElementById("numberOfTravelers");
    return dados.value;
}

function getNumeroDias() {
    let dados = document.getElementById('numberOfDays');
    return dados.value;
}

function taxa() {
    let output = document.getElementById('outputTaxa');
    let quantidadeDias = getNumeroDias();

    if(quantidadeDias >= 1 && quantidadeDias <= 90){
        output.innerHTML = `Taxa diária incluída`
        return quantidadeDias;
    }
    else {
        output.innerHTML = `A quantidade de dias deve estar entre 1 e 90`
        return 0;
    }
}

function validaViajantes() {
    let viajantes = getNumeroViajantes();
    let output = document.getElementById('outputViajantes');
    if (viajantes >= 1 && viajantes <= 100) {
        output.innerHTML = 'Quantidade de pessoas incluída!';
        return viajantes;
    }else {
        output.innerHTML = `A quantidade de pessoas deve estar entre 1 e 100`
        return 0;
    }
}

function somaTotal() {
    return calculaAlimentacao() + calculaTurismo() + calculaAluguelCarros() + calculaHospedagem() + calculaSeguroVida() + calculaExtra();
}

function valorT() {
    let output = document.getElementById('resultado');
    let valorTotal = somaTotal();
    let valorConvertido = valorTotal / 5.3;
    output.innerHTML = `Valor total a ser investido: R$ ${valorTotal.toFixed(2)} | US$ ${valorConvertido.toFixed(2)}`;
}