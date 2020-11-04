/*
 1. O que é um Objeto? Por que ele é tão importante na linguagem JavaScript?
 
*/

É um conjunto de dados relacionados, que tem diversas funções, que são chamadas de propriedades e métodos.

/*
  Crie um exemplo de um objeto
*/

const pessoa = {
  nome: "Adrielly",
  idade: 19,
  cidade: "Recife",
  bairor: "Madalena"
}




/*
 2. Qual é a diferença entre uma função e uma Arrow Function?

*/
Uma Arrow Function é uma forma mais compacta de escrever uma função. É uma forma mais reduzida de fazer a mesma coisa que uma função faria em mais linhas.

/*
 Crie um exemplo de Arrow Function
*/

const exemplo = () => {
  console.log("Eu sou uma arrow function")
}
exemplo()





/*
 3. Como funciona o destructuring?
*/

/*
 Crie um exemplo de destructuring de objeto e array
*/




/*
 4. Para que serve o Spread e Rest?
*/


/*
  Crie um exemplo como utilizar Spred e Rest
*/




/*
 5. Quais as vantagens de utilizar o código em modules em JavaScript ?
*/

/*
 Crie um exemplo utilizando module 
*/




/*
 6. O que é o Fetch? Quando utilizamos ele?
*/
O fetch é usado para fazer solicitações em API's, para poder acessar os seus dados, usando o protocolo HTTP ele faz requisições e obter respostas.

/*
 Crie um exemplo utilizando Fetch
*/

fetch('http://siteexemplo/exemplo.json')
  .then(response => response.json())
  .then(json => console.log(json));




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


