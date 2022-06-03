// Operadores Aritiméticos (matemáticos)
let salario = 100;
// +, -,*,**
console.log('Operadores aritiméticos');
console.log('soma salário 100 + 100 =');
console.log(salario + salario);
console.log('subitrair salário 100 - 100 =');
console.log(salario - salario);
console.log('dividir salário 100 / 100 =');
console.log(salario / salario);
console.log('multiplicar salário 100 * 100 =');
console.log(salario * salario);
console.log('pontêncialização de 2²=');
console.log(2** 2);
// ++ incrmeto e -- decremento
console.log('--------------------------');
console.log('Incremento e decremento');
console.log('número inicial');
let num = 20;
console.log('Incremento ');
console.log(num++);
console.log(num);
//caso não queira repetir o console.log colocar incremento ou decremento na frente
console.log(' decremento 1')
console.log(--num);
console.log('--------------------------');
console.log('Operadores de atribuição');
// Operadores de atribuição

let valorRacao = 10;
valorRacao += valorRacao;
console.log(valorRacao);
// funciona com todos os operadores
console.log('--------------------------');
console.log('Operadores de comparação restrita');
//Operadores de comparação
//Igualdade Estrita comparação com tipo de formatação e informação
console.log('1'===1);
console.log('--------------------------');
console.log('Operadores de comparação solta');

// igualdade Solta (não recomendado)
console.log(1==1);
console.log('1'==1);
console.log('--------------------------');
console.log('atalho para if');


// questão se o cliente tivver mais de 100 compras ele é prêmio, caso ele tenha menos é comum

let pontos = 100;
let tipo = pontos >= 100 ? 'Premium' :'Comum';
console.log (tipo);
console.log('--------------------------');
console.log('Operadores lógicos e (&&)');


// operador e (&&) retorna True se os dois operandos forem true
console.log (true && true);//true
console.log (false && true);// false

// para fazer o teste de habilitação precisa ter    18 anos ou mais e ser alistado no exército

let idadeAnos = 17;
let alistamento= 'sim';
let aprovacaoCarteira = idadeAnos >= 18 ? true : false && alistamento === 'sim' ? true : false;
console.log(aprovacaoCarteira === true ? 'Aprovado' : 'Falta algum requisito');

console.log('--------------------------');
console.log('Operadores lógicos or (||)');
// retorna true se um dos operadires forem true
// para tirar a carteira de trabalho precisa ser maior de 16 anos ou possuir uma documentação de antecipação

let solicEmprego = 'Não'

let aprovCarteiraTrab = idadeAnos >= 16 ? true : false || solicEmprego === 'sim' ? true : false;

console.log(aprovCarteiraTrab === true ? 'Aprovado' : 'Nenhum requisito aceito');

console.log('--------------------------');
console.log('Operadores lógicos NOT (!)');
//é Uma negação






//operadores Bitwise

