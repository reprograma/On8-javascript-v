/*
 1. O que é um Objeto? Por que ele é tão importante na linguagem JavaScript?
 
*/
// Um objeto é uma coleção de propriedades, e uma propriedade é uma associação entre um nome (ou chave) e um valor. Um valor de propriedade pode ser uma função, que é então considerada um método do objeto. É importante pois se destina a promover uma maior flexibilidade e facilidade de manutenção na aplicação.
/*
  Crie um exemplo de um objeto
*/
const meuChocolate = new Object()
/*
 2. Qual é a diferença entre uma função e uma Arrow Function?

*/
// Funções são um conjunto de instruções que executa uma tarefa ou calcula um valor, ou seja, uma função é um bloco de código projetado para executar uma tarefa específica.
// Arrow Function são  atalhos e sintaxes menos verbosas. Um dos motivos da criação das funções de flecha é facilitar a criação e utilização de funções em JavaScript, ou seja, elas permitem a criação de funções de maneira resumida.

/*
 Crie um exemplo de Arrow Function
*/
const numeroAleatorio = () => {
  return Math.random()
}
/*
 3. Como funciona o destructuring?
// */
// Destructuring é basicamente quebrar uma estrutura complexa em partes mais simples. Por estrutura complexa, na maioria das vezes podemos considerar como sendo um array ou um objeto. 
/*
 Crie um exemplo de destructuring de objeto e array
*/
const array = ['Um', 'Dois', 'Três']
let [primeiro, segundo, terceiro] = array
/*
 4. Para que serve o Spread e Rest?
*/
// Spread funciona assim: transforma um array em diversos parâmetros para uma função
// Ou seja, podemos invocar uma função que espera vários parâmetros utilizando o Spread.
// Rest Permite representar um número indefinido de argumentos na forma de um Array.

/*
  Crie um exemplo como utilizar Spred e Rest
*/
// Spread
function somarElementos(a, b, c) {
  console.log(a + b + c);
}
let elementos = [1, 5, 14]
somarElementos(...elementos)
let itensDaLista = ['trigo', 'batata'];
let listaDeCompras = ['banana', ...itensDaLista, 'arroz', 'maçã', 'chocolate']
console.log(listaDeCompras)

// Rest
function soma_simples(a, b) {
  return a + b;
}
function soma_rest(...numeros) {
  return numeros[0] + numeros[1]
}

/*
 5. Quais as vantagens de utilizar o código em modules em JavaScript ?
*/
// Os módulos permitem que blocos de código como funções, classes e constantes em arquivos separados possam ser importados quando necessário, facilitando o processo de manutenção e reusabilidade de um projeto JavaScript.
/*
 Crie um exemplo utilizando module 
*/
import { soma } from './util.mjs'
console.log(soma(10, 20, 30))
/*
 6. O que é o Fetch? Quando utilizamos ele?
*/
// Um método usado para iniciar requisições e para transferências de dados entre recursos web. O fetch() retorna uma Promise.
/*
 Crie um exemplo utilizando Fetch
*/
function getDados(url) {
  fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(erro => console.log(erro))
}
getDados(url)

/*
 7. Qual a vantagem de utilizar Async/Await?
*/
// Com async e await podemos trabalhar com código assíncrono em um estilo mais parecido com o bom e velho código síncrono.
/*
 Utilizando o exemplo do Fetch, refatore utilizando o async await.
*/
async function getDados(url) {
  const response = await fetch(url)
  const json = await response.json()
  return json
}
getDados(url)
  .then(res => console.log(res))
  .catch(err => console.error(err))

/*
 8. Quando devemos utilizar o Map, Filter e o Reduce?
*/
// Use map() quando: é preciso traduzir/mapear todos os elementos em um array para outro conjunto de valores.
// Use filter() quando: é preciso remover elementos indesejados com base em alguma(s) condição(ões).
// Use reduce() quando: é preciso encontrar um valor cumulativo ou concatenado com base em elementos de todo o array. 

/*
 Crie um exemplo utilizando Map, Filter e o Reduce
*/
// MAP
const celcius = fahrenheit.map(function (elem) {
  return Math.round((elem - 32) * 5 / 9);
});
// FILTER
const uniqueArray = array.filter(function (elem, index, array) {
  return array.indexOf(elem) === index;
});
// REDUCE
const soma = notas.reduce(function (soma, nota) {
  return soma += nota;
}, 0);
/*
  9. Quando utilizamos as Expressões?
*
// Utilizados para selecionar combinações de caracteres em uma string. Em JavaScript, expressões regulares também são objetos. 
/*
  Crie um exemplo de uma Expressão utilizando o operador &&
*/

if (condicao1 && condicao2) {
  codigo;
}

