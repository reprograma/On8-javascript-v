/*
 1. O que é um Objeto? Por que ele é tão importante na linguagem JavaScript?
 
*/

//Um objeto é como uma coleção de variáveis que podem ser utilizadas em várias partes do código.

/*
Crie um exemplo de um objeto
*/

const cards = {
  name: 'product1',
  value: 5,
  imagem: 'url',
  descricao: 'Esse é o produto 1'
}

const div = document.getElementById('card');
const productName = document.createElement('p');
div.appendChild(productName);
product.textContent = cards.name;

const productValue = document.createElement('p');
div.appendChild(productValue);
productValue.textContent = card.value


/*
 2. Qual é a diferença entre uma função e uma Arrow Function?

*/

// A principal diferença é que uma é uma versão resumida da outra, nesse caso, a Arrow Function reduz o código de uma Function comum. 

/*
 Crie um exemplo de Arrow Function
*/

const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`

/*
 3. Como funciona o destructuring?
*/

//É uma expressão que permite retirar valores de uma array ou propriedade de objetos e criar variáveis diferentes.

/*
 Crie um exemplo de destructuring de objeto e array
*/

const array = ['Um', 'Dois', 'Três'];

let [primeiro, segundo, terceiro] = array;

let a = 4;
let b = 7;
[a, b] = [b, a]
console.log(a); // 7
console.log(b); // 4

/*
 4. Para que serve o Spread e Rest?
*/

//São operadores que permitem trabalhar com vários parâmetros numa função. O Spread permite definir um número indefinido de parâmetros para uma Function, Array ou Objeto. O Rest permite que a Function receba uma quantidade indefinida de parâmetros.  

/*
  Crie um exemplo como utilizar Spred e Rest
*/

//SPREAD 
const itens = [ Arroz, Feijão, Carne ]

const outrosItens = [ ...itens, Farinha, Couve, Tomate ]
console.log(outrosItens) // [ Arroz, Feijão, Carne, Farinha, Couve, Tomate ]

//REST
function listaConvidados (primeiro, segundo, terceiro, ...outros) {
  console.log(`Na lista estão: $, $ e $. Os demais são: ${outros.join(', ')}.`)
}

listaConvidados('Pedro', 'Maria', 'João', 'Marcus', 'Tiago')
// Na lista estão: Alice, Isabela e Karinne. Os demais são: Stefany, Sandra.

/*
 5. Quais as vantagens de utilizar o código em modules em JavaScript ?
*/

/*
 Crie um exemplo utilizando module 
*/




/*
 6. O que é o Fetch? Quando utilizamos ele?
*/

// O Fetch realiza requisições de interface do HTTP.

/*
 Crie um exemplo utilizando Fetch
*/

fetch("https://pokeapi.co/api/v1/pokemon?limit=20&offset=1")
    .then(response => response.json())

/*
 7. Qual a vantagem de utilizar Async/Await?
*/

/*
 Utilizando o exemplo do Fetch, refatore utilizando o async await.
*/




/*
 8. Quando devemos utilizar o Map, Filter e o Reduce?
*/

/*
 Crie um exemplo utilizando Map, Filter e o Reduce
*/




/*
  9. Quando utilizamos as Expressões?
*/

/*
  Crie um exemplo de uma Expressão utilizando o operador &&
*/


