let Alemanha = {
    name: "Alemanha",
    image: "https://images.pexels.com/photos/1963082/pexels-photo-1963082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    hospedagem: {

        hospedagem1: {
            nomeHospedagem1: "5 Estrelas",
            valor: 800.00,
        },

        hospedagem2: {
            nomeHospedagem2: "4 Estrelas",
            valor: 500.00
        },

        hospedagem3: {
            nomeHospedagem3: "3 Estrelas",
            valor: 400.00
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
            valor: 48.00
        },

        carro2: {
            nomeCarro2: "Carro 5+",
            valor: 80.00
        }

    },

    alimentacao: {
        nomeCategoria: "Alimentação",
        cafeDaManha: {
            nome: "Café da Manhã",
            valor: 90.00
        },
        almoco: {
            nome: "Almoço",
            valor: 105.50
        },
        jantar: {
            nome: "Jantar",
            valor: 49.90
        }
    },

    seguroViagem: {
        nomeCategoria: "Seguro Viagem",
        seguroBagagem: {
            nome: "Bagagem",
            valor: 400.99
        },
        seguroVida: {
            nome: "Vida",
            valor: 789.99
        },
        seguroSaude: {
            nome: "Saúde",
            valor: 548.99
        }
    },

    pontosTuristicos: {
        nomeCategoria: "Turismo",
        primeiroPontoTuristico: {
            nome: "Memorial do Muro de Berlim",
            valor: 100.00
        },
        segundoPontoTuristico: {
            nome: "Berliner Fernsehturm",
            valor: 300.00
        },
        terceiroPontoTuristico: {
            nome: "Palácio do Reichstag",
            valor: 200.00
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
            valor: 1999.99
        },
        extraPet: {
            nome: "Família com Pet",
            valor: 249.99
        }
    }

}


/* Função para trocar a imagem do fundo */
function mudarFundoCalculadora() {
    var imgURL = document.getElementsByClassName("header-image")
    imgURL[0].style.background = "url('" + Alemanha["image"] + "') no-repeat center"
    imgURL[0].style.backgroundSize = "cover"
}
mudarFundoCalculadora()

function somaHospedagem() {
    let valorSoma = 0;
    let dados = document.getElementsByName('hospedagem');

    for (let i = 0; i < dados.length; i++) {
        if (dados[i].checked) {
            if (dados[i].value == Alemanha.hospedagem.hospedagem1.nomeHospedagem1) {
                valorSoma = Alemanha.hospedagem.hospedagem1.valor;
            } else if (dados[i].value == Alemanha.hospedagem.hospedagem2.nomeHospedagem2) {
                valorSoma = Alemanha.hospedagem.hospedagem2.valor;
            } else if (dados[i].value == Alemanha.hospedagem.hospedagem3.nomeHospedagem3) {
                valorSoma = Alemanha.hospedagem.hospedagem3.valor;
            } else if (dados[i].value == Alemanha.hospedagem.hospedagem4.nomeHospedagem4) {
                valorSoma = Alemanha.hospedagem.hospedagem4.valor;
            }
        }
    }
    return valorSoma;
}

function calculaHospedagem() {
    let output = document.getElementById("output1");
    let precoHospedagem = somaHospedagem();
    output.innerHTML = `Total: R$ ${precoHospedagem.toFixed(2)}`;
}

function somaAluguelCarro() {
    let dados = document.getElementsByName('aluguelCarro');
    let valorSoma = 0;
    for (let i = 0; i < dados.length; i++) {
        if (dados[i].checked) {
            if (dados[i].value == Alemanha.aluguelCarro.carro1.nomeCarro1) {
                valorSoma = Alemanha.aluguelCarro.carro1.valor;
            } else if (dados[i].value == Alemanha.aluguelCarro.carro2.nomeCarro2) {
                valorSoma = Alemanha.aluguelCarro.carro2.valor;
            }
        }
    }
    return valorSoma;
}

function calculaAluguelCarros() {
    let precoAluguel = somaAluguelCarro();
    let output = document.getElementById("output2");
    output.innerHTML = `Total: R$ ${precoAluguel.toFixed(2)}`;
}

function somaTurismo() {
    let dados = document.getElementsByName('turismo');
    let valorSoma = 0;
    for (let i = 0; i < dados.length; i++) {
        if (dados[i].checked) {
            if (dados[i].value == Alemanha.pontosTuristicos.primeiroPontoTuristico.nome) {
                valorSoma = Alemanha.pontosTuristicos.primeiroPontoTuristico.valor;
            } else if (dados[i].value == Alemanha.pontosTuristicos.segundoPontoTuristico.nome) {
                valorSoma = valorSoma + Alemanha.pontosTuristicos.segundoPontoTuristico.valor;
            } else if (dados[i].value == Alemanha.pontosTuristicos.terceiroPontoTuristico.nome) {
                valorSoma = valorSoma + Alemanha.pontosTuristicos.terceiroPontoTuristico.valor;
            }
        }
    }
    return valorSoma;
}

function calculaTurismo() {
    let precoTurismo = somaTurismo();
    let output = document.getElementById("output3");
    output.innerHTML = `Total: R$ ${precoTurismo.toFixed(2)}`;
}

function somaAlimentacao() {
    let dados = document.getElementsByName('alimentacao');
    let valorSoma = 0;
    for (let i = 0; i < dados.length; i++) {
        if (dados[i].checked) {
            if (dados[i].value == Alemanha.alimentacao.cafeDaManha.nome) {
                valorSoma = Alemanha.alimentacao.cafeDaManha.valor;
            } else if (dados[i].value == Alemanha.alimentacao.almoco.nome) {
                valorSoma = valorSoma + Alemanha.alimentacao.almoco.valor;
            } else if (dados[i].value == Alemanha.alimentacao.jantar.nome) {
                valorSoma = valorSoma + Alemanha.alimentacao.jantar.valor;
            }
        }
    }
    return valorSoma;
}

function calculaAlimentacao() {
    let precoAlimentacao = somaAlimentacao();
    let output = document.getElementById("output4");
    output.innerHTML = `Total: R$ ${precoAlimentacao.toFixed(2)}`;
}

function somaSeguro() {
    let dados = document.getElementsByName('seguro');
    let valorSoma = 0;
    for (let i = 0; i < dados.length; i++) {
        if (dados[i].checked) {
            if (dados[i].value == Alemanha.seguroViagem.seguroBagagem.nome) {
                valorSoma = Alemanha.seguroViagem.seguroBagagem.valor;
            } else if (dados[i].value == Alemanha.seguroViagem.seguroSaude.nome) {
                valorSoma = valorSoma + Alemanha.seguroViagem.seguroSaude.valor;
            } else if (dados[i].value == Alemanha.seguroViagem.seguroVida.nome) {
                valorSoma = valorSoma + Alemanha.seguroViagem.seguroVida.valor;
            }
        }
    }
    return valorSoma;
}

function calculaSeguroVida() {
    let precoSeguro = somaSeguro();
    let output = document.getElementById("output5");
    output.innerHTML = `Total: R$ ${precoSeguro.toFixed(2)}`;
}

function somaExtra() {
    let dados = document.getElementsByName('extra');
    let valorSoma = 0;
    for (let i = 0; i < dados.length; i++) {
        if (dados[i].checked) {
            if (dados[i].value == Alemanha.Extras.extraTour.nome) {
                valorSoma = Alemanha.Extras.extraTour.valor;
            } else if (dados[i].value == Alemanha.Extras.extraVIP.nome) {
                valorSoma = valorSoma + Alemanha.Extras.extraVIP.valor;
            } else if (dados[i].value == Alemanha.Extras.extraPet.nome) {
                valorSoma = valorSoma + Alemanha.Extras.extraPet.valor;
            }
        }
    }
    return valorSoma;
}

function calculaExtra() {
    let precoExtra = somaExtra();
    let output = document.getElementById("output6");
    output.innerHTML = `Toral: R$ ${precoExtra.toFixed(2)}`;
}

function getNumeroViajantes() {
    let dados = document.getElementById("numberOfTravelers");
    return dados.value;
}

function getNumeroDias() {
    let dados = document.getElementById('numberOfDays');
    return dados.value;
}

function verificaDias(dias) {
    if (dias >= 1 && dias <= 7) {
        return 1.1;
    } else if (dias > 7 && dias <= 15) {
        return 1.2;
    } else if (dias > 15 && dias <= 21){
        return 1.3;
    } else if (dias > 21 && dias <= 30){
        return 1.4;
    }else if (dias > 30 && dias <= 40){
        return 1.5;
    }else if (dias > 40 && dias <= 60){
        return 1.65;
    }else if (dias > 60 && dias <= 90){
        return 1.7;
    }
    else {
        return 0;
    }
}

function taxa() {
    let output = document.getElementById('outputTaxa');
    let valorTaxa = verificaDias(getNumeroDias());

    if (valorTaxa == 1.1) {
        output.innerHTML = `Acrésicmo de 10% no valor total`
    } else if (valorTaxa == 1.2) {
        output.innerHTML = `Acrésicmo de 20% no valor total`
    } else if (valorTaxa == 1.3) {
        output.innerHTML = `Acrésicmo de 30% no valor total`
    } else if (valorTaxa == 1.4) {
        output.innerHTML = `Acrésicmo de 40% no valor total`
    } else if (valorTaxa == 1.5) {
        output.innerHTML = `Acrésicmo de 50% no valor total`
    } else if (valorTaxa == 1.65) {
        output.innerHTML = `Acrésicmo de 65% no valor total`
    } else if (valorTaxa == 1.7) {
        output.innerHTML = `Acrésicmo de 70% no valor total`
    }
    else {
        output.innerHTML = `A quantidade de dias deve estar entre 1 e 90`
    }
}

function validaViajantes() {
    let viajantes = getNumeroViajantes();
    let output = document.getElementById('outputViajantes');
    if (viajantes >= 1 && viajantes <= 100) {
        output.innerHTML.display = "none";
        return true;
    } else {
        output.innerHTML = `A quantidade de pessoas deve estar entre 1 e 100`
        return false;
    }
}

function somaTotal() {
    return getNumeroViajantes() * (somaHospedagem() + somaTurismo()
        + somaAlimentacao() + somaSeguro() + somaExtra()) + somaAluguelCarro();
}

function valorT() {
    let taxaDias = verificaDias(getNumeroDias());
    let output = document.getElementById('resultado');

    if (validaViajantes()) {
        taxa();
        valorTotal = somaTotal() * taxaDias;
        let valorConvertido = valorTotal / 5.3;
        output.innerHTML = `Valor total a ser investido: R$ ${valorTotal.toFixed(2)} | US$ ${valorConvertido.toFixed(2)}` ;
    }
}
