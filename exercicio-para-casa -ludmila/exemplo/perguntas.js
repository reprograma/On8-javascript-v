/*
 1. O que é um Objeto? Por que ele é tão importante na linguagem JavaScript?

 R = Um objeto é uma coleção de propriedades, e uma propriedade é uma associação entre um nome (ou chave) e um valor. Um valor de propriedade pode ser também uma função, sendo considerada assim um método do objeto.
*/


/*
  Crie um exemplo de um objeto
*/

const amora = {
  especie: "cachorro",
  raca: "shih-tzu",
  cor: "preta",
  porte: "pequeno"
}

/*
 2. Qual é a diferença entre uma Função e uma Arrow Function?

 R = A principal diferença é que uma Function cria um "this" para ela e a Arrow não, pois ela se mantém fazendo referência ao seu pai.

*/

/*
 Crie um exemplo de Arrow Function

*/

const ameixa = () => "Au au au";

/*
 3. Como funciona o destructuring?

 R = é uma expressão JavaScript que possibilita extrair dados de arrays ou objetos em variáveis distintas.
*/

/*
 Crie um exemplo de destructuring de objeto e array
*/

// Destructuring do array

const doces = ["brigadeiro", "beijinho", "cajuinho"];

const [doce1, doce2, doce3] = doces;
console.log(doce2);

// Destructuring do array

const ameixaAparencia = {
  especie: "cachorro",
  raca: "shih-tzu com Yorkshire",
  cor: "preta",
  porte: "pequeno"
}

const {
  especie,
  raca,
  cor,
  porte
} = ameixaAparencia; //lembrar de utilizar exatamente o nome da chave que desejar acessar, se não, não vai funcionar
console.log(especie, raca, cor, porte);

/*
 4. Para que serve o Spread e Rest?

 R = O Rest nos permite representar um número indefinido de argumentos como um array, inclusive sendo possível utilizar a função .length para saber seu tamanho. Para utilizá-lo, basta colocar o prefixo "..." antes do argumento que irá se tornar um array.

 R = O Spread permite expandir uma expressão em um local que receba múltiplos argumentos ou elementos. Basta colocar "..." antes do elemento que desejamos expandir.
*/


/*
  Crie um exemplo como utilizar Spread e Rest

*/

// Rest---------------------------------------------------------

function ferias(data, destino, ...atividades) {
  console.log(data, destino);
  console.log(atividades);
}

// ferias("31 de outubro", "Fernando de Noronha", "banho de mar", "passeio de lancha", "conhecer os golfinhos", "fazer mergunho guiado", "tirar fotos");


// Spread ------------------------------------------------------------

const irmaos = ["João", "e", "Maria"];

const acaoIrmaos = [...irmaos, "comeram os doces da casa da bruxa!"];
console.log(acaoIrmaos);
console.log(acaoIrmaos.join(" ")); //o Join serve para unir os itens do array em uma única string


/*
 5. Quais as vantagens de utilizar o código em modules em JavaScript?

 R = Permitir a quebra do código em diferentes arquivos, facilitando a organização e compartilhamento do código. É importante saber que para usar no JS puro você deve usar o type="module" e ele necessita de um servidor local ou online, pois não roda diretamente no HTML. Atenção, uma vez exportado um código, você pode importar para diversos arquivos diferentes, pois o module entende e só carrega o arquivo uma vez, impedido que os arquivos fiquem pesados.
*/

/*
 Crie um exemplo utilizando module 

*/

import {
  saudacoes
} from "./exemplo_module.js" //obs: por estar no JS puro, informar qual é a exptensão do arquivo
console.log(saudacoes());


/*
 6. O que é o Fetch? Quando utilizamos ele?

 R = É uma API que permite a solicitação de requisções assincronas ao servidor, sendo a diferença entre ele e o XMLHttpRequest, é que o primeiro utiliza o Promises que permite API mais simples e limpa. O Fetch é considerado assincrono porque ele vai ficar rodando, principalmente em lentidão do servidor, sem travar o restante do código JS.
*/

/*
 Crie um exemplo utilizando Fetch
*/

const amoraAmeixaFoto = document.querySelector("#amora-ameixa-foto");

fetch("amora-ameixa.jpeg")
  .then(response => {
      if (!response.ok) {
        return "Não achei a foto"
      } else {
        response.blob().then(object => {
            amoraAmeixaFoto.src = URL.createObjectURL(object);
            amoraAmeixaFoto.style.width = "50rem"
        })
      }
  })


/*
 7. Qual a vantagem de utilizar Async/Await?

 R = A Asunc function utiliza a expressão Await para pausar a execução de uma função assíncrona e espera pela resolução da Promise passada, retomando depois a execução da mesma e retornando o valor resolvido. Além disso, deixa o código mais limpo.
*/

/*
 Utilizando o exemplo do Fetch, refatore utilizando o async await.
*/

const amoraAmeixaFoto = document.querySelector("#amora-ameixa-foto");

async function exibirFoto(foto) {
  const response = await fetch(foto)
  const blob = await response.blob()
  amoraAmeixaFoto.src = URL.createObjectURL(blob);
  amoraAmeixaFoto.style.width = "50rem"
}


/*
 8. Quando devemos utilizar o Map, Filter e o Reduce?

 R = Podemos utiliza-los para transformar, filtrar, agregar e/ou organizar os itens do array de acordo com nossa necessidade.
*/

/*
 Crie um exemplo utilizando Map, Filter e o Reduce
*/

// FILTER -------------- O filter() executa uma função que testa todos os itens de uma array, onde este teste deve retornar true ou false. Todos os valores que retornarem como true serão inseridos em um novo array.

const titulosNobreza = ["Lady Clarice", "Visconde Antônio", "Conde Paulo", "Lady Beatriz", "Rainha Ana", "Principe Gustavo", "Lorde Luiz", "Lady Cecilia"];

const tituloLady = titulosNobreza.filter(titulo => titulo.includes("Lady"));
console.log(tituloLady);

// MAP ---------- O map() executa uma função de transformação em todos os itens de um array, e retorna um novo array como resultado.

const trocarTituloRainha = tituloLady.map(titulo => 
  titulo.replace("Lady", "Rainha")
)

console.log(trocarTituloRainha);

// REDUCE --------- O reduce() é uma função agregadora, onde sempre irá percorrer todos os itens do array e retornar apenas 1 resultado.

const numeros = [2, -5, 3, 10, 3];
const numerosSomados = numeros.reduce((acumulador, atual) => acumulador + atual
)

console.log(numerosSomados);
/*
  9. Quando utilizamos as Expressões?

  R = Expressões regulares são padrões utilizados para selecionar combinações de caracteres em uma string.
  Obs: Um bloco de if não é considerado uma expressão.
*/

/*
  Crie um exemplo de uma Expressão utilizando o operador &&
*/

const sol = "praia";

const atividadeDia = sol === "praia" && "Vamos para praia já que o dia está ensolarado!"; //Só vai executar a segunda expressão se a primeira for true, caso contrário, a expressão ficará travada.

console.log(atividadeDia);