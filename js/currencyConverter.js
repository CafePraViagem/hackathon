// DOM
const
    hospedagem1 = document.getElementById('hospedagem-1'),
    hospedagem2 = document.getElementById('hospedagem-2'),
    hospedagem3 = document.getElementById('hospedagem-3'),

    output1 = document.getElementById('output1'),

    aluguelCarro1 = document.getElementById('aluguelCarro-1'),
    aluguelCarro2 = document.getElementById('aluguelCarro-2'),

    output2 = document.getElementById('output2'),

    role = document.getElementById('role'),
    torre = document.getElementById('torre'),
    arco = document.getElementById('arco'),

    output3 = document.getElementById('output3');

// Add event listeners
hospedagem1.addEventListener('click', () => { // HOSPEDAGEM 5 ESTRELAS
    let valor = 100,
        output;

    output = `Total: R$ ${valor.toFixed(2)}`;

    output1.innerHTML = output;
});

hospedagem2.addEventListener('click', () => { // HOSPEDAGEM 4 ESTRELAS
    let valor = 200,
        output;

    output = `Total: R$ ${valor.toFixed(2)}`;

    output1.innerHTML = output;
});

hospedagem3.addEventListener('click', () => { // HOSPEDAGEM 3 ESTRELAS
    let valor = 300,
        output;

    output = `Total: R$ ${valor.toFixed(2)}`;

    output1.innerHTML = output;
});

aluguelCarro1.addEventListener('click', () => { // ALUGUEL CARRO COMUM
    let valor = 400,
        output;

    output = `Total: R$ ${valor.toFixed(2)}`;

    output2.innerHTML = output;
});

aluguelCarro2.addEventListener('click', () => { // ALUGUEL CARRO 5+
    let valor = 500,
        output;

    output = `Total: R$ ${valor.toFixed(2)}`;

    output2.innerHTML = output;
});

// ---------------------------------------------------------------------------------------------

const pontosTuristicos2 = [
    Role = {
        name: 'Role pela cidade',
        valor: 100
    },
    Torre = {
        name: 'Subir na torre',
        valor: 100
    },
    Arco = {
        name: 'Role pela cidade',
        valor: 100
    },
]

function somaValoresPontos() {
    let total = 0;

    if (role.checked == false && torre.checked == false && arco.checked == false) {
        output3.style.display = "none";
    } else {
        output3.style.display = "block";

        if (role.checked) {
            total += Role.valor;
            output3.innerHTML = `Total: R$ ${total.toFixed(2)}`
        }

        if (torre.checked) {
            total += Torre.valor;
            output3.innerHTML = `Total: R$ ${total.toFixed(2)}`
        }

        if (arco.checked) {
            total += Arco.valor;
            output3.innerHTML = `Total: R$ ${total.toFixed(2)}`
        }
    }
}

role.addEventListener('click', somaValoresPontos);
arco.addEventListener('click', somaValoresPontos);
torre.addEventListener('click', somaValoresPontos);