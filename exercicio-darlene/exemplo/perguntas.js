/*
 1. O que é um Objeto? Por que ele é tão importante na linguagem JavaScript?
 
*/
const objeto = prompt(' O que é um Objeto? Por que ele é tão importante na linguagem JavaScript?')

alert('Objetos são variáveis que armazenam uma "coleção de valores" referenciados por nome, e que podem ser recuperados para serem utilizados em diversas outras partes de um programa. Em JavaScript praticamente qualquer tipo de dado é um objeto.')

/*
  Crie um exemplo de um objeto
*/

let animal = {
  nome: ['Ayka', 'Pereira'],
  idade: 3,
  sexo: 'Fêma',
  Animal: 'Gato'

};


/*
 2. Qual é a diferença entre uma função e uma Arrow Function?

*/

alert(' Expressões function regulares  um conjunto de instruções que executa uma tarefa ou calcula um valor, ou seja, precisam declarar explicitamente qual será o retorno da função. A Arrow function é um recurso que foi introduzido no ES6. Ela permite escrever em um modelo encurtado onde a última expressão analisada será o retorno da função quando é omitido as chaves {} e elas não tem as suas próprias THIS')



/*
 Crie um exemplo de Arrow Function
*/

let myName = (name, nickname) => {
  return 'My name is ' + nickname + ', ' + name;
};

console.log(myName('Darlene Pereira', 'Lenny'));

/*
 3. Como funciona o destructuring?
*/

alert('A desestruturação de objetos é um recurso JavaScript útil para extrair propriedades de objetos e vinculá-los a variáveis. Ele pode extrair várias propriedades em uma instrução, pode acessar propriedades de objetos aninhados e pode definir um valor padrão se a propriedade não existir.')

/*
 Crie um exemplo de destructuring de objeto e array
*/

let animal = {
  nome: ['Ayka', 'Pereira'],
  idade: 3,
  sexo: 'Fêma',
  Animal: 'Gato'

};

let { nome, Animal } = animal; // this.animal é o objeto acima

console.log(nome) // Ayka
console.log(Animal) // Gato



/*
 4. Para que serve o Spread e Rest?
*/

alert('REST:Permite representar um número indefinido de argumentos na forma de um Array. (argA, argB, ...outrosArgs) => void')
alert('SPREAD: Permite expandir uma expressão em um local que receba múltiplos argumentos ou elementos, ele nos permite pegar um Array e propagar seus itens individualmente  ')

/*
  Crie um exemplo como utilizar Spred e Rest
*/

//REST
const produtos = [
  { descricao: 'Papel Ofício', quantidade: 10, valor: 10.50 },
  { descricao: 'Lapis preto', quantidade: 20, valor: 0.50 }
]

function total(...produtos) {
  return produtos
    .map(produto => produto.quantidade * produto.valor)
    .reduce((a, b) => a + b, 0)
}

console.log(total(...produtos))

// Exemplo 2

function showList(empresa, ...clients) {
  clients.forEach(client => {
    console.log(client, empresa);
  });
}

showList("Google", "André", "Pedro", "João");

//SPREAD

/* concatenar arrays com Spread */

const apelidosDaAyka = ['Arka', 'Tonha', 'Menina']

const todosOsApelidos = [...apelidosDaAyka, 'Layka', 'Gato']

console.log(todosOsApelidos)

//Exemplo 2

/* soma de dois valores com Spread */
const soma = (a, b) => a + b

const valores = [10, 50]

console.log(soma(...valores))

/*
 5. Quais as vantagens de utilizar o código em modules em JavaScript ?
*/

alert('Os módulos podem carregar uns aos outros e usar diretivas especiais exporte, importpara intercambiar funcionalidades, chamar funções de um módulo a partir de outro:')
//export: a palavra-chave rotula as variáveis ​​e funções que devem ser acessíveis de fora do módulo atual.
//import: permite a importação de funcionalidade de outros módulos.

/*
 Crie um exemplo utilizando module
*/

// app.mjs
import { addTwo } from './addTwo.js';

console.log(addTwo(4));

/*
 6. O que é o Fetch? Quando utilizamos ele?
*/
alert('A API Fetch fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, tais como os pedidos e respostas. Ela também fornece o método global fetch() que fornece uma maneira fácil e lógica para buscar recursos de forma assíncrona através da rede.')



/*
 Crie um exemplo utilizando Fetch
*/
const image = document.getElementById('poema')

const clicar = () => {
  fetch('img.jpg')
    .then(response => response.blob()) // convertendo respostas usando o blob() pq é um arquivo de imagens
    .then(blob => {
      console.log(blob) // Objeto retornado
      const createUrl = URL.createObjectURL(blob) //criando a url para inserir no src da imagem
      image.src = createUrl // inseri a imagaem chamando a variável de criação da url
    })
    .catch(erro => console.log(erro)) // Quando não dá certo nariquisição
}


/*
 7. Qual a vantagem de utilizar Async/Await?
*/

alert('É possível escrever código assíncrono como se estivéssemos escrevendo código síncrono .A palavra “async” antes de uma função significa que uma função sempre retorna uma promessa. A palavra-chave awaitfaz o JavaScript esperar até que a promessa seja estabelecida e retorne seu resultado.')

/*
 Utilizando o exemplo do Fetch, refatore utilizando o async await.
*/
const image = document.getElementById('poema')

async function lookPhoto(photo) {
  const response = await fetch(photo)
  const blob = await response.blob()
  image.src = URL.createObjectURL(blob)
}

lookPhoto('img.jpg')

/*
 8. Quando devemos utilizar o Map, Filter e o Reduce?
*/

alert('MAP = O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado. ')
alert('FILTER = O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.')
alert('REDUCE = O método reduce recebe uma função callback com alguns parâmetros e essa função é executada a cada elemento presente no array. O resultado é a redução do array a um valor só. Normalmente, utilizamos os dois primeiros parâmetros: acumulador e itemAtual.')

/*
 Crie um exemplo utilizando Map, Filter e o Reduce
*/

const supermarketList = [
  {
    name: 'Cerejas',
    bougth: true,
    price: 85.60
  },
  {
    name: 'Melancia',
    bougth: false,
    price: 5.80
  },

  {
    name: 'Morango',
    bougth: true,
    price: 5.20
  }
]

/* FILTER */

const bougth = supermarketList.filter(item => item.bougth == true)
console.log(bougth)

/* MAP */

const resultAll = supermarketList.map(item => item.price)
console.log(resultAll)

/* REDUCE */
const numeros = [9, 2, 5]

const numerosSomados = numeros.reduce((acumulador, itemAtual) => acumulador + itemAtual)

console.log(numerosSomados)


/*
  9. Quando utilizamos as Expressões?
*/

alert('Uma expressão consiste em qualquer unidade válida de código que é resolvida como um valor.Conceitualmente, existem dois tipos de expressões: aquelas que atribuem um valor a uma variável e aquelas que simplesmente possuem um valor.')

/*
  Crie um exemplo de uma Expressão utilizando o operador &&
*/
const grupoA = 50;
const grupoB = 100;
const grupoC = 300;

const grupoAvenceu = grupoA < 50 && "Grupo A Perdeu";
console.log(grupoAvenceu);

