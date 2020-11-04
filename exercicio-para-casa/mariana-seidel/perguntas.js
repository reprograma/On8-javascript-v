/*
 1. O que é um Objeto? Por que ele é tão importante na linguagem JavaScript?
*/
/*
Um objeto é uma coleção de dados ou funcionalidades que possuem propriedades e métodos que podem ser acessados. Dentro do objeto temos chaves (propriedades) e valores associados, podendo estes valores serem uma função, que é considerada o método do objeto. O objeto é importante na linguagem JavaScript porque tudo dentro do JS é objeto!
*/

/*
  Crie um exemplo de um objeto
*/
const fruta = 
{
  nome: 'morango',
  cor: 'vermelho',
  quantidade: 6,
  doce: true
}


/*
 2. Qual é a diferença entre uma função e uma Arrow Function?
/*
A Arrow Function tem uma sintaxe mais curta do que a function, e uma das diferenças entre elas é que o Arrow Function não cria o seu próprio this, ou seja, ele mantém a referência do this como o elemento pai.
*/

/*
 Crie um exemplo de Arrow Function
*/
// const soma = (a,b) => {
//   return a+b
// }

const soma = (a,b) => a+b
console.log(soma(1,3))


/*
 3. Como funciona o destructuring?
*/
/*
É uma expressão do javaScript que desestrutura argumentos de funções e arrays.
*/
/*
 Crie um exemplo de destructuring de objeto e array
*/
// EXEMPLO COM OBJETO //
const pessoa = 
{
  nome: 'mari',
  idade: 25,
  aluna: true
}

const {nome, idade, aluna} = pessoa
console.log(nome, idade, aluna)

// EXEMPLO COM ARRAY //
const objetos = ['escova', 'toalha', 'meias', 'pasta de dente']

const [objeto1, objeto2, objeto3, objeto4] = objetos
console.log(`${objeto1}\n${objeto2}\n${objeto3}\n${objeto4}`)


/*
 4. Para que serve o Spread e Rest?
*/
/*
O REST tem a função de pegar os argumentos restantes de uma função e colocar dentro de um array.

O SPREAD tem a função de "espalhar" os valores.
*/

/*
  Crie um exemplo como utilizar Spred e Rest
*/
// EXEMPLO REST //
function listaCompras(Supermercado, ...item){
  console.log(Supermercado, item)
}

listaCompras('Hiper', 'Abacaxi', 'Pão', 'Pão de queijo', 'Batata')

// EXEMPLO SPRED //
const notasProva = [3, 5, 7.5, 8, 9.75]

const maiorNota = Math.max(...notasProva)
console.log(maiorNota)


/*
 5. Quais as vantagens de utilizar o código em modules em JavaScript ?
*/
/*
Os modules possibilitam que o código seja quebrado em diferentes partes pra facilitar sua organização e seu compartilhamento. Podem ajudar por exemplo no export/import de códigos de um arquivo .js para outro.
*/

/*
 Crie um exemplo utilizando module 
*/
// ---> ESTRUTURA DE ARQUIVOS <--- //
// index.html
// funcao1.js
// funcao2.js

        // ---> ESTRUTURA funcao1.js <--- //
        // export function taboada5(num){
        //   return num * 5
        // }

        // ---> ESTRUTURA funcao2.js <--- //
        // import {taboada5} from '.funcao1.js'
    

/*
 6. O que é o Fetch? Quando utilizamos ele?
*/
/*
O Fetch é um método utilizado pra iniciar requisições com operações assíncronas e pra transferir dados entre recursos da web.
*/

/*
 Crie um exemplo utilizando Fetch
*/
const nomeUsuario = 'marianaseidel'

fetch(`https://api.github.com/users/${nomeUsuario}`)

  .then(response => {
    return response.json()
  })
  .then(object => {
    console.log(`${object.name}\n${object.location}\n${object.bio}`)
  })
  .catch(erro =>{
    console.log(`Ops, deu o seguinte erro: ${erro}`)
  })


/*
 7. Qual a vantagem de utilizar Async/Await?
*/
/*
O Async/Await são utilizdos ao invés do then. O Async vai indicar que é um método assíncrono que vai ser executado e o Await vai esperar a promessa acontecer pra poder dar continuidade ao código.
*/
/*
 Utilizando o exemplo do Fetch, refatore utilizando o async await.
*/
const nomeUsuario2 = 'marianaseidel'

async function githubUsuario (url){
  const response = await fetch(url)
  const object = await response.json()
  return object
}

const usuario = githubUsuario (`https://api.github.com/users/${nomeUsuario2}`)

usuario.then(response =>{
  console.log(`${response.name}\n${response.location}\n${response.bio}`)
})


/*
 8. Quando devemos utilizar o Map, Filter e o Reduce?
*/
/*
O Filter tem a função de filtrar os valores e retornar uma array nova, ou seja, não modifica a array original. A função acontece para cada item do array e quando o return for true, os itens vão ser colocados na array, enquanto que quando for false, os itens não entrarão nela. 
O Map, assim como o filter, vai mapear o elemento e retorna uma nova array e tem no seu return o que vai ser incluído na array. 
O Reduce é o método de array que não retorna uma array, e sim um valor único.
*/
/*
 Crie um exemplo utilizando Map, Filter e o Reduce
*/
const lista = ['item: laranja', 'item: maçã', 'item: banana', 'item: laranja mimo']

const exemploFilter = lista.filter(function(fruta){
  return fruta.includes('laranja')
})

const exemploMap = lista.map(function map(item){
  return item.replace('item: ', '')
})

const listaNumeros = [2,4,8,12,90]
const exemploReduce = listaNumeros.reduce(function(acumulador, item){
  return acumulador + item
})

console.log(exemploFilter)
console.log(exemploMap)
console.log(exemploReduce)


/*
  9. Quando utilizamos as Expressões?
*/
/*
As expressões são normalmente utilizadas após o sinal de = (igual). O if não se configura como uma expressão, e sim como um bloco, no entanto o ternário se configura como expressão, assim como a Arrow Function.
*/
/*
  Crie um exemplo de uma Expressão utilizando o operador &&
*/

const blusa = 'vermelha'

const corBlusa = blusa === 'vermelha' && 'Sua blusa é vermelha'
console.log(corBlusa)


