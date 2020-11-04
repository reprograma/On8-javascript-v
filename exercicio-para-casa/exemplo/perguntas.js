/*
 1. O que é um Objeto? Por que ele é tão importante na linguagem JavaScript?
  
*/

  /*RESPOSTA:  Assim como os objetos palpaveis, objeto em javascript, tem a mesma funçao e 
possui caracteristicas que podem receber valores.

/*
  Crie um exemplo de um objeto

*/

  let pessoa = new Object()
  pessoa.nome = 'Arine'
  pessoa.sexo = 'feminino'
  pessoa.estadoCivil = 'casada'
  console.log(pessoa)

/*
 2. Qual é a diferença entre uma função e uma Arrow Function?

*/

  /*RESPOSTA: Não sei explicar a diferença entre arrow function de function. Só consigo mostrar a diferença no código.
  
    FUNCTION
*/
    /* function (){

    }

    
/*
    ARROW FUNCTION */
   
    /*() => {}

/*
 Crie um exemplo de Arrow Function

*/

  let comida = () => {console.log(this)}

/*
 3. Como funciona o destructuring?

*/
    
  /*RESPOSTA: A desestruração torna possivel extrair elementos de um array ou objeto e atribuir a variaveis distintas*/

/*
 Crie um exemplo de destructuring de objeto e array

*/
    /*OBJETO*/
let aluno = {idade: 10, turma: 'A'};
let {idade, turma} = aluno;

console.log(idade); //  10
console.log(turma); //  A


    /*ARRAY*/
let carro, moto
[carro, moto] = ['gol', 'suzuki'];
console.log(carro); // gol
console.log(moto); // suzuki

/*
 4. Para que serve o Spread e Rest?

*/
  /*RESPOSTA: O Rest possibilita que uma função receba um número indefinido de parâmetros
  enquanto o spread permite definir um número indefinido de parâmetros

/*
  Crie um exemplo como utilizar Spread e Rest

*/
    /*REST*/
function nomeSobrenome(nome, sobrenome) { console.log(nome + ' ' + sobrenome)}
let aluno = ['Amadeu', 'Souza'];
nomeSobrenome(...aluno);


    /*SPREAD*/
function listaMedica(...paciente) {
  console.log(paciente.length);
}
fun1();  // 0
fun1('antonia'); // 1
fun1('antonia', 'ana', 'rosa'); // 3


/*
 5. Quais as vantagens de utilizar o código em modules em JavaScript ?

*/

/*
 Crie um exemplo utilizando module 
*/




/*
 6. O que é o Fetch? Quando utilizamos ele?
*/

/*
 Crie um exemplo utilizando Fetch
*/




/*
 7. Qual a vantagem de utilizar Async/Await?
*/

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


