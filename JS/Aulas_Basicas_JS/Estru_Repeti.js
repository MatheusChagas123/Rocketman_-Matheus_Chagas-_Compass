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
        let i = 5;
        console.log('Os números ímpares de ',i,' são:');
        while (i >= 1){
        if (i % 2 !==0){
            console.log (i)
                    }
            i--; 
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

       
        const frutas = ['maça','Banana','uva'];
        for(let indice in frutas){
            console.log(indice,frutas[indice])
        }

        console.log('--------------------------');   
     console.log('For of: ');
      for ( let fruta of frutas){
          console.log(fruta)
      }