/*
 1. O que é um Objeto? Por que ele é tão importante na linguagem JavaScript?
 */

//===========================================================================================================================================

//Resposta: Objeto é uma acervo de propriedades. Ele é muito importante porque disponibiliza ao código Javascript todo o acesso a árvore DOM.

//===========================================================================================================================================

/*
  Crie um exemplo de um objeto


  let carro = {
  rodas: 4;
  portas: 2;
  nome: "Palio";
  aVenda: true;
  };

*/



/*
 2. Qual é a diferença entre uma função e uma Arrow Function?
*/
//=========================================================================================

//Resposta: Eles tem a mesma função, mas o Arrow Fuction é mais simplificado.

//=========================================================================================

/*
 Crie um exemplo de Arrow Function


let soma = ( 1, 2 )  =>  {  retornar 1 + 2 }

*/



/*
 3. Como funciona o destructuring?
*/
//=========================================================================================

 //Resposta: Funciona para separa os valores de uma array.

//=========================================================================================
/*
 Crie um exemplo de destructuring de objeto e array

 const cadastro = {nome: 'Viviane' , sobrenome: 'Santos' } 
 const {nome, sobrenome} = cadastro; 

 console. log (nome); // Viviane
 console. log (sobrenome); //Santos

*/



/*
 4. Para que serve o Spread e Rest?
*/
//=========================================================================================

//Resposta: Permitem trabalhar com múltiplos parâmetro em funções.

//=========================================================================================

/*
  Crie um exemplo como utilizar Spred e Rest

  //SPRED

  const frutas = ['Abacaxi', 'Morango', 'Maracuja']

  const addFrutas = [ ...frutas, 'Ameixa', 'Limão']

  console.log(addFrutas)
  // [ 'Abacaxi', 'Morango', 'Maracujá', 'Ameixa', 'Limão' ]


  //REST

  function frutas (ameixa, ...addFrutas) {
    return {
      ameixa,
      addFrutas
    }
  }

  console.log(frutas('Abacaxi', 'Limão', 'Morango'))
 
*/



/*
 5. Quais as vantagens de utilizar o código em modules em JavaScript ?
*/

/*
 Crie um exemplo utilizando module 
*/




/*
 6. O que é o Fetch? Quando utilizamos ele?
*/
//===========================================================================================================================================

//Resposta: Fecth é uma funcionalidade que pode fazer requisição em uma API, em um arquivo de texto, imagens, json, entre outros.

//===========================================================================================================================================

/*
 Crie um exemplo utilizando Fetch

 let Imagem = document.querySelector('img');

fetch('gatinhos.jpg')
.then(function(response) {
  return response.blob();
})
.then(function(myBlob) {
  let objetoURL = URL.createObjectURL(myBlob);
  myImage.src = objectURL;
});

*/




/*
 7. Qual a vantagem de utilizar Async/Await?
*/
//===========================================================================================================================================

//Resposta: Vantagem é que se pode trabalhar com promessas de uma forma mais cômoda.

//===========================================================================================================================================
/*
 Utilizando o exemplo do Fetch, refatore utilizando o async await.

 fetch(UrlCachorros)
  .then(function(response){
    // console.log( UrlCachorros);
      return response.json()
    })
  .then(object => { 
    // console.log(object);
    resultadoImg.src = `${object.file}`

*/




/*
 8. Quando devemos utilizar o Map, Filter e o Reduce?
//===========================================================================================================================================

// Resposta: Quando queremos deixar código menos complexo, sem efeitos colaterais e mais legível. 

//===========================================================================================================================================

*/

/*
 Crie um exemplo utilizando Map, Filter e o Reduce

 //Adicionar 10% no preço

 const adicionar10Porcento = (value) => value * 1.1 
[50, 60, 70] .map (adicionar10Porcento) 
[55, 66, 77] 

//Filtrar os preços maiores que 70

const preço = [ 55, 66, 77 ] 
preço.filter((value)=> value > 70)] 
[ 77 ]

// Somar todos os preços

[55, 66, 77].reduce( (accum, curr) => accum + curr ) 
// Returns: 198
*/


/*
  9. Quando utilizamos as Expressões?
*/
//===========================================================================================================================================

//Utilizados para selecionar combinações de caracteres em uma string. 

//===========================================================================================================================================

/*
  Crie um exemplo de uma Expressão utilizando o operador &&
*/
