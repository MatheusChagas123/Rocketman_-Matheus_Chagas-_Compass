function criarCarro (marcaCarro,corCarro,placaCarro){
    return{
        marcaCarro,
        corCarro,
        placaCarro,
        andar (){
            console.log ( 'O carro está ligado e pronto para andar.')
        }
    }
}

const carro1 = criarCarro ('fiat','azul','KHA123') ;
console.log (carro1);