/*Você precisa solicitar um nome de uma pessoa que está tentando entrar na festa;

colocar um botão na tela que para acessar o código javascript e verificar se o nome digitdo está na lista convidados da pessoa que lhe convidou (ex: nome da pessoa jão, quem convidou para a festa? Cristian. Clico no botão, o javascript pega as informações que eu preenchio na tela e verifica no meu código javascript se aquela pessoa está dentro da lista de convidados do cristian, o meu nome está lá.)
se meu nome esteja, eu vou alterar a de "pesquisando" para "você pode entrar!"

se meu nome não esteja, eu vou alterar a descrição de "Pesquisando" para "você não pode entrar!"*/


function VerificarConvite(){
    NomeConvidado = document.getElementById('convidado').value;
    ListaConvite = ['josé','joão','pedro','Gigi','matheus']
    if (ListaConvite.inclubes(NomeConvidado)){
        document.getElementById('PermissaoDeEntrada').innerText= 'Entrada permitidaa Divita-se'
    }  else {
        document.getElementById('PermissaoDeEntrada').innerText= 'Sinto muito, você não foi convidado.' 
    }
}