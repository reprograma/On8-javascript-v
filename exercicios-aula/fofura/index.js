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

const btnGatos = document.getElementById('gato');
const btnCachorros = document.getElementById('cachorro');
const resultadoImg = document.getElementById('resultado');

btnGatos.addEventListener('click', function(event) {
  event.preventDefault()
  //console.log(entrei);
  const urlCats = 'https://aws.random.cat/meow'
  fetch(urlCats)
  .then(function (response){
//console.log(urlCats);
return response.json()
  })
.then(Object => {
//console.log(Object);
resultadoImg.src = `${Object.file}`

})
})

//escutador de evento
btnCachorros.addEventListener('click', function(event) {
event.preventDefault()
//console.log(entrei);
const urlDogs = 'https://dog.ceo/api/breeds/image/random'
//requisição - converter o objeto em um arquivo json
fetch(urlDogs)
.then(function (response){
  //console.log(urlDogs);
  return response.json()
})
.then(function(dados) {
  //console.log(dados)
  resultadoImg.src = dados.message;
})
})
