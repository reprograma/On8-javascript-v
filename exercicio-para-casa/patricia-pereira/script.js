/*
 1. O que é um Objeto? Por que ele é tão importante na linguagem JavaScript?
Um objeto é uma coleção de dados e/ou funcionalidades relacionadas (que geralmente
consistem em diversas variáveis e funções — que são chamadas de propriedades e 
métodos quando estão dentro de objetos). 
*/

/*
  Crie um exemplo de um objeto
*/
// const chocolate = {
//   nome: 'Crunsh',
//   tipo: 'barra de chocolate',
//   preco: 4.50,
// }
//console.log(chocolate)


/*
 2. Qual é a diferença entre uma função e uma Arrow Function?
Uma função é um procedimento, uma arrow function possui uma 
sintaxe mais curta quando comparada a uma função.
Arrow function além de ser uma função mais curta usa o símbolo =>
*/

/*
 Crie um exemplo de Arrow Function
*/

// const calcularImc = (peso, altura) => {
//   const imc = peso / (altura * altura)
//console.log(imc)
// }
// calcularImc(70,1.80)


/*
 3. Como funciona o destructuring?
É uma expressão que possibilita extrair dados de arrays
ou objetos em variáveis distintas
*/

/*
 Crie um exemplo de destructuring de objeto e array
*/
// const carros = ["Gol", "Onix", "Palio", "Fiesta", "Uno"];
// const [car1, car2] = carros;
// console.log(car1, car2)

/*
 4. Para que serve o Spread e Rest?
Spred: serve para quando tem que colocar uma lista de argumentos 
e ao invés de colocar tudo pode usar "..." em qualquer lugar no 
literal do array e pode ser usado várias vezes.

//Rest: pode representar um número indefinido de argumentos como um array.
Rest: 
*/

/*
  Crie um exemplo como utilizar Spred e Rest
*/
//Spred:
// function vendasMercado(produtos, ...tipos) {
  // console.log(produtos);
  // console.log(tipos);
//}

// vendasMercado("Limpeza", "Sabão em pó", "Detergente", "Amaciante");

//Rest:
// const livro = { isbn: 8540502321, nome: "Os Miseráveis", paginas: 1927, idioma: "Português" };

// const cloneLivro2 = { ...livro };

// const cloneLivro = { ...livro, Editora: "Cosac & Naify" }

// 5. Quais as vantagens de utilizar o código em modules em JavaScript ?
/* Ajuda a quebrar o código em vários arquivos e assim facilita a organização e 
compartilhamento de código comum

/*
 Crie um exemplo utilizando module 
*/

import {mensagemBoasVindas, mensagemApresentacao, mensagemAgradecimento} from "./mensagem.js";
//console.log(mensagemBoasVindas("Patricia"))
//console.log(mensagemApresentacao("Henrique", 31, "São Paulo"))
//console.log(mensagemAgradecimento("Zélia", "celular"))
/*
 6. O que é o Fetch? Quando utilizamos ele?
 Envia requisições assíncronas para o servidor. 
 Serve para acessar e/ou escrever dados em APIs externas
*/
/*
 Crie um exemplo utilizando Fetch
*/
//API:https://api.kanye.rest/

// const requisicao = fetch("https://api.kanye.rest/").then(response => {
//   return response.json();
// }).then(json => {
//   console.log(json)
// })

//const requisicao = fetch("https://api.kanye.rest/")
/*
 7. Qual a vantagem de utilizar Async/Await?
Espera uma chamada ser feita para executar a próxima linha
*/

/*
 Utilizando o exemplo do Fetch, refatore utilizando o async await.
*/
async function fatchFrases(url) {
  const response = await fetch (url);
  //console.log(response)
  const json = await response.json();
  
  return json;
}

const requisicao = fatchFrases("https://api.kanye.rest/");

requisicao.then(response => console.log(response))


/*
 8. Quando devemos utilizar o Map, Filter e o Reduce?
 Map: O método map() invoca a função callback passada 
 por argumento para cada elemento do Array e devolve 
 um novo Array como resultado.

 Filter: O método filter() cria um novo array com todos 
 os elementos que passaram no teste implementado pela 
 função fornecida.

 Reduce: O método reduce recebe uma função callback com alguns 
 parâmetros e essa função é executada a cada elemento presente 
 no array. 
 O resultado é a redução do array a um valor só. Normalmente, utilizamos
 os dois primeiros parâmetros: acumulador e itemAtual.
*/

/*
 Crie um exemplo utilizando Map, Filter e o Reduce
*/
//Filter
const funcionarios = [
  "Professor",
  "Balconista",
  "Cargo",
  "Formação",
  "Salário",
  "João",
  "R$ 2.000,00",
  "R$ 3.500,00",
  "Admissão",
  "CPF",

];

const funcionariosFiltro = funcionarios.filter(funcionarios => funcionarios.includes("R$"));

//Map

const salarioNumero = funcionariosFiltro.map(funcionarios => funcionarios.replace("R$ ", ""));

console.log(salarioNumero)
//console.log(funcionariosFiltro)

/*
  9. Quando utilizamos as Expressões?
*/

/*
  Crie um exemplo de uma Expressão utilizando o operador &&
*/


