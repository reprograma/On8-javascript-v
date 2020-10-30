/*
 1. O que é um Objeto? Por que ele é tão importante na linguagem JavaScript?
*/

// O objeto é uma coleção de propriedades. Nas propriedades são definidas suas caracteristicas por nomes e valores,estes separados por dois pontos e armazenada em uma variável.
//A  importancia de objeto na linguagem JavaScript é que o JS tem sua base orientada a objeto.

/*
  Crie um exemplo de um objeto
*/
/*
console.log('-------exemplo de um objeto--------')

const pessoa=
  {
    nome:'Maria',
    idade: '10',
    cidade:'Recife'
  }
  console.log(pessoa)
*/

/*
 2. Qual é a diferença entre uma função e uma Arrow Function?
*/

// A diferençã é que a arrow function é bem mais enxuta de se escrever  que a function, fica bem mais limpo o código.
//E também a arrow function não cria o seu próprio this como a function cria.(o this faz referencia ao objeto geral da função) 

/*
 Crie um exemplo de Arrow Function
*/
/*
console.log('-------exemplo de Arrow Function--------')

const a=2
const b=5
const exemplo= (n1,n2)=> n1+n2
console.log('Soma dos números: ', exemplo(a,b))
*/

/*
 3. Como funciona o destructuring?
*/

//É usado em JavaScript para pegar dados de arrays ou objetos em variáveis diferentes. Deixando o código de uma forma mais compactado.
/*
 Crie um exemplo de destructuring de objeto e array
*/
/*
console.log('-------exemplo de destructuring de objeto e array--------')

function handleMouseMove({clientX,clientY}){
  console.log(clientX,clientY)
}
document.documentElement.addEventListener('mousemove', handleMouseMove);


const nome=['Maria', 'José']
const [nome1,nome2]=nome;
console.log('Exemplo de array; ', nome1, nome2)

*/

/*
 4. Para que serve o Spread e Rest?
*/

//Spread-Tem a função de quebrar os itens e repassar para algum lugar , permitindo que um objeto iterável, como um array ou string, seja expandida.
//O Rest- Retorna um array, é usado quando se tem um número indefinido de parametros na função.Ex: uma função que recebe n numeros , nesse caso se voce nao quer declarar todos os parametros porque voce não sabe quantos parametros pode receber , usa o parametro rest.Também é usado para clonar objetos.

/*
  Crie um exemplo como utilizar Spred e Rest
*/
/*
console.log('-------exemplo como utilizar Spred e Rest--------')

const str='digital'
function argumentos(){
  console.log('opa')
}
console.log(argumentos(...str))


function musica(partes1,...partes2){
  console.log( partes1);
  console.log(partes2)
}
console.log(musica('cabeça:','ombro', 'joelho','e', 'pé'))
*/

/*
 5. Quais as vantagens de utilizar o código em modules em JavaScript ?
*/
//  Facilitar a organização e compartilhamneto de código comum. Fazer a reutilização destes, deixar o processamento mais eficiente.
/*
 Crie um exemplo utilizando module 
*/
/*
console.log('-------exemplo utilizando module--------')
import multipicar from "./module.js";

console.log(multipicar(5))
*/
/*
 6. O que é o Fetch? Quando utilizamos ele?
*/
//O fetch é um método usado para fazer uma requisição, através dele podemos acessando e manipulando dados. Essa manipulação pode ser interna de algum arquivo que temos ou externa, pela web. Depois de ser solicitade ela retorna uma promise que é uma resposta do que foi requisitado a ele por nos.
/*
 Crie um exemplo utilizando Fetch
*/
/*
console.log('-------exemplo utilizando Fetch (clicar no botão imagem)--------')

 const btn=document.getElementById('btn');
 const imagem=document.getElementById('img');

 btn.addEventListener('click',(event)=>{
   event.preventDefault();
  
  fetch('./img/img_reprograma.jpg')
  .then(response=> response.blob())

  .then(objeto=>{
    const url=URL.createObjectURL(objeto)  
    imagem.src=url
  })
 })
 */

/*
 7. Qual a vantagem de utilizar Async/Await?
*/

//async- é uma forma de criar promises de maneira mais simples e lida com outras promises dentro de promise de maneira bem simples e enxuta

//Await- espera que outras promises sejam resolvidas. e pode ser usada apenas dentro de uma função criada utilizando a palavra Async e para guardar uma resolução de uma promise.

/*
 Utilizando o exemplo do Fetch, refatore utilizando o async await.
*/


/*
 8. Quando devemos utilizar o Map, Filter e o Reduce?
*/

//O map usamos para modificar cada elemento de um array e devolve um novo array
// O filter serve para fazermos uma seleçao, filtrar elementos de um array. Uma função é passada para que isso ocorrar  retornando um novo array.
// O reduce recebe uma função que tem dois parametros, um é o acumulador e outro é o número atual. O atual vai sendo passado para o acumulador  até que no final todos os valores do array sejam apenas um único valor.

/*
 Crie um exemplo utilizando Map, Filter e o Reduce
*/
/*
console.log('-------exemplo utilizando Map, Filter e o Reduce--------')

const numero=[8,4,5,7,1,0]

const metodoFilter=numero.filter(item=>item%2==0)
console.log('Resultado do filter:',metodoFilter)

const metodoMap=numero.map(item=> item *2)
console.log('Resultado do map:',metodoMap)

const metodoReduce=numero.reduce(item=>item+=item)
console.log('Resultado do reduce:',metodoReduce)
*/

/*
  9. Quando utilizamos as Expressões?
*/

//São utilizados para selecionar combinações de caracteres em uma string. Existe dois tipos de construir uma expressão: Uma é usando a expressão literal a outra é usando o construtor.

/*
  Crie um exemplo de uma Expressão utilizando o operador &&
*/
//console.log('-------exemplo de uma Expressão utilizando o operador &&--------')
/*
const notaAluno= 9
const media=7

const resultado=notaAluno>media && 'Aprovado';
console.log(resultado);
*/


