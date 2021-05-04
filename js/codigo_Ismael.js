
let countries = [

    France = {
        name: "França",
        image:"https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        hospedagem: {
            nomeCategoria: "Hospedagem",
            hospedagem1: {
                nomeHospedagem: "5 Estrelas",
                valor: 400.00,
            },

            hospedagem2: {
                nomeHospedagem: "4 Estrelas",
                valor: 300.00
            },

            hospedagem3: {
                nomeHospedagem: "3 Estrelas",
                valor: 200.00
            }
    
        },
        
        aluguelCarro: {

            nomeCategoria: "Aluguel Carro",
            carro1: {
                nomeCarro1: "Carro Comum",
                valor: 30.00
            },

            carro2: {
                nomeCarro2: "Carro 5+",
                valor: 45.00
            }

        },

        alimentacao: {
            nomeCategoria: "Alimentação",
            cafeDaManha: {
                nome: "Café da Manhã",
                valor: 50.00
            },
            almoco: {
                nome:"Almoço",
                valor: 25.50
            },
            jantar: {
                nome: "Jantar",
                valor: 34.90
            },
            almocoJantar: {
                nome: "Almoço e Janta",
                valor: 61.30
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
                nome: "Rolê pela cidade",
                valor: 100.00
            },
            segundoPontoTuristico: {
                nome: "Subir na Torre",
                valor: 300.00
            },
            terceiroPontoTuristico: {
                nome: "Arco do Triunfo",
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
]

/*let i = 0

console.log(typeof countries[i].hospedagem);
console.log(countries[0].hospedagem.valor);
*/

// Função que percorre as alternativas e pega a correta. Em seguida compara o name do Html com o nome da propriedade aqui
// e por fim armazena seu valor na variável precoHospedagem, caso mais de uma opção seja 
// marcada, ele realiza a soma dentro da mesma variável, para retornar no fim.
// sei que existem maneiras melhores de fazer isso kkk, mas essa foi a minha, com conhecimento 0 de como pegar os valores do Html
function calculaHospedagem(){
    let pacote = document.getElementsByName('hospedagem');
    let precoHospedagem;

    for (let i = 0; i < pacote.length; i++){
        if ( pacote[i].checked ) {
            if(pacote[i].value == countries[0].hospedagem1.nomeHospedagem){ 
                precoHospedagem = countries[0].hospedagem1.valor;
            }else if(pacote[i].value == countries[0].hospedagem2.nomeHospedagem){
                precoHospedagem = precoHospedagem + countries[0].hospedagem2.valor;
            }else if(pacote[i].value == countries[0].hospedagem3.nomeHospedagem){
                precoHospedagem = precoHospedagem + countries[0].hospedagem3.valor;
            }
        }
    }
    return precoHospedagem;
}

function calculaAluguelCarros(){
    let pacote = document.getElementsByName('aluguelCarro');
    let precoAluguel;

    for (let i = 0; i < pacote.length; i++){
        if ( pacote[i].checked ) {
            if(pacote[i].value == countries[0].aluguelCarro.carro1.nomeCarro1){
                precoAluguel = countries[0].aluguelCarro.carro1.valor;
            }else if (pacote[i].value == countries[0].aluguelCarro.carro2.nomeCarro2) {
                precoAluguel = precoAluguel + countries[0].aluguelCarro.carro2.valor;
            }
        }
    }
    return precoAluguel;
}

function calculaTurismo(){
    let pacote = document.getElementsByName('turismo');
    let precoTurismo;

    for (let i = 0; i < pacote.length; i++){
        if ( pacote[i].checked ) {
            if(pacote[i].value == countries[0].pontosTuristicos.primeiroPontoTuristico.nome){
                precoTurismo = countries[0].pontosTuristicos.primeiroPontoTuristico.valor;
            }if (pacote[i].value == countries[0].pontosTuristicos.segundoPontoTuristico.nome) {
                precoTurismo = precoTurismo + countries[0].pontosTuristicos.segundoPontoTuristico.valor;
            } if (pacote[i].value == countries[0].pontosTuristicos.terceiroPontoTuristico.nome) {
                precoTurismo = precoTurismo + countries[0].pontosTuristicos.terceiroPontoTuristico.valor;
            }
        }
    }
    return precoTurismo;
}

function calculaAlimentacao(){
    let pacote = document.getElementsByName('alimentacao');
    let precoAlimentacao;

    for (let i = 0; i < pacote.length; i++){
        if ( pacote[i].checked ) {
            if(pacote[i].value == countries[0].alimentacao.cafeDaManha.nome){
                precoAlimentacao = countries[0].alimentacao.cafeDaManha.valor;
            }else if (pacote[i].value == countries[0].alimentacao.almoco.nome) {
                precoAlimentacao = precoAlimentacao + countries[0].alimentacao.almoco.valor;
            }else if (pacote[i].value == countries[0].alimentacao.jantar.nome) {
                precoAlimentacao = precoAlimentacao + countries[0].alimentacao.jantar.valor;
            }else if (pacote[i].value == countries[0].alimentacao.almocoJantar.nome){
                precoAlimentacao = precoAlimentacao + countries[0].alimentacao.almocoJantar.valor;
            }
        }
    }
    return precoAlimentacao;
}

function calculaSeguroVida(){
    let pacote = document.getElementsByName('seguro');
    let precoSeguro;

    for (let i = 0; i < pacote.length; i++){
        if ( pacote[i].checked ) {
            if(pacote[i].value == countries[0].seguroViagem.seguroBagagem.nome){
                precoSeguro = countries[0].seguroViagem.seguroBagagem.valor;
            }else if (pacote[i].value == countries[0].seguroViagem.seguroSaude.nome) {
                precoSeguro = precoSeguro + countries[0].seguroViagem.seguroSaude.valor;
            }else if (pacote[i].value == countries[0].seguroViagem.seguroVida.nome) {
                precoSeguro = precoSeguro + countries[0].seguroViagem.seguroVida.valor;
            }
        }
    }
    return precoSeguro;
}

function calculaExtra(){
    let pacote = document.getElementsByName('extra');
    let precoExtra;

    for (let i = 0; i < pacote.length; i++){
        if ( pacote[i].checked ) {
            if(pacote[i].value == countries[0].Extras.extraTour.nome){
                precoExtra = countries[0].Extras.extraTour.valor;
            }else if (pacote[i].value == countries[0].Extras.extraVIP.nome){
                precoExtra = precoExtra + countries[0].Extras.extraVIP.valor;
            }else if (pacote[i].value == countries[0].Extras.extraPet.nome){
                precoExtra = precoExtra + countries[0].Extras.extraPet.valor;
            }
        }
    }
    return precoExtra;
}

function quantidadePessoas(){
    let pacote = document.getElementById('pessoas');
    return pacote.value;
}

/* chama todas as funções, soma elas e multiplica pelo número de pessoas, mas antes precisa que o número
de pessoas seja maior que 0 e defini 100 pessoas como valor limite, considerando que alguém fosse rico
o suficiente para contratar 2 ou mais voos particulares haha*/
function testeCalcula(){
    let soma;
    let quantidade = quantidadePessoas();
   
    alert(calculaHospedagem());

    if(quantidade > 0 && quantidade <= 100){
        soma = quantidade * (calculaTurismo() + calculaExtra()
                          + calculaAlimentacao()+ calculaAluguelCarros()
                          + calculaHospedagem() + calculaSeguroVida());
            alert(soma);
    }else{
        alert("Perdão, nenhuma agência de viagens faz voos para menos de uma pessoa ou mais de 100");
    }
    
}
