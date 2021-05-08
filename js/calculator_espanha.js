let Spain = {
    name: "Spain",
    image: "https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    hospedagem: {

        hospedagem1: {
            nomeHospedagem1: "5 Estrelas",
            valor: 589.00,
        },

        hospedagem2: {
            nomeHospedagem2: "4 Estrelas",
            valor: 445.00
        },

        hospedagem3: {
            nomeHospedagem3: "3 Estrelas",
            valor: 335.00
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
            valor: 70.00
        },

        carro2: {
            nomeCarro2: "Carro 5+",
            valor: 93.00
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
            valor: 37.80
        },
        jantar: {
            nome: "Jantar",
            valor: 48.50
        }
    },

    seguroViagem: {
        nomeCategoria: "Seguro Viagem",
        seguroBagagem: {
            nome: "Bagagem",
            valor: 332.99
        },
        seguroVida: {
            nome: "Vida",
            valor: 769.59
        },
        seguroSaude: {
            nome: "Saúde",
            valor: 265.00
        }
    },

    pontosTuristicos: {
        nomeCategoria: "Turismo",
        primeiroPontoTuristico: {
            nome: "Catedral de Santiago de Compostela",
            valor: 180.00
        },
        segundoPontoTuristico: {
            nome: "Catedral Sagrada Familia",
            valor: 105.00
        },
        terceiroPontoTuristico: {
            nome: "Cidade Medieval de Cuenca",
            valor: 233.50
        }

    },

    Extras: {
        nomeCategoria: "Extras",
        extraTour: {
            nome: "Tour com o Especialista",
            valor: 256.00
        },
        extraVIP: {
            nome: "VIP Casa Noturna",
            valor: 2798.99
        },
        extraPet: {
            nome: "Família com Pet",
            valor: 112.00
        }
    }

}

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
const compostela = document.getElementById('compostela'),
    sagrada = document.getElementById('sagrada'),
    cuenca = document.getElementById('cuenca');

compostela.addEventListener('click', () => {
    isCheckedShowMessage(compostela, 'alert-pontosTuristicos')
});
sagrada.addEventListener('click', () => {
    isCheckedShowMessage(sagrada, 'alert-pontosTuristicos')
});
cuenca.addEventListener('click', () => {
    isCheckedShowMessage(cuenca, 'alert-pontosTuristicos')
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

/* Função para trocar a imagem do fundo */
function mudarFundoCalculadora() {
    var imgURL = document.getElementsByClassName("header-image")
    imgURL[0].style.background = "url('" + France["image"] + "') no-repeat center bottom"
    imgURL[0].style.backgroundSize = "cover"
}
mudarFundoCalculadora()

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
    }, 3000)
}

/* Função para trocar a imagem do fundo */
function mudarFundoCalculadora() {
    var imgURL = document.getElementsByClassName("header-image")
    imgURL[0].style.background = "url('" + Spain["image"] + "') no-repeat center"
    imgURL[0].style.backgroundSize = "cover"
}
mudarFundoCalculadora()


function somaHospedagem() {
    let valorSoma = 0;
    let dados = document.getElementsByName('hospedagem');

    for (let i = 0; i < dados.length; i++) {
        if (dados[i].checked) {
            if (dados[i].value == Spain.hospedagem.hospedagem1.nomeHospedagem1) {
                valorSoma = Spain.hospedagem.hospedagem1.valor;
            } else if (dados[i].value == Spain.hospedagem.hospedagem2.nomeHospedagem2) {
                valorSoma = Spain.hospedagem.hospedagem2.valor;
            } else if (dados[i].value == Spain.hospedagem.hospedagem3.nomeHospedagem3) {
                valorSoma = Spain.hospedagem.hospedagem3.valor;
            } else if (dados[i].value == Spain.hospedagem.hospedagem4.nomeHospedagem4) {
                valorSoma = Spain.hospedagem.hospedagem4.valor;
            }
        }
    }
    return valorSoma;
}

function calculaHospedagem() {
    let output = document.getElementById("output1");
    let precoHospedagem = somaHospedagem();

    if (validaViajantes() == 0 || taxa() == 0) {
        showAlertMessage('alert-mainDiv');
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
            if (dados[i].value == Spain.aluguelCarro.carro1.nomeCarro1) {
                valorSoma = Spain.aluguelCarro.carro1.valor;
            } else if (dados[i].value == Spain.aluguelCarro.carro2.nomeCarro2) {
                valorSoma = Spain.aluguelCarro.carro2.valor;
            }
        }
    }
    return valorSoma;
}

function calculaAluguelCarros() {
    let precoAluguel = somaAluguelCarro();
    let output = document.getElementById("output2");

    if (validaViajantes() == 0 || taxa() == 0) {
        showAlertMessage('alert-mainDiv');
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
            if (dados[i].value == Spain.pontosTuristicos.primeiroPontoTuristico.nome) {
                valorSoma = Spain.pontosTuristicos.primeiroPontoTuristico.valor;
            } else if (dados[i].value == Spain.pontosTuristicos.segundoPontoTuristico.nome) {
                valorSoma = valorSoma + Spain.pontosTuristicos.segundoPontoTuristico.valor;
            } else if (dados[i].value == Spain.pontosTuristicos.terceiroPontoTuristico.nome) {
                valorSoma = valorSoma + Spain.pontosTuristicos.terceiroPontoTuristico.valor;
            }
        }
    }
    return valorSoma;
}

function calculaTurismo() {
    let precoTurismo = somaTurismo();
    let output = document.getElementById("output3");
    if (validaViajantes() == 0 || taxa() == 0) {
        showAlertMessage('alert-mainDiv');
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
            if (dados[i].value == Spain.alimentacao.cafeDaManha.nome) {
                valorSoma = Spain.alimentacao.cafeDaManha.valor;
            } else if (dados[i].value == Spain.alimentacao.almoco.nome) {
                valorSoma = valorSoma + Spain.alimentacao.almoco.valor;
            } else if (dados[i].value == Spain.alimentacao.jantar.nome) {
                valorSoma = valorSoma + Spain.alimentacao.jantar.valor;
            }
        }
    }
    return valorSoma;
}

function calculaAlimentacao() {
    let precoAlimentacao = somaAlimentacao();
    let output = document.getElementById("output4");
    if (validaViajantes() == 0 || taxa() == 0) {
        showAlertMessage('alert-mainDiv');
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
            if (dados[i].value == Spain.seguroViagem.seguroBagagem.nome) {
                valorSoma = Spain.seguroViagem.seguroBagagem.valor;
            } else if (dados[i].value == Spain.seguroViagem.seguroSaude.nome) {
                valorSoma = valorSoma + Spain.seguroViagem.seguroSaude.valor;
            } else if (dados[i].value == Spain.seguroViagem.seguroVida.nome) {
                valorSoma = valorSoma + Spain.seguroViagem.seguroVida.valor;
            }
        }
    }
    return valorSoma;
}

function calculaSeguroVida() {
    let precoSeguro = somaSeguro();
    let output = document.getElementById("output5");

    if (validaViajantes() == 0 || taxa() == 0) {
        showAlertMessage('alert-mainDiv');
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
            if (dados[i].value == Spain.Extras.extraTour.nome) {
                valorSoma = Spain.Extras.extraTour.valor;
            } else if (dados[i].value == Spain.Extras.extraVIP.nome) {
                valorSoma = valorSoma + Spain.Extras.extraVIP.valor;
            } else if (dados[i].value == Spain.Extras.extraPet.nome) {
                valorSoma = valorSoma + Spain.Extras.extraPet.valor;
            }
        }
    }
    return valorSoma;
}

function calculaExtra() {
    let precoExtra = somaExtra();
    let output = document.getElementById("output6");

    if (validaViajantes() == 0 || taxa() == 0) {
        showAlertMessage('alert-mainDiv');
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