/*
 1. O que é um Objeto? Por que ele é tão importante na linguagem JavaScript?
 
*/
//Um objeto é um elemento com coleções de dados e funcionalidades. Por exemplo, quando queremos listar propriedades de algo. O objeto seria a pessoa e os dados seriam os dados da pessoa, o nome, idade, profissão, cidade, do que a pessoa gosta, etc. 
/*
  Crie um exemplo de um objeto
*/

// const pessoa = {
//         nome: 'Fernanda', 
//         idade: '21 anos',
//         profissão: 'estudante',
//         cidade: 'Recife'
// }
// console.log(pessoa)


/*
 2. Qual é a diferença entre uma função e uma Arrow Function?

*/
//A diferença de uma função e uma arrow function é o this, que é a referência de qual elemento está sendo "mexido" na navegação, e quando é usada a function vai dar um problema pois ela cria um novo this e não referencia o this que queremos "mexer". No arrow function , o this vai referenciar diretamente ao elemento. Além disso, a forma de espressar também é diferente, o arrow function é uma forma de minimizar o código e também é expresso em forma de flecha (=>), o qual já diz a qual qle quer referenciar. 
/*
 Crie um exemplo de Arrow Function
*/
//hello = () => "Olá, tudo bem?";


/*
 3. Como funciona o destructuring?
*/
//O destructuring extrai um valor de um objeto ou de um array colocando essas propriedades em uma constante e chamando elas logo depois no console.
/*
 Crie um exemplo de destructuring de objeto e array
*/

// const pessoa = {
//           nome: 'Fernanda', 
//           idade: '21 anos',
//           profissão: 'estudante',
//           cidade: 'Recife'
//    }

// //usando o destructuring

// const {nome} = pessoa
// console.log(nome)

/*
 4. Para que serve o Spread e Rest?
*/
    //O rest ele pode agrupar n argumentos dentro de uma função, sendo que, do segundo parâmetro em diante, ele vai agrupar esses parâmetros em um argumento da função transformando eles em um array. 

    //O Spread ao contrário do rest, ele espalha os elementos de um array, objeto ou função. Também é permitido fazer clones de elementos com o spread.

/*
  Crie um exemplo como utilizar Spred e Rest
*/
//EXEMPLO DE REST
// function chamada (aulaDeRevisão, ...alunas) {
//   console.log(aulaDeRevisão);
//   console.log(alunas)
// }

// chamada('Aula de API', 'Lohany', 'Fernanda', 'Jéssica')

//EXEMPLO DE SPREAD

// const compras = ['banana', 'maçã', 'limão']
// const cores = [...compras, 'amarelo', 'vermelho', 'verde']
// console.log(cores)
/*
 5. Quais as vantagens de utilizar o código em modules em JavaScript ?
*/
//Os módulos servem para quebrarmos o código em diferentes arquivos para facilitar a organização e compartilhamento de código comum.
//IMPORTANTE: tem que passar no <script></> o tipo(type) = module, antes do src.
//IMPORTANTE: para exportar, tem que colocar 'export' na frente do código que você quer exportar.
/*
 Crie um exemplo utilizando module 
*/
// export const caderno = {
//   capaDura: true,
//   brochura: true,
//   paginas: 250,
// }
// console.log(caderno)

//NO OUTRO ARQUIVO JS, CHAMAR DA SEGUINTE FORMA:
//import variável from "arquivo-de-origem"
//import caderno from "./perguntas.js"

/*
 6. O que é o Fetch? Quando utilizamos ele?
*/
// fetch é um recurso onde podemos acessar outros recursos de dados de forma assíncrona através da rede. Utilizamos o fetch quando queremos uma API que contém os dados que queremos.

/*
 Crie um exemplo utilizando Fetch
*/

// const pedido = fetch("https://api.jikan.moe/v3/search/anime?q=naruto")
// .then(response => {
//   return response.json();
// })
// .then(json => {
//   console.log(json)
//   const id = json.results[0]
  
// })

// console.log(pedido)
/*
 7. Qual a vantagem de utilizar Async/Await?
*/
//É possível escrever o código assíncrono como se estivéssemos escrevendo um código síncrono.
/*
 Utilizando o exemplo do Fetch, refatore utilizando o async await.
*/

// async function fetchAnime(url) {
//   const response = await fetch(url);
//   const json = await response.jason();
//   return json;
// }

// fetchAnime("https://api.jikan.moe/v3/search/anime?q=naruto")


/*
 8. Quando devemos utilizar o Map, Filter e o Reduce?
*/
//UTILIZAMOS O MAP QUANDO QUEREMOS ACESSAR OU/E MAPEAR ALGUMA PROPRIEDADE DE UM ARRAY
//UTILIZAMOS O FILTER QUANDO QUEREMOS FILTRAR OS ELEMENTOS DE UM ARRAY
//UTILIZAMOS REDUCE QUANDO QUEREMOS JUNTAR, AGRUPAR OS VALORES DE UM ARRAY
/*
 Crie um exemplo utilizando Map, Filter e o Reduce
*/

// const carroDoAno = [
//   {
//     portas: "4",
//     cor: "roxo",
//     ano: "2020",
//     eletrico: "true"
//   }
// ]

// const propriedades = carroDoAno.map(function(itens){
//   return itens.carroDoAno
// })
// console.log(carroDoAno)

//EXEMPLO FILTER

// function numeros(number){
//   return number >=10;
// }

// const filtrar = [20, 2, 15, 25, 98, 7, 14, 6].filter(numeros);
// console.log(filtrar)

//EXEMPLO COM REDUCE

// const array = [20, 2, 15, 25, 98, 7, 14, 6];
// const reduzir = (acumulador, valorCorrente) => acumulador + valorCorrente;
// console.log(array.reduce(reduzir));


/*
  9. Quando utilizamos as Expressões?
*/
//Quando temos qualquer coisa após um "=", são chamadas de expressões.
/*
  Crie um exemplo de uma Expressão utilizando o operador &&
*/


// const adulto1 = 25;
// const adulto2 = 16;

// const balada = adulto1 > 18 && "Pode entrar na balada" 
//  console.log(balada)