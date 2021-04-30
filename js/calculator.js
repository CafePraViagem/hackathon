
let countries = [

    France = {
        name: "França",
        image:"https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        hospedagem: {
            nomeCategoria: "Hospedagem",
            hospedagem1: {
                nomeHospedagem1: "5 Estrelas",
                valor: 400.00,
            },

            hospedagem2: {
                nomeHospedagem2: "4 Estrelas",
                valor: 300.00
            },

            hospedagem3: {
                nomeHospedagem3: "3 Estrelas",
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

function calculaHospedagem(){
    let pacote = document.getElementsByName('hospedagem');
    let precoHospedagem;

    for (let i = 0; i < pacote.length; i++){
        if ( pacote[i].checked ) {
            if(pacote[i].value == countries[0].hospedagem.hospedagem1.nomeHospedagem1){
                precoHospedagem = countries[0].hospedagem.hospedagem1.valor;
                alert(precoHospedagem);
            }else if (pacote[i].value == countries[0].hospedagem.hospedagem2.nomeHospedagem2) {
                precoHospedagem = countries[0].hospedagem.hospedagem2.valor;
                alert(precoHospedagem);
            }else if (pacote[i].value == countries[0].hospedagem.hospedagem3.nomeHospedagem3) {
                precoHospedagem = countries[0].hospedagem.hospedagem3.valor;
                alert(precoHospedagem);
            }
        }
    }
}

function calculaAluguelCarros(){
    let pacote = document.getElementsByName('aluguelCarro');
    let precoAluguel;

    for (let i = 0; i < pacote.length; i++){
        if ( pacote[i].checked ) {
            if(pacote[i].value == countries[0].aluguelCarro.carro1.nomeCarro1){
                precoAluguel = countries[0].aluguelCarro.carro1.valor;
                alert(precoAluguel);
            }else if (pacote[i].value == countries[0].aluguelCarro.carro2.nomeCarro2) {
                precoAluguel = countries[0].aluguelCarro.carro2.valor;
                alert(precoAluguel);
            }
        }
    }

}

function testeCalcula(){
    calculaHospedagem();
    calculaAluguelCarros();
}
*/