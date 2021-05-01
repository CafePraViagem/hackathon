// DOM Request
const
    numeroPessoas = document.getElementById('numeroPessoas'),

    hospedagem1 = document.getElementById('hospedagem-1'),
    hospedagem2 = document.getElementById('hospedagem-2'),
    hospedagem3 = document.getElementById('hospedagem-3'),

    aluguelCarro1 = document.getElementById('aluguelCarro-1'),
    aluguelCarro2 = document.getElementById('aluguelCarro-2'),

    role = document.getElementById('role'),
    torre = document.getElementById('torre'),
    arco = document.getElementById('arco'),

    cafe = document.getElementById('cafe'),
    almoco = document.getElementById('almoco'),
    janta = document.getElementById('janta'),
    almocoJanta = document.getElementById('almocoJanta'),

    bagagem = document.getElementById('bagagem'),
    vida = document.getElementById('vida'),
    saude = document.getElementById('saude'),

    tourEspecialista = document.getElementById('tourEspecialista'),
    vip = document.getElementById('vip'),
    familia = document.getElementById('familia'),

    output1 = document.getElementById('output1'),
    output2 = document.getElementById('output2'),
    output3 = document.getElementById('output3'),
    output4 = document.getElementById('output4'),
    output5 = document.getElementById('output5'),
    output6 = document.getElementById('output6');

// Pontos Turísticos object
const arrPontosTuristicos = [
    Role = {
        name: 'Role pela cidade',
        valor: 100
    },
    Torre = {
        name: 'Subir na torre',
        valor: 300
    },
    Arco = {
        name: 'Arco do triunfo',
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
hospedagem1.addEventListener('click', () => {
    let valor = 400;

    somaValores(output1, valor);

    showAlertMessage();
});

hospedagem2.addEventListener('click', () => {
    let valor = 300;

    somaValores(output1, valor);

    showAlertMessage();
});

hospedagem3.addEventListener('click', () => {
    let valor = 200;

    somaValores(output1, valor);

    showAlertMessage();
});

// Aluguem de Carros event listeners
aluguelCarro1.addEventListener('click', () => {
    let valor = 30;

    somaValores(output2, valor);

    showAlertMessage();
});

aluguelCarro2.addEventListener('click', () => {
    let valor = 45;

    somaValores(output2, valor);

    showAlertMessage();
});

// Pontos turísticos event listeners
role.addEventListener('click', somaPontosTuristicos);

arco.addEventListener('click', somaPontosTuristicos);

torre.addEventListener('click', somaPontosTuristicos);

// Alimentação event listeners
cafe.addEventListener('click', somaAlimentacao);

almoco.addEventListener('click', somaAlimentacao);

janta.addEventListener('click', somaAlimentacao);

almocoJanta.addEventListener('click', somaAlimentacao);

// Seguro Viagem event listeners
bagagem.addEventListener('click', somaSeguroViagem);

vida.addEventListener('click', somaSeguroViagem);

saude.addEventListener('click', somaSeguroViagem);

// Extras event listeners
tourEspecialista.addEventListener('click', somaExtras);

vip.addEventListener('click', somaExtras);

familia.addEventListener('click', somaExtras);

// Functions
function showDisplay() {
    const options = document.getElementById('options');

    options.style.display = 'block';

    document.querySelector('#disable-after-click').disabled = true;
}

function showAlertMessage() {
    document.getElementById('alert-space').style.display = "block";

    setTimeout(() => {
        document.getElementById('alert-space').style.display = "none";
    }, 2000);
}

function somaValores(output, valor) {
    output.innerHTML = `Total: R$ ${valor.toFixed(2) * numeroPessoas.value}`
}

function somaPontosTuristicos() {
    let total = 0;

    if (role.checked == false && torre.checked == false && arco.checked == false) {
        output3.style.display = "none";
    } else {
        output3.style.display = "block";

        if (role.checked) {
            total += Role.valor;
            somaValores(output3, total);
        }

        if (torre.checked) {
            total += Torre.valor;
            somaValores(output3, total);
        }

        if (arco.checked) {
            total += Arco.valor;
            somaValores(output3, total);
        }
    }
}

function somaAlimentacao() {
    let total = 0;

    if (cafe.checked == false && almoco.checked == false && janta.checked == false && almocoJanta.checked == false) {
        output4.style.display = "none";
    } else {
        output4.style.display = "block";

        if (cafe.checked) {
            total += Cafe.valor;
            somaValores(output4, total);
        }

        if (almoco.checked) {
            total += Almoco.valor;
            somaValores(output4, total);
        }

        if (janta.checked) {
            total += Janta.valor;
            somaValores(output4, total);
        }

        if (almocoJanta.checked) {
            total += Almoco.valor + Janta.valor;
            somaValores(output4, total);
        }
    }
}

function somaSeguroViagem() {
    let total = 0;

    if (bagagem.checked == false && vida.checked == false && saude.checked == false) {
        output5.style.display = "none";
    } else {
        output5.style.display = "block";

        if (bagagem.checked) {
            total += SeguroBagagem.valor;
            somaValores(output5, total);
        }

        if (vida.checked) {
            total += SeguroVida.valor;
            somaValores(output5, total);
        }

        if (saude.checked) {
            total += SeguroSaude.valor;
            somaValores(output5, total);
        }
    }
}

function somaExtras() {
    let total = 0;

    if (tourEspecialista.checked == false && vip.checked == false && familia.checked == false) {
        output6.style.display = "none";
    } else {
        output6.style.display = "block";

        if (tourEspecialista.checked) {
            total += extraTour.valor;
            somaValores(output6, total);
        }

        if (vip.checked) {
            total += extraVIP.valor;
            somaValores(output6, total);
        }

        if (familia.checked) {
            total += extraPet.valor;
            somaValores(output6, total);
        }
    }
}