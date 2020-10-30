/*
 1. O que é um Objeto? Por que ele é tão importante na linguagem JavaScript?
 
 
objeto ele básicamente junta as funçãos em um só lugar, que você pode acessar pela propriedade
daquele objeto,

  Crie um exemplo de um objeto
*/

// let nome = 'lohany';
// let sobrenome = 'formiga'
// let pessoa = {
//    nome: 'lohany'
// };
// console.log(pessoa);
// nome.ativar();

 


/*
 2. Qual é a diferença entre uma função e uma Arrow Function?

Arrow Function Permite ter um retorno implícito, que são valores retornados sem ter que usar a palavar return.
Função conjunto de instruções que executa uma tarefa ou calcula um valor. 


 Crie um exemplo de Arrow Function
*/

// const marcas = [
//    {id:1, lacoste:'a'},
//    {id:2, tommy: 'b'}
// ];

// console.log(marcas.find((marca) => marca.lacoste === 'a'));

/*
 3. Como funciona o destructuring? 
*/

//Destructuring é basicamente quebrar uma estrutura em diversas partes menores, declarando variáveis com o mesmo nome das propriedades e re-atribuir o valor de variáveis já declaradas,


/*
 Crie um exemplo de destructuring de objeto e array
*/

// objeto

// const user = {
//   id: 26,
//   is_verified: true
// };

// const {idade} = user;

// console.log(id); // 26
// console.log(is_verified); // true 

// // Arrays

//  // const foo = ['um', 'dois', 'tres];

// const [vermelho, amarelo, verde] = foo;
// console.log(vermelho); // "um"
// console.log(amarelo); // "dois"
// console.log(verde); // "tres"



/*
 4. Para que serve o Spread e Rest? // Os operadores rest e spread permitem trabalhar com múltiplos parâmetro em funções.
*/ 
 
// { REST } Utilizado para permitir que uma função receba um número indefinido de parâmetros 

// { SPREAD } Permite definir um número indefinido de parâmetros para uma função, Array ou objeto.

/*
  Crie um exemplo como utilizar Spred e Rest
*/

 // ------  Exemplo de Rest --- //

  //  function marcasList(empresa, ...clientes) {
  //    console.log(empresa);
  //    console.log(clientes);
  //  }
 
  //  marcasList("tommy","Maria", "Pedro",);

 // ---- Exemplo de Spred ---- // 

//  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 21, 22];

//  console.log(Math.max(...numeros));



/*
 5. Quais as vantagens de utilizar o código em modules em JavaScript ?
*/

   // Vantagem é que pode ser quebrado os códigos em diferentes arquivos,para facilitar a organização e compartilhamento de código comum.
  
/*
 Crie um exemplo utilizando module REEVER 
*/

//  function Calculadora(){

//   return 23 + 43;

//   console.log(Calculadora(3));


/*
 6. O que é o Fetch? Quando utilizamos ele?
*/

// promessa de que algo será retornado, essa promessa é chamada de Promisse

// permite que você faça solicitações de rede semelhantes a XMLHttpRequest (XHR). 



/*
 Crie um exemplo utilizando Fetch
*/

// const inputDoCep = document.querySelector("#cep");
// const valorDoCep = inputDoCep.value;
// const url = `https://viacep.com.br/ws/${valorDoCep}/json/`;

// fetch(url).then(response =>{
// return response.json();
//     })
// .then(data =>{
//       atribuirCampos(data);
// })


/*
 7. Qual a vantagem de utilizar Async/Await?
*/

//É como se estivéssemos programando de forma síncrona. Executando o código, ainda temos o mesmo resultado.

/*
 Utilizando o exemplo do Fetch, refatore utilizando o async await.
*/

    // async function fetcgithub(url) {
    //   const response = await fetch(url);
    //   const jsonBody = await response.json();
    //   console.log(jsonBody);
    // } 

    // fetcgithub("https://github.com/lohanyformiga");

/*
 8. Quando devemos utilizar o Map, Filter e o Reduce?
*/
  //  conjuntos de funçãos em operação de lista..

/*
 Crie um exemplo utilizando Map, Filter e o Reduce
*/

  // const lista = {
  //   "Maça",
  //   "Uva"
  //   "Banana"
  //   "Melancia"

  // };

  // const listaFiltro = lista.filter(function(lista) {
  //    console.log(lista);
  //    if(lista === "compra") {
  //       return true;
  //    } else {
  //       return false;
  //    }
  // });

  // console.log(listaFiltro);

/*
  9. Quando utilizamos as Expressões?
*/

//padrões utilizados para selecionar combinações de caracteres em uma string

/*
  Crie um exemplo de uma Expressão utilizando o operador &&
*/

// var string = "Casa com a palavra exemplo",
//     pattern = /exemplo/,
//     resultado;

// resultado = pattern.test(string);
// console.log(resultado); // true


