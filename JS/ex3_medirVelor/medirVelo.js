//Critérios:
//Velocidade max até 70
//a cada 5 km acima do limete você ganha 1 ponto
//usar math.floor()
//Caso pontos forem maior que 12 -> "Carteira suspensa"

const veloMax = 70;

function verifVelo( velocidade){
    if (velocidade > veloMax)
    return (velocidade - veloMax) / 5
}

let veloveiculo = verifVelo(150);
console.log(veloveiculo);
if (veloveiculo >0 && veloveiculo <= 1){
    console.log('Veículo ultrapassou a velocidade limite permitida, acresentar:');
    console.log(Math.floor(veloveiculo),'ponto na carteira');
} else if (veloveiculo > 1 && veloveiculo < 12) {
    console.log('Veículo ultrapassou a velocidade limite permitida, acresentar:');
    console.log(Math.floor(veloveiculo),'pontos na carteira');
} else if (veloveiculo => 12) {
    console.log('Veículo ultrapassou muito a  velocidade logo, sua carteira está suspensa!');
    console.log(Math.floor(veloveiculo),'pontos na carteira');
}  else{
    console.log('Veículo respeitou a velocidade permita');
}

