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