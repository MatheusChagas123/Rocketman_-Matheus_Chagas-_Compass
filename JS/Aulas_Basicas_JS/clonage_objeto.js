const cachorro = {
    racaCachorro : 'PUG',
    tamnhoCachorro :'PEQUENO',
    medirBeleza : function (){
        console.log('Doguinho muito líndo!!! parabéns.')
    }
}

const novoObjeto = Object.assign(cachorro,{
    fisico : 'REDONDO '
});
console.log(novoObjeto);

const objeto2={... {pelo : 'CURTO'},... cachorro};
console.log(objeto2);