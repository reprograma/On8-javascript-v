/*
 1. O que é um Objeto? Por que ele é tão importante na linguagem JavaScript?

  Um objeto pode ser considerado um tipo especial de variável, que contém dados e funcionalidades relacionadas que geralmente são chamadas de propriedades e métodos. Por causa do JavaScript ser uma linguagem baseada em onjetos, pode se dizer que quase tudo nessa linguagem também pode ser acessados pelos métodos ou propriedades.

*/

/*
  Crie um exemplo de um objeto

  const compras = {
    name: 'vestidos',
    quantity: 4,
    bougth: true
  }

*/




/*
 2. Qual é a diferença entre uma função e uma Arrow Function?
  A pricipal diferença é que na Arrow function pode acessar quantos elementos você quiser em uma class, pois o this estará sempre relacionado a ela. Enquando a função vai retirar o this e por no elemento em que está relacionada, assim não poderá acessar quantos você quiser e forem necessários.
*/

/*
 Crie um exemplo de Arrow Function

 const sum = (number1, number2) => number1 + number2

*/




/*
 3. Como funciona o destructuring?
 Ele funciona extraindo os dados de objetos ou arrays, e os armazena em um variável distinta
*/

/*
 Crie um exemplo de destructuring de objeto e array
    Exemplo array:
    const nameDogs = ['Bob', 'Bolinha', 'Half', 'Apolo']
    const [name1, name2] = name 
    console.log(name1, name2)// Bob Bolinha


    Exemplo objeto: 

    
    let cat = {
      color : 'black',
      years : 1,
      name : 'Lica'
    };

    const {name, years} = cat

    console.log(name) //Lica
    console.log(years) // 1
    */




/*
 4. Para que serve o Spread e Rest?
    Rest serve para espalhar ou distribuir múltiplos e indefinidos parâmetros passados como argumento em uma função.
    Spread permite juntar e incorporar um número indefinido de parâmetros em uma função, array ou objeto
    */


/*
  Crie um exemplo como utilizar Spred e Rest
      Spread:
      
      const multiplication = (x, y) => x * y ;
 
      const number = [7, 9]
     
      console.log(multiplication(...number))// 63
      

      Rest:

      const soma = (...number) => {
        let result = 0
        for (const item of number) {
            result += parseInt(item, 10)
        }
        return result
      }
      console.log(soma(4,5,6,9,2))
      */



/*
 5. Quais as vantagens de utilizar o código em modules em JavaScript ?
Os modules permitem que o código Js seja quebrado em partes, com o intuito de facilitar a organização e o compartilhamento do código. Utilizando o export e o import por exemplo de um arquivo javascript para outro

 */

/*
 Crie um exemplo utilizando module


*/




/*
 6. O que é o Fetch? Quando utilizamos ele?

*/

/*
 Crie um exemplo utilizando Fetch

 
 const user = 'talinejoventino'
 
 fetch(`https://api.github.com/users/${user}`)
 
  .then(response => {
    return response.json()
  })
  .then(objeto => {
   
    console.log(`O usuário é ${objeto.name} e sua bio é ${objeto.bio}`)
  })
  .catch(erro =>{
    console.log(`Ops, temos um erro: ${erro}`)
  })
 */




/*
 7. Qual a vantagem de utilizar Async/Await?
*/

/*
 Utilizando o exemplo do Fetch, refatore utilizando o async await.
*/




/*
 8. Quando devemos utilizar o Map, Filter e o Reduce?
 Eles permitem fazer operações em arrays, como modificar, filtrar e agrupar ou agregar valores de uma forma prática.
*/

/*
 Crie um exemplo utilizando Map, Filter e o Reduce

 Filter:
 const numeros = [8, 92, 5, 51, 4, 10, 38, 44];
 
 const maiorQue40 = (numero) =>{
     return numero > 40
 }
 
 const filtrados = numeros.filter(maiorQue40);
 console.log(filtrados)

 Reduce:
 const soma = numeros.reduce((acumulador, atual) => acumulador + atual)


 Map: 

 const compras = {
    name: 'vestidos',
    quantity: 4,
    bougth: true
  },
  {
    name: 'blusas',
    quantity: 2,
    bougth: true
  }

  const total = compras.map(item => item.quantity)
  console.log(total)
 */





/*
  9. Quando utilizamos as Expressões?
*/

/*
  Crie um exemplo de uma Expressão utilizando o operador &&
   const sapato = 'red'

   const corSapato = sapato === 'red' && 'Parabéns você possui um tênis vermelho'
   console.log(corSapato)
  */


