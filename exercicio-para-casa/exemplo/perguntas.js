/*
 1. O que é um Objeto? Por que ele é tão importante na linguagem JavaScript?
 

Um objeto é uma coleção de propriedades, e uma propriedade é uma associação entre um nome (ou chave) e um valor. Um valor de propriedade pode ser uma função, que é então considerada um método do objeto. Além dos objetos que são pré-definidos no browser, você pode definir seus próprios objetos.
 Em JavaScript, um objeto é uma entidade independente, com propriedades e tipos. Compare-o com uma xícara, por exemplo. Uma xícara é um objeto, com propriedades. Uma xícara tem uma cor, uma forma, peso, um material de composição, etc. Da mesma forma, objetos em JavaScript podem ter propriedades, que definem suas características.
 Quase tudo é objeto, logo usa importância é demarcada por característica relevante a esse saber.
 Um objeto é uma coleção de dados e/ou funcionalidades relacionadas (que geralmente consistem em diversas variáveis e funções — que são chamadas de propriedades e métodos quando estão dentro de objetos).
 Através de um objeto temos o espaço que manipular nossas ações para construção de linha de cógido e programação. */
/*
  Crie um exemplo de um objeto
*/

const desenvolvedoraWeb = {}// inserindo desenvolvedooraWeb no console, devemos ter a seguinte impressão:

[Object Object] // nesse primeiro momento temos um objeto vazio
// melhorando meu objeto criado, temos:
const desenvolvedooraWeb = { 
  nome: ['Gil', 'Gilvanete'],
  idade: 50,
  sexo: 'femenino',
  interesse: ['Física Quântica', 'música'],
  bio: function(){
    alert(this.nome[0] + ' ' + this.nome[1] + 'tem' + this.idade + 'anos')
  },
  saudacao: function(){
    alert('Olá! eu sou ' + this.nome[0] + '.');
  }
}

/*
 2. Qual é a diferença entre uma função e uma Arrow Function?


Arrow functions possuem this léxico enquanto o modelo normal possui this dinâmico. Isso significa que arrow functions herdam o contexto local de onde foi declarado, enquanto o modelo normal possui o contexto associado ao objeto que ele está vinculado no momento da chamada (se ele não estiver associado a ninguém na chamada, ele assumirá this automaticamente como o contexto global, que no caso dos navegadores é window).*/
/*
 Crie um exemplo de Arrow Function
*/
const normal = function(){
  return this === Object;
};

const arrow = () => {
  return this === window;
};

const Object = {normal: normal, arrow: arrow}
Object.normal(); // true
Object.arrow(); // true

normal(); // false

/*
 3. Como funciona o destructuring?

Destructuring é basicamente quebrar uma estrutura complexa em partes mais simples. Por estrutura complexa, na maioria das vezes podemos considerar como sendo um array ou um objeto. */
/*
 Crie um exemplo de destructuring de objeto e array
*/
//mostrar a probabilidade - em porcentagem - de um sentimento presente em uma pergunta:
const pergunta = {
  usuario: 'Gilvanete',
  canal: 'telegram',
  felicidade: 99.99,
  tristeza: 00.01,
  alegria: 99.99,
  };

  
  console.log('Olá, meu nome é ' + pergunta.usuario);
  console.log('A probabilidade de felicidade no texto é de: ' + pergunta.felicidade);
  console.log('A probabilidade de tristeza no texto é de: ' + pergunta.tristeza);
  console.log('A probabilidade de alegria no texto é de: ' + pergunta.alegria);

  //Olá, meu nome é Gilvanete.
  //A probabilidade de felicidade no texto é de: 99.99
  //A probabilidade de tristeza no texto é de: 00.00
  //A probabilidade de alegria no texto é de: 99.99

  //USANDO O destructuring, TEMOS O MESMO EXEMPLO DA SEGUINTE FORMA:
  const pergunta = {
    usuario: 'Gilvanete',
    canal: 'telegram',
    felicidade: 99.99,
    tristeza: 00.01,
    alegria: 99.99,
    };
  
    const { usuario, felicidade, tristeza, alegria } = resposta;

    console.log('Olá, meu nome é ' + usuario);
    console.log('A probabilidade de felicidade no texto é de: ' + felicidade);
    console.log('A probabilidade de tristeza no texto é de: ' + tristeza);
    console.log('A probabilidade de alegria no texto é de: ' + alegria);
  
    //Olá, meu nome é Gilvanete.
    //A probabilidade de felicidade no texto é de: 99.99
    //A probabilidade de tristeza no texto é de: 00.00
    //A probabilidade de alegria no texto é de: 99.99

/*
 4. Para que serve o Spread e Rest?

Os operadores rest e spread permitem trabalhar com múltiplos parâmetro em funções. Sendo o Rest utilizado para permitir que uma função receba um número indefinido de parâmetros, enquanto o spread permite definir um número indefinido de parâmetros para uma função, Array ou objeto.*/

/*
  Crie um exemplo como utilizar Spred e Rest
*/

//PARA REST
function listaOrdem (primeiro, segundo, ...mais) {
  console.log(`Na lista estão: $, $. Os demais são: ${mais.join(', ')}.`)
}

listaOrdem('Patrícia', 'Mariana', 'João Carlos', 'Max', 'Thiago')
// Na lista de ordem estão: Patrícia, Mariana. Os demais são: João Carlos, Max, Thiago.


//PARA SPRED
const estudantes = ['Patrícia', 'Mariana', 'João Carlos']

  const todosEstudantes = [ ...estudantes, 'Max', 'Thiago']

  console.log(todosEstudantes)
  // [ 'Patrícia', 'Mariana', 'João Carlos', 'Max', 'Thiago' ]

/*
 5. Quais as vantagens de utilizar o código em modules em JavaScript ?

Entre as vantagens de utilização dessa linguagem em todas as camadas de uma aplicação, a mais clara é a padronização: com tudo sendo escrito em JavaScript, a uniformidade da linguagem é maior e o trabalho é mais compreensivo para quem está envolvido no projeto, seja um dev front-end, back-end ou full stack.*/
/*
 Crie um exemplo utilizando module 
*/

index.html
main.js
modules/
    canvas.js
    square.js


    //Os dois módulos do diretório modules são descritos abaixo:

/*canvas.js — contém funções relacionadas à configuração da tela:
create() — cria uma tela com uma largura e altura especificadas dentro de um invólucro <div> com um ID especificado, que é anexado dentro de um elemento pai especificado. Retorna um objeto que contém o contexto 2D da tela e o ID do wrapper.
createReportList() — cria uma lista não ordenada anexada dentro de um elemento de wrapper especificado, que pode ser usado para gerar dados de relatório. Retorna o ID da lista.

square.js — contém:
name — uma constante contendo a string 'square'.
draw() — desenha um quadrado em uma tela especificada, com um tamanho, posição e cor especificados. Retorna um objeto que contém o tamanho, a posição e a cor do quadrado.
reportArea() — grava a área de um quadrado em uma lista de relatórios específica, considerando seu tamanho.
reportPerimeter() — grava o perímetro de um quadrado em uma lista de relatórios específica, considerando seu comprimento.*/



/*
 6. O que é o Fetch? Quando utilizamos ele?

 A API Fetch é mais uma API que veio para nos ajudar e facilitar certos trabalhos repetitivos.
No lugar de usarmos os antigos objetos XMLHTTPRequest, podemos usar a API fetch para lidar com requisições HTTP.
*/

/*
 Crie um exemplo utilizando Fetch
*/
const URL_TO_FETCH = 'https://braziljs.org/api/list/events'; fetch(URL_TO_FETCH, { 
  method: 'get' // opcional 
})
.then(function(response) { 
  // use a resposta 
})
.catch(function(err) { console.error(err); });



/*
 7. Qual a vantagem de utilizar Async/Await?

 A própria leitura/interpretação do código fica mais fácil utilizando async/await. É como se estivéssemos programando de forma síncrona.
*/

/*
 Utilizando o exemplo do Fetch, refatore utilizando o async await.
*/
// Promise
fetch(`http://swapi.co/api/people/${id}`)
  .then(response => response.json())
  .then(person => console.log(person.name));

// async/await
const response = await fetch(`http://swapi.co/api/people/${id}`);
const person = await response.json();
console.log(person.name);

//Utilizando async/await com Promises
//Podemos combinar os dois mundos e utilizar async/await junto com Promises.
const fetch = require('node-fetch');

async function getPerson(id) {
  const response = await fetch(`http://swapi.co/api/people/${id}`);
  const person = await response.json();
  return person;
}

getPerson(1)
  .then(person => console.log(person.name));


/*
 8. Quando devemos utilizar o Map, Filter e o Reduce?

 map() - Executa uma função em todos os itens de um array
 filter() - Filtra um array

 reduce() - Reduz um array em um único resultado
*/

/*
 Crie um exemplo utilizando Map, Filter e o Reduce

Imagine que temos uma lista de produtos sendo exibidos em nossa página e desejamos adicionar um desconto de 10% no preço desses produtos. Como poderíamos fazer isso com o map()? Poderíamos ter um array de preços, como a seguir:*/

const productsPrices = [100, 150, 300];
/*Daí, poderíamos chamar o método map() e armazenar seu retorno em uma nova variável, chamada de productsDiscount, desta forma:*/

const productsDiscount = productsPrices.map(price => {
  return price * 0.9;
});
/*Assim, foi necessário definir um return no método para que ele funcione. Sem o return o novo array teria todos os seus valores como undefined.

Como esse método apenas retornou o valor do preço, podemos simplificar ainda mais esse código, definindo-o em uma única linha:*/

const productsDiscount = productsPrices.map(price => price * 0.9);



/*
  9. Quando utilizamos as Expressões?

  Expressões regulares são padrões utilizados para selecionar combinações de caracteres em uma string. Em JavaScript, expressões regulares também são objetos. Elas podem ser utilizadas com os métodos exec e test do objeto RegExp, e com os métodos match, replace, search, e split do objeto String. Este capítulo descreve o uso de expressões regulares em JavaScript.
*/

/*
  Crie um exemplo de uma Expressão utilizando o operador &&

  Uma expressão usando && é verdadeira somente se ambos os operadores forem verdadeiros (não zero).
*/

/*Operador -	Utilização -	Descrição
Logical AND (&&) -	expr1 && expr2 -	

Retorna expr1 se essa pode ser convertido para falso; senão, retorna expr2. Dessa forma, quando usado para valores Booleanos, && retorna verdadeiro se ambos os operandos forem verdadeiro ; senão, retorna falso.*/

//EXEMPLO PRÁTICO:

function pequenoCircuito() {  
  // logical OR (||)
  fazAlgumaCoisa() || fazAlgumaCoisaMais();
  
  // logical AND (&&)
  fazAlgumaCoisa() && fazAlgumaCoisaMais();
}

function equivalenteEvolucao() {

  // logical OR (||)
  const flexx = fazAlgumaCoisa();
  if (!flexx) {
    fazAlgumaCoisaMais();
  }
  
  
  // logical AND (&&)
  const flexx = fazAlgumaCoisa();
  if (flexx) {
    fazAlgumaCoisaMais();
  }
}

