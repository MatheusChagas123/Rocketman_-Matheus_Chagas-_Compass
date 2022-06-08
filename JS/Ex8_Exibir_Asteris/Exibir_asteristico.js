//Criar uma função que exiba uma quantidade  de * 
// que a linha possui

exibirAsterisitcos (10);

function exibirAsterisitcos (linhas){
    for  (let i=1; i<= linhas;i++){
        let asteristico = '';
        for (let a=1; a < i; a++){
            asteristico += '*';
        }
        console.log (asteristico);
    }
}
