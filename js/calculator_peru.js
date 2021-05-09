let Peru = {
    name: "Peru",
    image: "https://images.pexels.com/photos/1570610/pexels-photo-1570610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    hospedagem: {

        hospedagem1: {
            nomeHospedagem1: "5 Estrelas",
            valor: 415.00,
        },

        hospedagem2: {
            nomeHospedagem2: "4 Estrelas",
            valor: 345.00
        },

        hospedagem3: {
            nomeHospedagem3: "3 Estrelas",
            valor: 251.50
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
            valor: 49.00
        },

        carro2: {
            nomeCarro2: "Carro 5+",
            valor: 58.00
        }

    },

    alimentacao: {
        nomeCategoria: "Alimentação",
        cafeDaManha: {
            nome: "Café da Manhã",
            valor: 18.00
        },
        almoco: {
            nome: "Almoço",
            valor: 22.20
        },
        jantar: {
            nome: "Jantar",
            valor: 25.60
        }
    },

    seguroViagem: {
        nomeCategoria: "Seguro Viagem",
        seguroBagagem: {
            nome: "Bagagem",
            valor: 261.99
        },
        seguroVida: {
            nome: "Vida",
            valor: 426.00
        },
        seguroSaude: {
            nome: "Saúde",
            valor: 262.00
        }
    },

    pontosTuristicos: {
        nomeCategoria: "Turismo",
        primeiroPontoTuristico: {
            nome: "Machu Picchu",
            valor: 188.00
        },
        segundoPontoTuristico: {
            nome: "Intihuatana",
            valor: 125.50
        },
        terceiroPontoTuristico: {
            nome: "Tempo do Sol",
            valor: 16.50
        }

    },

    Extras: {
        nomeCategoria: "Extras",
        extraTour: {
            nome: "Tour com o Especialista",
            valor: 89.00
        },
        extraVIP: {
            nome: "VIP Casa Noturna",
            valor: 666.99
        },
        extraPet: {
            nome: "Família com Pet",
            valor: 77.90
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

// Hospedagem Event Listeners
const hospedagem1 = document.getElementById("hospedagem_1"),
    hospedagem2 = document.getElementById("hospedagem_2"),
    hospedagem3 = document.getElementById("hospedagem_3"),
    hospedagem4 = document.getElementById("hospedagem_4");

hospedagem1.addEventListener("click", () => {
    isCheckedShowMessage(hospedagem1, "alert-hospedagem")
});
hospedagem2.addEventListener("click", () => {
    isCheckedShowMessage(hospedagem2, "alert-hospedagem")
});
hospedagem3.addEventListener("click", () => {
    isCheckedShowMessage(hospedagem3, "alert-hospedagem")
});
hospedagem4.addEventListener("click", () => {
    isCheckedShowMessage(hospedagem4, "alert-hospedagem")
});

// Aluguel Carros Event Listeners
const aluguelCarro1 = document.getElementById("aluguelCarro_1"),
    aluguelCarro2 = document.getElementById("aluguelCarro_2");

aluguelCarro1.addEventListener("click", () => {
    isCheckedShowMessage(aluguelCarro1, "alert-aluguel")
});
aluguelCarro2.addEventListener("click", () => {
    isCheckedShowMessage(aluguelCarro2, "alert-aluguel")
});

// Pontos Turisticos Event Listeners
const picchu = document.getElementById('picchu'),
    intihuatana = document.getElementById('intihuatana'),
    tempodosol = document.getElementById('tempodosol');

picchu.addEventListener('click', () => {
    isCheckedShowMessage(picchu, 'alert-pontosTuristicos')
});
intihuatana.addEventListener('click', () => {
    isCheckedShowMessage(intihuatana, 'alert-pontosTuristicos')
});
tempodosol.addEventListener('click', () => {
    isCheckedShowMessage(tempodosol, 'alert-pontosTuristicos')
});

// Seguro Viagem Event Listeners
const bagagem = document.getElementById('bagagem'),
    vida = document.getElementById('vida'),
    saude = document.getElementById('saude');

bagagem.addEventListener('click', () => {
    isCheckedShowMessage(bagagem, 'alert-seguroViagem')
});
vida.addEventListener('click', () => {
    isCheckedShowMessage(vida, 'alert-seguroViagem')
});
saude.addEventListener('click', () => {
    isCheckedShowMessage(saude, 'alert-seguroViagem')
});

// Alimentação Event Listeners
const cafe = document.getElementById('cafe'),
    almoco = document.getElementById('almoco'),
    janta = document.getElementById('janta');

cafe.addEventListener('click', () => {
    isCheckedShowMessage(cafe, 'alert-alimentacao')
});
almoco.addEventListener('click', () => {
    isCheckedShowMessage(almoco, 'alert-alimentacao')
});
janta.addEventListener('click', () => {
    isCheckedShowMessage(janta, 'alert-alimentacao')
});

// Extras Event Listeners
const tour = document.getElementById('tourEspecialista'),
    vip = document.getElementById('vip'),
    familia = document.getElementById('familia');

tour.addEventListener('click', () => {
    isCheckedShowMessage(tour, 'alert-extras')
});
vip.addEventListener('click', () => {
    isCheckedShowMessage(vip, 'alert-extras')
});
familia.addEventListener('click', () => {
    isCheckedShowMessage(familia, 'alert-extras')
});

// Valida se opção está selecionada e mostra mensagem
function isCheckedShowMessage(element, output) {
    const numViajantes = document.getElementById('numberOfTravelers'),
        numDias = document.getElementById('numberOfDays');

    if (!element.checked || numViajantes.value === '' || numDias.value === '' || numViajantes.value > 100 || numDias.value > 90 || validaViajantes() == 0 || taxa() == 0) {
        console.error('Erro: dados inválidos!');
    } else {
        showAlertMessage(output)
    }
}

// Mostra mensagem na tela
function showAlertMessage(output) {
    document.getElementById(output).style.display = "block";

    setTimeout(() => {
        document.getElementById(output).style.display = "none";
    }, 3000);
}

function somaHospedagem() {
    let valorSoma = 0;
    let dados = document.getElementsByName('hospedagem');

    for (let i = 0; i < dados.length; i++) {
        if (dados[i].checked) {
            if (dados[i].value == Peru.hospedagem.hospedagem1.nomeHospedagem1) {
                valorSoma = Peru.hospedagem.hospedagem1.valor;
            } else if (dados[i].value == Peru.hospedagem.hospedagem2.nomeHospedagem2) {
                valorSoma = Peru.hospedagem.hospedagem2.valor;
            } else if (dados[i].value == Peru.hospedagem.hospedagem3.nomeHospedagem3) {
                valorSoma = Peru.hospedagem.hospedagem3.valor;
            } else if (dados[i].value == Peru.hospedagem.hospedagem4.nomeHospedagem4) {
                valorSoma = Peru.hospedagem.hospedagem4.valor;
            }
        }
    }
    return valorSoma;
}

function calculaHospedagem() {
    let output = document.getElementById("output1");
    let precoHospedagem = somaHospedagem();

    if (validaViajantes() == 0 || taxa() == 0) {
        scroll(0,100)
        showAlertMessage('alert-mainDiv')
        return 0;
    } else {
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
            if (dados[i].value == Peru.aluguelCarro.carro1.nomeCarro1) {
                valorSoma = Peru.aluguelCarro.carro1.valor;
            } else if (dados[i].value == Peru.aluguelCarro.carro2.nomeCarro2) {
                valorSoma = Peru.aluguelCarro.carro2.valor;
            }
        }
    }
    return valorSoma;
}

function calculaAluguelCarros() {
    let precoAluguel = somaAluguelCarro();
    let output = document.getElementById("output2");

    if (validaViajantes() == 0 || taxa() == 0) {
        scroll(0,100)
        showAlertMessage('alert-mainDiv')
        return 0;
    } else {
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
            if (dados[i].value == Peru.pontosTuristicos.primeiroPontoTuristico.nome) {
                valorSoma = Peru.pontosTuristicos.primeiroPontoTuristico.valor;
            } else if (dados[i].value == Peru.pontosTuristicos.segundoPontoTuristico.nome) {
                valorSoma = valorSoma + Peru.pontosTuristicos.segundoPontoTuristico.valor;
            } else if (dados[i].value == Peru.pontosTuristicos.terceiroPontoTuristico.nome) {
                valorSoma = valorSoma + Peru.pontosTuristicos.terceiroPontoTuristico.valor;
            }
        }
    }
    return valorSoma;
}

function calculaTurismo() {
    let precoTurismo = somaTurismo();
    let output = document.getElementById("output3");
    if (validaViajantes() == 0 || taxa() == 0) {
        scroll(0,100)
        showAlertMessage('alert-mainDiv')
        return 0;
    } else {
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
            if (dados[i].value == Peru.alimentacao.cafeDaManha.nome) {
                valorSoma = Peru.alimentacao.cafeDaManha.valor;
            } else if (dados[i].value == Peru.alimentacao.almoco.nome) {
                valorSoma = valorSoma + Peru.alimentacao.almoco.valor;
            } else if (dados[i].value == Peru.alimentacao.jantar.nome) {
                valorSoma = valorSoma + Peru.alimentacao.jantar.valor;
            }
        }
    }
    return valorSoma;
}

function calculaAlimentacao() {
    let precoAlimentacao = somaAlimentacao();
    let output = document.getElementById("output4");
    if (validaViajantes() == 0 || taxa() == 0) {
        scroll(0,100)
        showAlertMessage('alert-mainDiv')
        return 0;
    } else {
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
            if (dados[i].value == Peru.seguroViagem.seguroBagagem.nome) {
                valorSoma = Peru.seguroViagem.seguroBagagem.valor;
            } else if (dados[i].value == Peru.seguroViagem.seguroSaude.nome) {
                valorSoma = valorSoma + Peru.seguroViagem.seguroSaude.valor;
            } else if (dados[i].value == Peru.seguroViagem.seguroVida.nome) {
                valorSoma = valorSoma + Peru.seguroViagem.seguroVida.valor;
            }
        }
    }
    return valorSoma;
}

function calculaSeguroVida() {
    let precoSeguro = somaSeguro();
    let output = document.getElementById("output5");

    if (validaViajantes() == 0 || taxa() == 0) {
        scroll(0,100)
        showAlertMessage('alert-mainDiv')
        return 0;
    } else {
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
            if (dados[i].value == Peru.Extras.extraTour.nome) {
                valorSoma = Peru.Extras.extraTour.valor;
            } else if (dados[i].value == Peru.Extras.extraVIP.nome) {
                valorSoma = valorSoma + Peru.Extras.extraVIP.valor;
            } else if (dados[i].value == Peru.Extras.extraPet.nome) {
                valorSoma = valorSoma + Peru.Extras.extraPet.valor;
            }
        }
    }
    return valorSoma;
}

function calculaExtra() {
    let precoExtra = somaExtra();
    let output = document.getElementById("output6");

    if (validaViajantes() == 0 || taxa() == 0) {
        scroll(0,100)
        showAlertMessage('alert-mainDiv')
        return 0;
    } else {
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

    if (quantidadeDias >= 1 && quantidadeDias <= 90) {
        output.innerHTML = `Taxa diária incluída`
        return quantidadeDias;
    }
    else {
        // output.innerHTML = `A quantidade de dias deve estar entre 1 e 90`
        return 0;
    }
}

function validaViajantes() {
    let viajantes = getNumeroViajantes();
    let output = document.getElementById('outputViajantes');
    if (viajantes >= 1 && viajantes <= 100) {
        output.innerHTML = 'Quantidade de pessoas incluída!';
        return viajantes;
    } else {
        // output.innerHTML = `A quantidade de pessoas deve estar entre 1 e 100`
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
    output.innerHTML = `Valor a ser investido: R$ ${valorTotal.toFixed(2)} | US$ ${valorConvertido.toFixed(2)}`;
}
