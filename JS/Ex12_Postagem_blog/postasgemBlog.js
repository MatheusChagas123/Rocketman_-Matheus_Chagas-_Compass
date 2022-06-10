/* criar objeto de postagem de blog ele tem que seguir a seguinte formatação:
objeto postagem:
título
mensagem
autor
vizualizações
conmentários
(autor , missagem)
estaovivo*/

let postagem = {
    titulo: 'A verdade por Trás do esgágio Rocketman',
    mensagem: 'Estou escrevendo um livro',
    vizualizações: 500,
    comentarios : [ {autor: 'obrigado', mensagem : 'Incrível'},
                {autor: 'Espero que goste',mensagem:'Estou ansioso'},
                {autor:'só lendo o livro para saber',mensagem:'O que será que tem? '}

    ],

    estaAovivo : false

 
}

console.log(postagem);