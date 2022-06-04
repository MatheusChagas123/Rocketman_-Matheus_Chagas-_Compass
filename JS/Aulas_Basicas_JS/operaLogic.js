console.log('--------------------------');
console.log('Operadores lógicos e (&&)');

// operador e (&&) retorna True se os dois operandos forem true
console.log (true && true);//true
console.log (false && true);// false

// para fazer o teste de habilitação precisa ter    18 anos ou mais e ser alistado no exército

let idadeAnos = 17;
let alistamento= 'sim';
let aprovacaoCarteira = idadeAnos >= 18 ? true : false && alistamento === 'sim' ? true : false;
console.log('Realizar carteira de habilitação? ', aprovacaoCarteira === true ? 'Aprovado' : 'Falta algum requisito');

console.log('--------------------------');
console.log('Operadores lógicos or (||)');
// retorna true se um dos operadires forem true
// para tirar a carteira de trabalho precisa ser maior de 16 anos ou possuir uma documentação de antecipação

let solicEmprego = 'Não'

let aprovCarteiraTrab = idadeAnos >= 16 ? true : false || solicEmprego === 'sim' ? true : false;

console.log('Realizar carteira de trabalho? ' , aprovCarteiraTrab === true ? 'Aprovado' : 'Nenhum requisito aceito');

console.log('--------------------------');
console.log('Operadores lógicos NOT (!)');
//é Uma negação
 let retirarCarteiradeTrab = !aprovCarteiraTrab === true ? 'Reprovado':'Aprovado';
console.log ('Realizar carteira de trabalho? ', retirarCarteiradeTrab);

