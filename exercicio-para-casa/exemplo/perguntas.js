/*
 1. O que é um Objeto? Por que ele é tão importante na linguagem JavaScript?
 Um objeto é uma entidade independente, com propriedades e tipos. Uma propriedade de um objeto pode ser explicada como uma variável que é ligada ao objeto. Propriedades de objetos são basicamente as mesmas que variáveis normais em JavaScript, exceto pelo fato de estarem ligadas a objetos. As propriedades de um objeto definem as características do objeto
*/

/*
  Crie um exemplo de um objeto
*/
const animeNaruto ={
personagem: "Kakashi",
profissao: "ninja da folha",
sensei: "Minato Uzumaki",
apelido: "ninja que copia",
lider:"lider do time 7"

}

/*
 2. Qual é a diferença entre uma função e uma Arrow Function?
Ao contrário de uma função, o arrow function tem a sintaxe menor e a inexistência da palavra chave 'this'.

 
*/

/*
 Crie um exemplo de Arrow Function
*/

const souArrow = () => {
  console.log("Sou um exemplo.")
}
souArrow()


/*
 3. Como funciona o destructuring?
 a expressão destructuring permite extrair dados de arrays ou objetos.
*/

/*
 Crie um exemplo de destructuring de objeto e array
*/
//array

const animes = ["Naruto", "Haiyakuu", "Inazuma Eleven"];

const [anime1, anime2, anime3] = animes;
console.log(anime1);

//objeto
const alunaReprograma = {
  nome: "julia",
  cor: "parda",
}

const {
 nome,
 cor
} = alunaReprograma; 
console.log(nome,cor);

/*
 4. Para que serve o Spread e Rest?
 Os operadores rest e spread permitem trabalhar com múltiplos parâmetro em funções. Sendo o Rest utilizado para permitir que uma função receba um número indefinido de parâmetros, enquanto o spread permite definir um número indefinido de parâmetros para uma função, Array ou objeto.
*/


/*
  Crie um exemplo como utilizar Spred e Rest
*/
//rest
function ceu(planeta,estrela){
return{
  planeta,
  estrela
}
}
console.log(ceu('saturno','centauro'))

//spread
const mult = (a,b) => a*b

const num = [30, 2]

console.log(mult(num))

/*
 5. Quais as vantagens de utilizar o código em modules em JavaScript ?
 algumas das principais vantagens são: manutenibilidade do código e  reusabilidade.
*/

/*
 Crie um exemplo utilizando module 
*/
import dogs from './exercicios-aula/fofura/index.js';

/*
 6. O que é o Fetch? Quando utilizamos ele?
 A API Fetch fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, tais como os pedidos e respostas. Ela também fornece o método global fetch() que fornece uma maneira fácil e lógica para buscar recursos de forma assíncrona através da rede.
*/

/*
 Crie um exemplo utilizando Fetch
*/

fetch(urlCats)
.then(function (response){
//console.log(urlCats);
return response.json()
})
.then(Object => {
//console.log(Object);
resultadoImg.src = `${Object.file}`

})

/*
 7. Qual a vantagem de utilizar Async/Await?
 A Asunc function usa a expressão Await pra pausar a exec. de uma função assíncrona e espera pela resolução da Promise passada, retomando depois a execução da mesma e retornando o valor resolvido. 
*/

/*
 Utilizando o exemplo do Fetch, refatore utilizando o async await.
*/

/*
 8. Quando devemos utilizar o Map, Filter e o Reduce?
 Esse conjunto de funções map, filter e reduce nos permite efetuar operações em listas, como transformação, filtragem e agregação de forma muito limpa e prática.

 MAP
 o map() executa uma função de transformação em todos os elementos de uma determinada lista , e retorna uma nova lista como resultado.

 FILTER
 O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

 REDUCE
 O método reduce()executa uma função reducer (provida por você) para cada membro do array, resultando num único valor de retorno.

*/

/*
 Crie um exemplo utilizando Map, Filter e o Reduce
 não deu tempo de fazer, porém vou estudar e fazer mesmo após o prazo.
*/

/*
  9. Quando utilizamos as Expressões?
  Usamos para selecionar combinações de caracteres em uma string.
*/

/*
  Crie um exemplo de uma Expressão utilizando o operador &&
*/

const chuva = "frio";
const tarde = chuva === "frio " && "netflix"; 

console.log(tarde); 
