
/* 1. O que é um Objeto? Por que ele é tão importante na linguagem JavaScript?*/
 R: Objetos em JavaScript é uma coleção de dados.
 Sua importancia é que através de variáveis, armazenam valores referenciados por nome, que são utilizados em diversas outras partes de um programa, através de funções e seus métodos.

//Crie um exemplo de um objeto

const album = {
  titulo: "Aprendendo a programar",
  ano: 2020,
  showInfo: function() {
    alert("Título do álbum: " + this.titulo + "Lançado em: " + this.ano);
  }
};



//===========================================================================================================
/* 2. Qual é a diferença entre uma função e uma Arrow Function?*/

R: Uma função é um procedimento, e uma Arrow Function é um procedimento de uma sintaxe mais curta, e sabemos que é uma função pelo símbolo =>.

//Crie um exemplo de Arrow Function

const dobro = (num) => {
  return num * 2
}



//==========================================================================================================
/* 3. Como funciona o destructuring?*/
R: Funciona como uma desestruturação, que possibilita extrair dados de arrays ou objetos em variáveis distintas.

//Crie um exemplo de destructuring de objeto e array
*/Para acessar os três valores de um array:

const array = ['Um', 'Dois', 'Três'];

let primeiro = array[0];
let segundo  = array[1];
let terceiro = array[2];

Reescrevendo o mesmo código, utilizando o destructuring:

const array = ['Um', 'Dois', 'Três'];

let [primeiro, segundo, terceiro] = array;



//========================================================================================================
/* 4. Para que serve o Spread e Rest?*/
R: A sintaxe de espalhamento (Spread) 'expande' um array em vários elementos,é representado por três pontos.
Enquanto a sintaxe Rest, coleta multiplos elementos e 'condensa' eles em um único elemento.


//Crie um exemplo como utilizar Spred e Rest

Spread:
const pessoas = ['Samanta', 'Leandro', 'Arhiane']
const todasAsPessoas = [ ...pessoas, 'Thabata', 'Thalita']
 
console.log(todasAsPessoas)
  // [ 'Samanta', 'Leandro', 'Arhiane', 'Thabata', 'Thalita' ]

Rest:
function listagem (primeiro, segundo, ...outros) {
  console.log(`Na lista estão: $, $. Os demais são: ${outros.join(', ')}.`)
}

listagem('Samanta', 'Leandro', 'Arhiane', 'Thabata', 'Thalita')
//Na lista estão: Samanta, Leandro. Os demais são: Arhiane, Thabata, Thalita.



//=========================================================================================================
/* 5. Quais as vantagens de utilizar o código em modules em JavaScript ?*/
R: Os módulos permitem que blocos de código como funções, classes e constantes em arquivos separados possam ser importados quando necessário, facilitando o processo de manutenção e reusabilidade de um projeto JavaScript.


//Crie um exemplo utilizando module 

Por exemplo, se tivermos um arquivo sayHi.js exportando uma função:
// 📁 sayHi.js
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}

Em seguida, outro arquivo pode importar e usá-lo:

// 📁 main.js
import {sayHi} from './sayHi.js';

alert(sayHi); // function...
sayHi('John'); // Hello, John!

Ao executar o exemplo no navegador,como os módulos suportam palavras-chave e recursos especiais, devemos informar ao navegador que um script deve ser tratado como um módulo, usando o atributo <script type="module">.

O resultado no index.html será:

Resultadosay.js 
<!doctype html>
<script type="module">
  import {sayHi} from './say.js';

  document.body.innerHTML = sayHi('John');
</script>



//==========================================================================================================
/* 6. O que é o Fetch? Quando utilizamos ele?*/
R: Fetch envia requisições assíncronas para o servidor. Utilizamos o Fetch para acessarmos ou escrevermos dados em apis externas.


//Crie um exemplo utilizando Fetch
function getDados (url) {
  fetch(url)
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(erro => console.log(erro));
}
getDados(url);
}



//==========================================================================================================
/*7. Qual a vantagem de utilizar Async/Await?*/

R: Com async e await podemos trabalhar com código assíncrono, em um estilo mais parecido com o bom e velho código síncrono.
Usar essas funções assíncronas com Promises nos poupam do “Callback Hell”, mas mesmo assim, precisamos passar uma função de Callback para cada then().



//Utilizando o exemplo do Fetch, refatore utilizando o async await.

// podemos colocar try { } catch(e) { },// para lidarmos com erros
async function fetchProdutos(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

fetchProdutos("https://ranekapi.origamid.dev/wp-json/api/produto");



//============================================================================================================
/* 8. Quando devemos utilizar o Map, Filter e o Reduce?*/
R: Ultilizamos as funções Map, Filter e Reduce para efetuar operações em listas, como transformação, filtragem e agregação de forma muito limpa e prática.



//Crie um exemplo utilizando Map, Filter e o Reduce

Exemplo Map:
const numeros = [9, 2, 5]
function dobrar(item) {
  return item * 2
}
const numerosDobrados = numeros.map(dobrar)
//console.log(numerosDobrados) // [18, 4, 10]

Exemplo Filter:
const numeros = [9, 2, 5]
function impar(item) {
  return item % 2 !== 0
}
//const numerosImpares = numeros.filter(impar)

Exemplo Reduce:
const numeros = [9, 2, 5]
function somarTodos(acumulador, itemAtual) {
  return acumulador + itemAtual
}
const numerosSomados = numeros.reduce(somarTodos)
//console.log(numerosSomados) // 16



//============================================================================================================
/*9. Quando utilizamos as Expressões?*/
R: Utilizamos as Expressões, para facilitar a manipulação de strings, através de padrões que podem ser utilizados para validação e busca de dados.

//Crie um exemplo de uma Expressão utilizando o operador && 

Com o operador && vamos comparar as duas expressões abaixo, como exemplo:

1 == 1 && 2 == 2 => só será true se as duas condições forem verdadeiras.

