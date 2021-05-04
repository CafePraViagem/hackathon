// Adelar
// DOM Request
const
    // Name: Hospedagem
    hospedagem1 = document.getElementById("hospedagem-1"),
    hospedagem2 = document.getElementById("hospedagem-2"),
    hospedagem3 = document.getElementById("hospedagem-3"),
    // Name: Aluguel Carro
    aluguelCarro1 = document.getElementById("aluguelCarro-1"),
    aluguelCarro2 = document.getElementById("aluguelCarro-2"),
    // Name: Pontos Turisticos
    role = document.getElementById("role"),
    torre = document.getElementById("torre"),
    arco = document.getElementById("arco"),
    // Name: Alimentacao
    cafe = document.getElementById("cafe"),
    almoco = document.getElementById("almoco"),
    janta = document.getElementById("janta"),
    almocoJanta = document.getElementById("almocoJanta"),
    // Name: Seguro Viagem
    bagagem = document.getElementById("bagagem"),
    vida = document.getElementById("vida"),
    saude = document.getElementById("saude"),
    // Name: Extras
    tourEspecialista = document.getElementById("tourEspecialista"),
    vip = document.getElementById("vip"),
    familia = document.getElementById("familia");

let myRequest = new Request("./data/data.json")

// Hospedagem event listeners
hospedagem1.addEventListener("click", hospedagem);
hospedagem2.addEventListener("click", hospedagem);
hospedagem3.addEventListener("click", hospedagem);

// Aluguem de Carros event listeners
aluguelCarro1.addEventListener("click", aluguelCarro);
aluguelCarro2.addEventListener("click", aluguelCarro);

// Pontos Turísticos event listeners
role.addEventListener("click", () => {
    // Verifica se elemento está marcado (inserir ou não ShowAlert())
    isChecked(role, "alert3");
    // Chama função relacionada ao evento
    pontosTuristicos();
})
arco.addEventListener("click", () => {
    isChecked(arco, "alert3");
    pontosTuristicos();
})
torre.addEventListener("click", () => {
    isChecked(torre, "alert3");
    pontosTuristicos();
})

// Alimentação event listeners
cafe.addEventListener("click", () => {
    // Verifica se elemento está marcado (inserir ou não ShowAlert())
    isChecked(cafe, "alert4");
    // Chama função relacionada ao evento
    alimentacao();
});
almoco.addEventListener("click", () => {
    isChecked(almoco, "alert4");
    alimentacao();
});
janta.addEventListener("click", () => {
    isChecked(janta, "alert4");
    alimentacao();
});

// Seguro Viagem event listeners
bagagem.addEventListener("click", () => {
    // Verifica se elemento está marcado (inserir ou não ShowAlert())
    isChecked(bagagem, "alert5");
    // Chama função relacionada ao evento
    seguroViagem();
});
vida.addEventListener("click", () => {
    isChecked(vida, "alert5");
    seguroViagem();
});
saude.addEventListener("click", () => {
    isChecked(saude, "alert5");
    seguroViagem();
});

// Extras event listeners
tourEspecialista.addEventListener("click", () => {
    // Verifica se elemento está marcado (inserir ou não ShowAlert())
    isChecked(tourEspecialista, "alert6");
    // Chama função relacionada ao evento
    extras();
});
vip.addEventListener("click", () => {
    isChecked(vip, "alert6");
    extras();
});
familia.addEventListener("click", () => {
    isChecked(familia, "alert6");
    extras();
});

// Functions
function showAlertMessage(element) {
    document.getElementById(element).style.display = "block";

    setTimeout(() => {
        document.getElementById(element).style.display = "none";
    }, 3000);
}

function isChecked(element, output) {
    if (!element.checked) {
        // Do something
    } else {
        showAlertMessage(output)
    }
}

function somaValores(output, value) {
    const numeroPessoas = document.getElementById("numeroPessoas");

    output.innerHTML = `Total: R$ ${value.toFixed(2) * numeroPessoas.value}`
}

function hospedagem() {
    const output = document.getElementById("output1");

    if (hospedagem1.checked) {
        fetch(myRequest)
            .then(response => response.json())
            .then(data => {
                somaValores(output, data.France.hospedagem.hospedagem1.valor)
            })
    } else if (hospedagem2.checked) {
        fetch(myRequest)
            .then(response => response.json())
            .then(data => {
                somaValores(output, data.France.hospedagem.hospedagem2.valor);
            })
    } else if (hospedagem3.checked) {
        fetch(myRequest)
            .then(response => response.json())
            .then(data => {
                somaValores(output, data.France.hospedagem.hospedagem3.valor);
            })
    }
    showAlertMessage("alert1");
}

function aluguelCarro() {
    const output = document.getElementById("output2");

    if (aluguelCarro1.checked) {
        fetch(myRequest)
            .then(response => response.json())
            .then(data => {
                somaValores(output, data.France.aluguelCarro.carro1.valor);
            })
    } else if (aluguelCarro2.checked) {
        fetch(myRequest)
            .then(response => response.json())
            .then(data => {
                somaValores(output, data.France.aluguelCarro.carro2.valor);
            })
    }
    showAlertMessage("alert2");
}

function pontosTuristicos() {
    const output = document.getElementById("output3");
    let total = 0;

    if (!role.checked && !torre.checked && !arco.checked) {
        output.style.display = "none";
    } else {
        output.style.display = "block";

        if (role.checked) {
            fetch(myRequest)
                .then(response => response.json())
                .then(data => {
                    total += data.France.pontosTuristicos.primeiroPontoTuristico.valor;
                    somaValores(output, total);
                })
        }

        if (torre.checked) {
            fetch(myRequest)
                .then(response => response.json())
                .then(data => {
                    total += data.France.pontosTuristicos.segundoPontoTuristico.valor;
                    somaValores(output, total);
                })
        }

        if (arco.checked) {
            fetch(myRequest)
                .then(response => response.json())
                .then(data => {
                    total += data.France.pontosTuristicos.terceiroPontoTuristico.valor;
                    somaValores(output, total);
                })
        }
    }
}

function alimentacao() {
    const output = document.getElementById("output4");
    let total = 0;

    if (!cafe.checked && !almoco.checked && !janta.checked) {
        output.style.display = "none";
    } else {
        output.style.display = "block";

        if (cafe.checked) {
            fetch(myRequest)
                .then(response => response.json())
                .then(data => {
                    total += data.France.alimentacao.cafeDaManha.valor;
                    somaValores(output, total);
                })
        }

        if (almoco.checked) {
            fetch(myRequest)
                .then(response => response.json())
                .then(data => {
                    total += data.France.alimentacao.almoco.valor;
                    somaValores(output, total);
                })
        }

        if (janta.checked) {
            fetch(myRequest)
                .then(response => response.json())
                .then(data => {
                    total += data.France.alimentacao.jantar.valor;
                    somaValores(output, total);
                })
        }
    }
}

function seguroViagem() {
    const output = document.getElementById("output5");
    let total = 0;

    if (!bagagem.checked && !vida.checked && !saude.checked) {
        output.style.display = "none";
    } else {
        output.style.display = "block";

        if (bagagem.checked) {
            fetch(myRequest)
                .then(response => response.json())
                .then(data => {
                    total += data.France.seguroViagem.seguroBagagem.valor;
                    somaValores(output, total);
                })
        }

        if (vida.checked) {
            fetch(myRequest)
                .then(response => response.json())
                .then(data => {
                    total += data.France.seguroViagem.seguroVida.valor;
                    somaValores(output, total);
                })
        }

        if (saude.checked) {
            fetch(myRequest)
                .then(response => response.json())
                .then(data => {
                    total += data.France.seguroViagem.seguroSaude.valor;
                    somaValores(output, total);
                })
        }
    }
}

function extras() {
    const output = document.getElementById("output6");
    let total = 0;

    if (!tourEspecialista.checked && !vip.checked && !familia.checked) {
        output.style.display = "none";
    } else {
        output.style.display = "block";

        if (tourEspecialista.checked) {
            fetch(myRequest)
                .then(response => response.json())
                .then(data => {
                    total += data.France.Extras.extraTour.valor;
                    somaValores(output, total);
                })
        }

        if (vip.checked) {
            fetch(myRequest)
                .then(response => response.json())
                .then(data => {
                    total += data.France.Extras.extraVIP.valor;
                    somaValores(output, total);
                })
        }

        if (familia.checked) {
            fetch(myRequest)
                .then(response => response.json())
                .then(data => {
                    total += data.France.Extras.extraPet.valor;
                    somaValores(output, total);
                })
        }
    }
}