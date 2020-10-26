/* 
  API 
  https://drag-race-api.readme.io/docs/get-one-queen  (busca por ID)

  - O usuário poderá buscar drag pelo ID
  - O usuário poderá escolher uma drag aleatoriamente 
    Obs: Crie uma função que retorne um numero aleatorio entre 1 ao 152
    Dica: Math.Floor e Math.random

   Usando Fetch - MDN
  https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch

  Usando Fetch APi - Medium
  https://medium.com/bruno-pulis/usando-fetch-api-ad0650f13a25
*/

const idDrag = document.getElementById('idDrag'); //aceita apenas id, por isso dispensa a #.
const btnBuscar = document.querySelector('#btnBuscar'); //precisa determinar se é um id(#) ou se é uma classe (.). Aceita seletores semelhante ao CSS (id, tag ou classe...)
const btnRandom = document.querySelector('#btnRandom');
const img = document.getElementById('imagem');
const h2 = document.querySelector('#nome');
const p = document.querySelector('#frase');
const mensagemErro = document.getElementById('mensagem-erro');

const pegarDadosAPI = id => {
  const url = `http://www.nokeynoshade.party/api/queens/${id}`
  fetch(url)
  .then(function(response){
    console.log(response);
    if(response.status !== 200){
      limparCard(); 
      return mensagemErro.textContent = `Drag não encontrada`
    }

    mensagemErro.textContent = '';
    return response.json();
  })
  .then(function(dados){
    console.log(dados);
    img.src = dados.image_url;
    h2.textContent = dados.name;
    p.textContent =  dados.quote;
  })
}

//  requisitando drags pelo id
btnBuscar.addEventListener('click', function(event){
  event.preventDefault();
  const idDragValue = idDrag.value;
  pegarDadosAPI(idDragValue)
})

// requisitando drags aleatoriamente
btnRandom.addEventListener('click', function(event) {
  event.preventDefault()
  function escolhaAleatoria () {
    return Math.floor(Math.random() * 152)
  }
  const id = escolhaAleatoria()
  pegarDadosAPI(id)
})

// função para limpar os campos
const limparCard = () => {
  img.src = '';
  h2.textContent = '';
  p.textContent = '';
}