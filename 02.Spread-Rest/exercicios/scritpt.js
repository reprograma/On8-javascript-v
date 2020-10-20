/* REST */

/*
Exercício 1 - Gastando até o que não tem
Refatore o código a seguir para utilizar o operador Rest:
*/

function calculaPrecoTotal(a, b, c, d, e) {
  let precos = [a, b, c, d, e];
  return precos.reduce(function (total, preco) {
    return total + preco;
  }, 0);
}

calculaPrecoTotal(1, 2, 3, 4, 5);

/*
Exercício 2 - Eu sou maior do que você, lero lero!
Utilize o operador Rest para criar uma função que recebe um parâmetro referência, que é obrigatório, e mais n parâmetros numéricos. O objetivo é que esta função calcule se todos os valores numéricos passados são maiores que a referência e retorne verdadeiro ou falso.

Exemplo: todosSaoMaioresQue(2,3,4,5,6,7); // resultado esperado: true

Outros exemplos de entradas: 
todosSaoMaioresQue(5,4,3,2,1); // resultado esperado: false 
todosSaoMaioresQue(1,2); // resultado esperado: true

*/



/*   SPREAD      */

/* Exercício 1 - A união faz a força
Refatore o código a seguir para utilizar o operador Spread ao invés do método concat.  */

const equipeMarketing = ['Joana', 'Marcela', 'Bruna'];
const equipeComercial = ['Talita', 'Luisa', 'Vitória'];

const timeCompleto = equipeMarketing.concat(equipeComercial);

realizaBrainstorm(timeCompleto);

/*
Exercício 2 - Hora do ditado
Refatore o código a seguir para utilizar o operador Spread no método log do console.
*/
console.log('e','c','m','a','s','c','r','i','p','t');


/*
  Rest
  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/rest_parameters
 
  Spread
  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator

*/
