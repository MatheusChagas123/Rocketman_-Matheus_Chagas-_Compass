




console.log('--------------------------');
console.log('Operadores condicionais If e Else ');

// se a hora estiver entre 06:00 até 12:00 "bom dia"
// se a hora estiver entre 12:00 até 18:00 "boa tarde"
// caso contrário "boa noite"
var hora = new Date()
var agora = hora.getHours()

if( agora > 06 && agora < 12 ){
    console.log('Olá, Bom dia!!! :D');
    }else if (agora> 12 && agora < 18){
        console.log('olá, Boa tarde!!! :D');
    } else {
        console.log ('Olá, Boa noite !!! :D');
    }
    
    console.log('--------------------------');
console.log('Operadores condicionais Switch ');
    // Switch case

    let permissao = 'ouro';

     switch (permissao){
         case 'bronze':
            console.log('Usuário bronze');
            break;

        case 'prata':
            console.log('Usuário prata');
            break;

        case 'ouro':
            console.log('Usuário ouro');
            break;  

            default:
                console.log('Usuário não reconhecido');
            
     }
     console.log('--------------------------');
     console.log('Laço de repetições ');
     console.log('For: ');
     // repetir uma contar um mesmo número até 3
     for (let i= 1; i <=3 ;i++){
        console.log('contamos: ',i);
     }
     console.log('e já ');
     console.log('--------------------------');
     console.log('while: ');
        let c = 3;
        while (c = 1){
        if (c % 2 !==0){
            console.log (c)
                    }
            c--; 
        }
              
     console.log('--------------------------');  
     console.log('Do While: ');
        i = 0;
        do {
            let contagem =i;
            console.log("contando ", contagem );
            i++;
        }while (i<3)

     console.log('--------------------------');
     console.log('For in: ');
        // melhor para objetos

        const pessoa ={
            nome: 'matheus',
            idade:25
        }

        for (let chave in pessoa){
            console.log (chave);
        }

        const frutas = ['maça','Banana','uva'];
        for(let indice in frutas){
            console.log(indice,frutas[indice])
        }
     console.log('For of: ');
      










//operadores Bitwise

