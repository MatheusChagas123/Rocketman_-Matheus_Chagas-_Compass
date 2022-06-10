// criar um objeto de faixa de preço semelhante ao do mercado livre

function fazerFaixa (tooltip,min,max){
    return{
        tooltip,
        min,
        max,

    }
   
}
    let preços = [
        fazerFaixa ('até R$ 300,00',0,300,),
        fazerFaixa('de R$300,00 até 750',300,750 ),
        fazerFaixa('Mais de 750',750,99999999999999 )
    ]
    console.log (preços);
