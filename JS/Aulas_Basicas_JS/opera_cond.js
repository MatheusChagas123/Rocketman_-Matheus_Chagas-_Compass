console.log('--------------------------');
console.log('Operadores condicionais If e Else ');

// se a hora estiver entre 06:00 até 12:00 "bom dia"
// se a hora estiver entre 12:00 até 18:00 "boa tarde"
// caso contrário "boa noite"

var agora = 13

if( agora > 06 && agora < 12 ){
    console.log('Olá, Bom dia!!! :D');
    }else if (agora> 12 && agora < 18){
        console.log('olá, Boa tarde!!! :D');
    } else {
        console.log ('Olá, Boa noite !!! :D');
    }