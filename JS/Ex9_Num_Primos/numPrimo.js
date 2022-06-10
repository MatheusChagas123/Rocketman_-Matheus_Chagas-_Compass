// mostrar números primos dentro de um limite

exibirNumerosPrimos (15)

function exibirNumerosPrimos (limite){

    for ( let i= 2; i <= limite; i++){
        
        if (veriPrimo(i)) console.log(i,'é um número primo.');
    }
}
function veriPrimo (num){

        for (let div = 2; div < num; div++){
            if (num%div ===0){
                return false;
            }
        }
        return true;
}