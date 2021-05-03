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

const
    // Hospedagem object
    arrHospedagem = [
        FiveStar = {
            valor: 400
        },
        FourStar = {
            valor: 300
        },
        ThreeStar = {
            valor: 200
        }
    ],
    // Aluguel Carro object
    arrAluguelCarro = [
        CarroComum = {
            valor: 30
        },
        CarroMaisCinco = {
            valor: 45
        }
    ],
    // Pontos Turisticos object
    arrPontosTuristicos = [
        Role = {
            name: "Role pela cidade",
            valor: 100
        },
        Torre = {
            name: "Subir na torre",
            valor: 300
        },
        Arco = {
            name: "Arco do triunfo",
            valor: 200
        },
    ],
    // Alimentacao object
    arrAlimentacao = [
        Cafe = {
            nome: "Café da Manhã",
            valor: 50.00
        },
        Almoco = {
            nome: "Almoço",
            valor: 25.50
        },
        Janta = {
            nome: "Jantar",
            valor: 34.90
        }
    ],
    // Seguro Viagem object
    arrSeguroViagem = [
        SeguroBagagem = {
            nome: "Bagagem",
            valor: 400.99
        },
        SeguroVida = {
            nome: "Vida",
            valor: 789.99
        },
        SeguroSaude = {
            nome: "Saúde",
            valor: 548.99
        }
    ],
    // Extras object
    arrExtra = [
        extraTour = {
            nome: "Tour com o Especialista",
            valor: 900.00
        },
        extraVIP = {
            nome: "VIP Casa Noturna",
            valor: 1999.99
        },
        extraPet = {
            nome: "Família com Pet",
            valor: 249.99
        }
    ]

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
    // Verifica se elemento está marcado (inserir ou não ShowAlert())
    isChecked(arco, "alert3");
    // Chama função relacionada ao evento
    pontosTuristicos();
})
torre.addEventListener("click", () => {
    // Verifica se elemento está marcado (inserir ou não ShowAlert())
    isChecked(torre, "alert3");
    // Chama função relacionada ao evento
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
    // Verifica se elemento está marcado (inserir ou não ShowAlert())
    isChecked(almoco, "alert4");
    // Chama função relacionada ao evento
    alimentacao();
});
janta.addEventListener("click", () => {
    // Verifica se elemento está marcado (inserir ou não ShowAlert())
    isChecked(janta, "alert4");
    // Chama função relacionada ao evento
    alimentacao();
});
almocoJanta.addEventListener("click", () => {
    // Verifica se elemento está marcado (inserir ou não ShowAlert())
    isChecked(almocoJanta, "alert4");
    // Chama função relacionada ao evento
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
    // Verifica se elemento está marcado (inserir ou não ShowAlert())
    isChecked(vida, "alert5");
    // Chama função relacionada ao evento
    seguroViagem();
});
saude.addEventListener("click", () => {
    // Verifica se elemento está marcado (inserir ou não ShowAlert())
    isChecked(saude, "alert5");
    // Chama função relacionada ao evento
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
    // Verifica se elemento está marcado (inserir ou não ShowAlert())
    isChecked(vip, "alert6");
    // Chama função relacionada ao evento
    extras();
});
familia.addEventListener("click", () => {
    // Verifica se elemento está marcado (inserir ou não ShowAlert())
    isChecked(familia, "alert6");
    // Chama função relacionada ao evento
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
        somaValores(output, FiveStar.valor);
    } else if (hospedagem2.checked) {
        somaValores(output, FourStar.valor);
    } else if (hospedagem3.checked) {
        somaValores(output, ThreeStar.valor);
    }
    showAlertMessage("alert1");
}

function aluguelCarro() {
    const output = document.getElementById("output2");

    if (aluguelCarro1.checked) {
        somaValores(output, CarroComum.valor);
    } else if (aluguelCarro2.checked) {
        somaValores(output, CarroMaisCinco.valor);
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
            total += Role.valor;
            somaValores(output, total);
        }

        if (torre.checked) {
            total += Torre.valor;
            somaValores(output, total);
        }

        if (arco.checked) {
            total += Arco.valor;
            somaValores(output, total);
        }
    }
}

function alimentacao() {
    const output = document.getElementById("output4");
    let total = 0;

    if (!cafe.checked && !almoco.checked && !janta.checked && !almocoJanta.checked) {
        output.style.display = "none";
    } else {
        output.style.display = "block";

        if (cafe.checked) {
            total += Cafe.valor;
            somaValores(output, total);
        }

        if (almoco.checked) {
            total += Almoco.valor;
            somaValores(output, total);
        }

        if (janta.checked) {
            total += Janta.valor;
            somaValores(output, total);
        }

        if (almocoJanta.checked) {
            total += Almoco.valor + Janta.valor;
            somaValores(output, total);
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
            total += SeguroBagagem.valor;
            somaValores(output, total);
        }

        if (vida.checked) {
            total += SeguroVida.valor;
            somaValores(output, total);
        }

        if (saude.checked) {
            total += SeguroSaude.valor;
            somaValores(output, total);
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
            total += extraTour.valor;
            somaValores(output, total);
        }

        if (vip.checked) {
            total += extraVIP.valor;
            somaValores(output, total);
        }

        if (familia.checked) {
            total += extraPet.valor;
            somaValores(output, total);
        }
    }
}