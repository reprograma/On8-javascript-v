/*
  Cachorros
  Documentação: https://dog.ceo/dog-api/
  Url         : https://dog.ceo/api/breeds/image/random

  Gatos
  Documentação:  https://aws.random.cat/
  Url         :  https://aws.random.cat/meow
 
  Usando Fetch - MDN
  https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch

  Usando Fetch APi - Medium
  https://medium.com/bruno-pulis/usando-fetch-api-ad0650f13a25
*/

// EXIBINDO AS FOTOS DE GATOS

const btnCats = document.getElementById('gato');
const btnDogs = document.getElementById('cachorro');
const resultadoImg = document.getElementById('resultado');
console.log(document); //document chama todo o documento do html para que possamos procurar o que desejamos, nesse caso foi o id

btnCats.addEventListener('click', function(event) {
  event.preventDefault();
  // console.log('entrei');

  const urlCats = 'https://aws.random.cat/meow'

  fetch(urlCats)
  .then(function(response){
    // console.log(urlCats);
      return response.json()
    })
  .then(object => { //arrow function
    // console.log(object);
    resultadoImg.src = `${object.file}` //pode ser assim ou igual ao exemplo abaixo
  })
})

// EXIBINDO AS FOTOS DE CACHORROS

btnDogs.addEventListener('click', function(event){
  event.preventDefault();
  console.log('entrei');

  const urlDogs = 'https://dog.ceo/api/breeds/image/random'

  fetch(urlDogs)
  .then(function(response){
    return response.json()
  })
  .then(function(dados){ //função normal
    console.log(dados); //para ver a propriedade que queremos utilizar, nesse caso é message
    resultadoImg.src = dados.message;
  })
})
