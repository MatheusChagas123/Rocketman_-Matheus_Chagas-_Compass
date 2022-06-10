// como encontrar elementos: (primitivos)

const numeros = [1,2,3,4,2];


console.log (numeros.indexOf(4)); 
console.log (numeros.indexOf(5)); // não encontra === -1

console.log (numeros.lastIndexOf(2));// mostra o ultimo número que o número est
console.log (numeros.includes(3));

// contrar elementos do tipo (referência)

const matricula = [
  {id: 1, nome :354984},
  {id: 2, nome :98495},
  {id: 3, nome :89874},
    
];

const buscarMatricula = matricula.find(function(mat){
    return mat.nome === 89874;

});

console.log (buscarMatricula);

//Arrow Functions

const verMatricula = matricula.find((mat)=> mat.nome === 89874);

console.log (verMatricula);

// remover elementos dos arrays

const armario = ['roupa','pente','desodorante','creme','gaveta'];

armario.push();
armario.unshift();
armario.splice();
//final
const ultimo = armario.pop();

console.log(ultimo);
console.log (armario);
// primeiro
const primeiro = armario.shift();
console.log (primeiro);
console.log(armario);

// remover no meio
const meio = armario.splice (3,1);
console.log (armario);

// Esvaziar Array

armario.length = 0;

console.log (armario);

// combinar array

const prim = [1,2,3];
const segun = [4,5,6];

const combinado = prim.concat(segun);
console.log(combinado);

//Dividir
const cortado =combinado.slice(1,3);//funciona para tipos primitivos
console.log (cortado);

// copiar array (spred)
const juntar =[...prim,'%',...segun];
console.log (juntar);

//forEach
const cachorros =['labrador','pug','SDR'];
cachorros.forEach((cachorros,indice) => console.log (cachorros,indice ));
// acresentar algo entre valores dos arrays
const separador = cachorros.join('.');
console.log(separador);

// remover algo e subistituir por um valor comum ex: tirara espaços em uma frase e add _

const frase ='quase acabando o curso de 4 horas';

const subistituir = frase.split(' ');
console.log (subistituir);
console.log(subistituir.join('_'));







