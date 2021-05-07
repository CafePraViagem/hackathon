let Alemanha = {
    name: "Alemanha",
    image: "https://images.pexels.com/photos/1963082/pexels-photo-1963082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    hospedagem: {

        hospedagem1: {
            nomeHospedagem1: "5 Estrelas",
            valor: 672.00,
        },

        hospedagem2: {
            nomeHospedagem2: "4 Estrelas",
            valor: 514.00
        },

        hospedagem3: {
            nomeHospedagem3: "3 Estrelas",
            valor: 477.50
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
            valor: 69.00
        },

        carro2: {
            nomeCarro2: "Carro 5+",
            valor: 78.00
        }

    },

    alimentacao: {
        nomeCategoria: "Alimentação",
        cafeDaManha: {
            nome: "Café da Manhã",
            valor: 22.00
        },
        almoco: {
            nome: "Almoço",
            valor: 48.20
        },
        jantar: {
            nome: "Jantar",
            valor: 49.60
        }
    },

    seguroViagem: {
        nomeCategoria: "Seguro Viagem",
        seguroBagagem: {
            nome: "Bagagem",
            valor: 364.99
        },
        seguroVida: {
            nome: "Vida",
            valor: 302.00
        },
        seguroSaude: {
            nome: "Saúde",
            valor: 229.00
        }
    },

    pontosTuristicos: {
        nomeCategoria: "Turismo",
        primeiroPontoTuristico: {
            nome: "Memorial do Muro de Berlim",
            valor: 47.00
        },
        segundoPontoTuristico: {
            nome: "Berliner Fernsehturm",
            valor: 115.50
        },
        terceiroPontoTuristico: {
            nome: "Palácio do Reichstag",
            valor: 57.50
        }

    },

    Extras: {
        nomeCategoria: "Extras",
        extraTour: {
            nome: "Tour com o Especialista",
            valor: 185.00
        },
        extraVIP: {
            nome: "VIP Casa Noturna",
            valor: 1755.99
        },
        extraPet: {
            nome: "Família com Pet",
            valor: 142.99
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