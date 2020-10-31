/*
 1. O que é um Objeto? Por que ele é tão importante na linguagem JavaScript?
 
Um objeto é uma coleção de propriedades, e uma propriedade é uma associação entre um nome (ou chave) e um valor.

/*
  Crie um exemplo de um objeto
*/const filme= {
  titulo: 'The Runways'
  diretora: 'Floria Sigismondi'
  gênero: 'Drama'
  
  function anoDeEstreia() {
    return 'Brasil 2010'
  }
}


/*
 2. Qual é a diferença entre uma função e uma Arrow Function?

A função é um bloco de códigos que pode ser executado e reutilizados. Valores passados a ela podem retornar outro valor. Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função (function expression) e não tem seu próprio this, arguments, super ou new.target. Estas expressões de funções são melhor aplicadas para funções que não sejam métodos, e elas não podem ser usadas como construtoras (constructors).

/*
 Crie um exemplo de Arrow Function
*/

const númerosInteiros = [1, 2, 3, 4, 5];

const númerosPares = númerosInteiros(item => item * 2);

 console.log(númerosPares);
 //retorna [2, 4, 6, 8, 10]


/*
 3. Como funciona o destructuring?
Destructuring (desestruturação) é uma expressão no Javascript que possibilita ao usuário “desempacotar” valores de um array ou propriedades de objetos, em variáveis diferentes! Com ele, conseguimos criar um código mais legível, mais estruturado e fácil de dar manutenção

/*
 Crie um exemplo de destructuring de objeto e array
*/
var a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2



/*
 4. Para que serve o Spread e Rest?
A sintaxe de propagação (Spread) permite que um objeto iterável, como um array ou string, seja expandida em locais onde zero ou mais argumentos (para chamadas de função) ou elementos (para literais de array) sejam esperados ou uma expressão de objeto seja expandida em locais onde zero ou mais pares de chave-valor (para literais de objeto) são esperados.
A sintaxe de rest parameter (parâmetros rest)  nos permite representar um número indefinido de argumentos como um array.

/*
  Crie um exemplo como utilizar Spred e Rest
/*Spread
const soma = (a, b) => a + b

  const valores = [ 20, 80 ]

  console.log(soma(...valores)) // saída: 100

  /*rest
  function soma (...valores) {
    let total = 0

    for (const item of valores) {
      total += parseInt(item, 10)
    }

    return total
  }

  console.log(soma(1, 2, 3, 4, 50, 10, 23))
  // 93




/*
 5. Quais as vantagens de utilizar o código em modules em JavaScript ?
*/Fornecer mecanismos para dividir programas JavaScript em módulos separados que podem ser importados quando necessário, tornando mais eficiente o carregamento. 

/*
 Crie um exemplo utilizando module 
*/
import { soma as somaDeTodosOsValores } from './util.mjs'



/*
 6. O que é o Fetch? Quando utilizamos ele?
Um método usado para iniciar requisições e para transferências de dados entre recursos web. O `fetch()` retorna uma `Promise`.
É um objeto que representa o sucesso ou fracasso de uma operação assíncrona. Elas são bastante usadas dentro de outras estruturas apresentadas no ES6.



/*
 Crie um exemplo utilizando Fetch
 
const inputName = document.getElementById('pokemonInput')
const form = document.getElementById('pokemonForm')
const div = document.getElementById('pokemon')

form.addEventListener('submit', function(e){
    e.preventDefault()
    const inputValue = inputName.value.toLowerCase()

    fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}/`)
        .then (response =>{
            return response.json()
        }).then (json =>{
            div.innerHTML = `<p>${json.name}</p> <img src='https://pokeres.bastionbot.org/images/pokemon/${json.id}.png'>`
        }).catch((erro) => {
            div.innerHTML = 'Desculpe. Ocorreu algum erro. Tente novamente.'
            return erro
        })

        inputName.value = ''

}) 







/*
 7. Qual a vantagem de utilizar Async/Await?
A palavra-chave `async` é usada em declarações ou expressões de funções. Assim, elas se tornam funções assíncronas e permitem o uso do `await` dentro delas.

Elas normalmente são usadas em conjunto de funções assíncronas, como `Promise` (e, consequentemente, `fetch`), quando é necessário esperar a resolução desta para dar continudade às operações seguintes.

/*
 Utilizando o exemplo do Fetch, refatore utilizando o async await.
*/
async function myAsyncFunction(){
  var number = await func1(4);

  console.log('Olá');
  number = await func2(number);

  console.log('Mundo');
  var result = await func3(number);

  console.log(result);
}


/*await
function example1(){  
    return func1(4)
        .then(func2)
        .then(func3);
}

async function example2(){  
    var number = await func1(4);
    number = await func2(number);
    number = await func3(number);
    return number;
}

// ou
async function example3(){  
    return func3(await func2(await func1(4)))
}



/*
 8. Quando devemos utilizar o Map, Filter e o Reduce?
/*São métodos que oferecem alternativas tanto para se trabalhar com valores cumulativos, quanto para criar subconjuntos com base em condições. Estes métodos são úteis para reduzir a complexidade, trabalhar sem “efeitos colaterais” e, muitas vezes, tornar o código mais legível.
*O método reduce()executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.

*Com Map é possível percorrer todos os item do array, executar alguma transformação nesses itens e retornar um novo array sem modificar o atual.

*O Filter vai percorrer todo o array e criar um novo com todos os elementos que passaram no teste implementado.


/*
 Crie um exemplo utilizando Map, Filter e o Reduce
/*Map 
c exibeInformacoes = empresas.map( empresa => `${empresa.nome}` + ' CEO: ' + `${empresa.CEO}`);
console.log( exibeInformacoes )




/*Filter
const anoDeCriacao = empresas.filter(empresa => (empresa.anoDeCriacao > 2000));

console.log( anoDeCriacao )



/*Reduce
[0, 1, 2, 3, 4].reduce(function(acumulador, valorAtual, index, array) {
  return acumulador + valorAtual;
});
// 10




/*
  9. Quando utilizamos as Expressões?
As RegEx são baseadas em dois elementos: um padrão e modificadores. Esses elementos, em conjunto, formam a chamada expressão regular
Uma expressão regular pode ser utilizada em um campo de busca, para a substituição de caracteres em um texto, para verificar a existência de um padrão na entrada de dados 
É validação de textos a partir de padrões, pois permite que controlemos os dados inseridos pelos usuários, assegurando assim o formato esperado.
/*
  Crie um exemplo de uma Expressão utilizando o operador &&
*/
<script>
   function stringSearch() {
     let str = "Expressões regulares em JavaScript na DevMedia!";
     let n = str.search(/[j+]/i);
     alert(n);
   }
</script>

