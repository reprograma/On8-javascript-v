/*
 1. O que é um Objeto? Por que ele é tão importante na linguagem JavaScript?

É uma entidade independente que possui propriedades, como por exemplo, o objeto 'pessoa' pode ter as propriedades
nome = 'Fulano', sobrenome = 'Silva' e idade = 28. Os objetos são importantes para o  JavaScript porque quase
tudo dentro dessa linguagem é um objeto, e até o paradigma de programação da mesma é Orientado a Objetos (POO),
o que indica que praticamente tudo feito nessa linguagem são interações entre objetos.
 
*/

/*
  Crie um exemplo de um objeto

let pessoa = new Object();

pessoa.nome = "Fulano";
pessoa.sobrenome = "Silva";
pesso.idade = 28;

ou 

let pessoa = {
    nome = "Fulano",
    sobrenome = "Silva",
    idade = 28;
}

ou ainda 

let pessoa = new Object();

pessoa["nome"] = "Fulano"
pessoa["sobrenome"] = "Silva"
pessoa["idade"] = "28

*/

/*
 2. Qual é a diferença entre uma função e uma Arrow Function?

Existem algumas diferenças entre elas, exemplo, as Arrow Functions não podem ser constructors. Porém a diferença
que faz a Arrow Function ser mais utilizada para os mais diversos usos do protocolo HTTP é que ela herda o contexto
local de onde foi declarada.

*/

/*
 Crie um exemplo de Arrow Function

let arrowFunction = () => 1;

*/

/*
 3. Como funciona o destructuring?

Supondo que tenhamos um array com diversas informações e queremos e/ou precisamos guardar algumas ou todas em variáveis
distintas, usamos o destructuring para isso. Fazendo uma desestruturação de um grande objetos, e outros menores e mais
específicos

*/

/*
 Crie um exemplo de destructuring de objeto e array

let x = new Object();
x.dados = [1, 2, 3, 4, 5]
let [y, z] = x.dados;
console.log(y); // 1
console.log(z); // 2

*/

/*
 4. Para que serve o Spread e Rest?

O spread é uma forma de colocar elementos em outros elementos. O rest é para elementos indefinidos.

*/


/*
  Crie um exemplo como utilizar Spred e Rest

function soma(x, y, z) {
  return x + y + z;
}

const exemplo = [1, 2, 3];

console.log(soma(...numbers)); // 6

function exemplo(...theRest) {
  console.log(theRest.length);
}

exemplo();  // 0
exemplo(5); // 1
exemplo(5, 6, 7); // 3

*/




/*
 5. Quais as vantagens de utilizar o código em modules em JavaScript ?

A componentização e criação de micro serviços que deixam o projeto como um tomo mais fácil de compreender e de realizar
manutenções, já que cada cada parte é responsável por um pouquinho, o que é bem mais eficiente que uma grande e única
função tudo.

*/

/*
 Crie um exemplo utilizando module 

module.exports.exemplo = function exemplo() {
    return "Exemplo";
};

*/

/*
 6. O que é o Fetch? Quando utilizamos ele?

O fetch() é uma forma de lidar com requisições e respostas HTTP. o fetch() é utlizado para buscar recursos
 de forma assíncrona através da internet.

*/

/*
 Crie um exemplo utilizando Fetch

fetch('http://exemplo.com/exemplo')
    .then(e => e.json())
    .then(console.log)
    .catch(error => console.log(error))

*/

/*
 7. Qual a vantagem de utilizar Async/Await?

O await numa função async pausa a execução da função assíncrona e espera pela resolução da Promise passada, e
depois retoma a execução da função assíncrona e retorna o valor resolvido.

*/

/*
 Utilizando o exemplo do Fetch, refatore utilizando o async await.

async function fetch() {
    const response = await fetch('http://exemplo.com/exemplo')
        .then(e => e.json())
        .then(console.log)
        .catch(error => console.log(error))
    return console.log(response);
}

*/

/*
 8. Quando devemos utilizar o Map, Filter e o Reduce?

Devemos utilizar o map quand precisamos de um retorno para cada elemento de um array. O filter é quando precisamos
filtrar determinados elementos de um array. O reduce é quando precisamos reduzir um array para um único elemento. 

*/

/*
 Crie um exemplo utilizando Map, Filter e o Reduce

animais = [
{
  nome: 'Fumaça',
  idade: 3,
  tipo: 'cao'
},
{
  nome: 'Laminha',
  idade: 1,
  tipo: 'gato'
}
];


let caes = animais.filter((animal) => animal.tipo === 'cao')
    .map((cao) => cao.idade *= 7)
    .reduce((total, cao) => total += cao)

*/

/*
  9. Quando utilizamos as Expressões?

Quando queremos fazer algum tipo de operação que pode ser simplificada com uma expressão.

*/

/*
  Crie um exemplo de uma Expressão utilizando o operador &&

let temRodas = false;
let temMotor = true;

if (temRodas == true && temMotor == true) {
    console.log("É um carro")
} else {
    console.log("Não é um carro")
}

*/