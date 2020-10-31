/*
 1. O que é um Objeto? Por que ele é tão importante na linguagem JavaScript?
 
*/

// Um objeto é uma coleção de propriedades, e uma propriedade é uma associação entre um nome (ou chave) e um valor. Um valor de propriedade pode ser uma função, que é então considerada um método do objeto. Além dos objetos que são pré-definidos no browser, podemos definir nossos próprios objetos.


/*
  Crie um exemplo de um objeto
*/

const ana = 
{
  formacao: 'Biologia',
  estuda: true,
  hobbies: ['Animes', 'Desenhos', 'Ir ao Cinema', 'Curtir a Natureza', 'Video Games'],
  signo: 'Touro',
  pets: 1,
  sonho: 'Viajar pelo mundo',
  metas: 'Me tornar desenvolvedora front-end & designer ux/ui '
}


/*
 2. Qual é a diferença entre uma função e uma Arrow Function?

*/

// Expressões de função precisam declarar explicitamente qual será o retorno da função, enquanto Arrow Functions permitem escrever em um modelo encurtado (deixando o código mais enxuto) onde a última expressão analisada será o retorno da função, quando é omitido as chaves {} .


/*
 Crie um exemplo de Arrow Function
*/

const meuNome = (nome, sobrenome) => {

  return `Olá! Me chamo ${nome} ${sobrenome}!`

}

console.log(meuNome('Ana', 'Luiza'))


/*
 3. Como funciona o destructuring?
*/

// facilita o acesso a dados dentro de um array ou objeto e a criação de variáveis que contenham esses dados, não sendo mais necessário escrever múltiplas declarações de variáveis de um mesmo objeto.

/*
 Crie um exemplo de destructuring de objeto e array
*/

// destructuring de objeto

const pet = 
{
  tipo: 'cachorro',
  raça: 'husky siberiano',
  idade: 9,
  cor: 'branco',
  vacinado: true
}

const {tipo, raça, idade, cor, vacinado} = pet
console.log(tipo, raça, cor)


// destructuring de array

const cores = ['amarelo', 'azul', 'roxo', 'verde', 'vermelho', 'rosa']

const [cor1, cor2, cor3, cor4, cor5, cor6] = cores
console.log(`Cores: ${cor1}\n${cor2}\n${cor3}\n${cor4}\n${cor5}\n${cor6}`)


/*
 4. Para que serve o Spread e Rest?
*/

// O Spread permite que um objeto iterável, como um array ou string, seja expandida em locais onde zero ou mais argumentos (para chamadas de função) ou elementos (para literais de array) sejam esperados ou uma expressão de objeto seja expandida em locais onde zero ou mais pares de chave-valor (para literais de objeto) são esperados.

// O Rest permite representar um número indefinido de argumentos como um array.


/*
  Crie um exemplo como utilizar Spread e Rest
*/



/*
 5. Quais as vantagens de utilizar o código em modules em JavaScript ?
*/

// Deixar o código mais organizado, já que as declarações, variáveis, funções e qualquer coisa de um módulo existem apenas nos escopos deste módulo, o que significa que qualquer variável declarada dentro de um módulo não está disponível para outros módulos (a não ser que eles sejam exportados explicitamente como parte da API, e importados posteriormente no módulo que as usa).

/*
 Crie um exemplo utilizando module 
*/



/*
 6. O que é o Fetch? Quando utilizamos ele?
*/

// método global que fornece uma maneira fácil e lógica para buscar recursos de forma assíncrona através da rede.

/*
 Crie um exemplo utilizando Fetch
*/



/*
 7. Qual a vantagem de utilizar Async/Await?
*/

// Simplificar o uso de forma síncrona das Promises e executar alguns procedimentos em um grupo de Promises. Assim como Promises são similares a callbacks estruturados, funções async/await são similares à junção de generators com Promises.

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


