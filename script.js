//capturando os elementos da pagina html
const form = document.querySelector('#formLista')
const input = document.querySelector('#produto')

//document.querySelector = selecionar um elemento html
const contador = document.querySelector('#contador')
const mensagemErro = document.querySelector('#mensagemErro')
const lista = document.querySelector('#lista')

form.addEventListener('submit', function(event){
    event.preventDefault();// impede o carregamento da pagina 
    //só vai carregar a pagina depois que o campo for preechido
    const valorInput = input.value //pegando o vlor do input
    //validando se o campo foi preechido 
    if (valorInput.trim() === ''){
        //trim() retira os espaços extras do que foi digitado
        mensagemErro.innerText= "Digite um produto"
     return;// acaba a funcao aqui
    }
    mensagemErro.innerText= '';//volta a definir a mensagem como vazia(pra nao aprecer os pontinhos em branco)
    //criando novo item para adicionar na lista de compras 
    const novoItem = document.createElement('li')
    //adicionar o valor digitado no campo dentro da nossa lista
    novoItem.innerText = valorInput
//adicionar esse novo item no html(novo item na lista)
lista.appendChild(novoItem)
//atualizar o contador
totalItens++
//mudar o texto do paragrafo
contador.innerText= `total: ${totalItens} itens.` //template string
//valor da string dentro do `` vai mudar de acordo com o codigo 
//podemos colocar texto e variavel junto
//resetar o input
input.value= ''
}
);