// colocar um  valor e verificar se ele  é par ou impa

parOuImpa (5);

function parOuImpa (quant){
    for  (let i =0; i <= quant ;i++){
        let result = i%2 === 0 ? (i,'par') : (i,'impar');
        console.log (i,result);
    }
}
