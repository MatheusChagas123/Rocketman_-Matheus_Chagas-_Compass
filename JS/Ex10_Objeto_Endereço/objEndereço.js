// Criar um objeto endereço  que contenha : rua, Cidade, Cep, Exbirendereço(endereço)

let endereco = {
    rua : 'xavier de brito',
    cidade: 'hellcife',
    cep: 65477,
}

function exibirEndereco (endereco){
    for (let mostrar in endereco)
    console.log(mostrar,endereco[mostrar]);
}

exibirEndereco (endereco);
