let countries = [

    France = {
        name: "França",
        image:"https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        hospedagem: {
            nomeCategoria: "Hospedagem",
            hospedagem1: {
                nomeHospedagem1: "Cinco Estrelas: ",
                valor: 400.00,
            },

            hospedagem2: {
                nomeHospedagem2: "Quatro Estrelas: ",
                valor: 300.00
            },

            hospedagem3: {
                nomeHospedagem3: "Três Estrelas: ",
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

        alimentacao: "",

        seguroViagem: "",

        pontosTuristicos: "",

        Extras: ""

    }
]

let i = 0

console.log(typeof countries[i].hospedagem);
