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

    output = `Total: R$ ${valor.toFixed(2)}` ;

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

role.addEventListener('click', () => {
    let valor = 600,
        output;

        if(torre.checked === true && arco.checked === true) {
            valor += torre.valor + arco.valor;
        } else if(torre.checked === true) {
            valor += torre.valor;
        } else if(arco.checked) {
            valor += arco.valor;
        }

    output = `Total: R$ ${valor.toFixed(2)}`;

    output3.innerHTML = output;
})

torre.addEventListener('click', () => {
    let valor = 700,
        output;

        if(role.checked === true && arco.checked === true) {
            valor += role.valor + arco.valor;
        } else if(role.checked === true) {
            valor += role.valor;
        } else if(arco.checked) {
            valor += arco.valor;
        }

    output = `Total: R$ ${valor.toFixed(2)}`;

    output3.innerHTML = output;
})

arco.addEventListener('click', () => {
    let valor = 800,
        output;

        if(torre.checked === true && role.checked === true) {
            valor += torre.valor + role.valor;
        } else if(torre.checked === true) {
            valor += torre.valor;
        } else if(role.checked === true) {
            valor += role.valor;
        }

    output = `Total: R$ ${valor.toFixed(2)}`;

    output3.innerHTML = output;
})

// let somaCheckbox = 0;
// function plusCheckbox() {
//     if(role.checked === true) {
//         somaCheckbox += eval(role.valor)
//     } else if(torre.checked === true) {
//         somaCheckbox += eval(torre.valor)
//     } else if (arco.checked === true) {
//         somaCheckbox += eval(arco.valor)
//     }
// }

// plusCheckbox();