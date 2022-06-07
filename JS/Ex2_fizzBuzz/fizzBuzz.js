//divisivel por 3 => fizz
// divisivel por 5 => Buzz
//divisivel por ambos 15 => fizBuzz
//não é divisivel por 3 ou 5 => não é divisivel
//se for letra => não é um número


function fizzBuzz (entrada){

      if(typeof entrada !== 'number')
      return 'o valor apresentado não é um número';
      if ((entrada % 5 === 0) && (entrada % 3 === 0))
      return 'fizzBuzz';
      if (entrada % 5 === 0)
      return 'Buzz';
      if (entrada % 3 === 0)
      return 'Fizz';


}
    const resultado = fizzBuzz(3);
console.log(resultado);

