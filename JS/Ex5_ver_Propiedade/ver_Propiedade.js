// criar um método para ler propiedades de um objeteto 
//exibir  somente  as propiedades do tipo string que estão no objeto
const  filme =  {
    título:': Auto da compadecida',
    ano: 2005,
    diretor: ': chicó',
    personagem: ': joão grilo',
}

verProipedade (filme);
function verProipedade (obj){
    for (tipo in obj)
        if (typeof obj[tipo] === 'string')
            console.log (tipo,obj[tipo])
}