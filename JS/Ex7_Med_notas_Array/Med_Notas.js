// Exercício de média de notas escolares:
// obter notas utilizando um array

//0-59 : F
// 60 - 69 : D
// 70 - 79 : C
// 80 - 89 : B
// 90 - 100 : A

const array = [70,70,80,90,100]
console.log (mediaDoAluno (array));


    function mediaDoAluno(notas) {
        const  media = CalcMedDoAluno (notas);
        if (media < 59) return ' A nota do aluno foi : F';
        if (media < 69) return ' A nota do aluno foi : D';
        if (media < 79) return ' A nota do aluno foi : C';
        if (media < 89) return ' A nota do aluno foi : B';
         return ' A nota do aluno foi : A';
    
    }

    function CalcMedDoAluno (array){
        let someMed = 0; tam = array.length;
        for (let valor of array) {
            
           someMed += valor;
        }
            return someMed /tam;
        
}