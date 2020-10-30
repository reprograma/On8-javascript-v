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

// RESOLVIDOS NA AULA COM GALERA

/** exemplo  **/

const json = '{"result":true, "count":42}';
undefined
typeof json
"string"
JSON.parse(json)
{result: true, count: 42}
const obj = JSON.parse(json)
undefined
obj
{result: true, count: 42}
typeof obj
"object"
typeof json
"string"
const converteuEmString = JSON.stringify(obj)
undefined
converteuEmString
"{"result":true,"count":42}"
typeof converteuEmString
"string"

/* exemplo crud */
const listarClientes = () => {
    return fetch('http://localhost:4000/clientes')
    .then( resposta => { 
      return resposta.json()
    })
    .then( json => { 
      return json 
    })
}

const cadastrarClientes = (nome, cpf) =>  {
  const json = JSON.stringify({
    nome: nome,
    cpf: cpf
  })
  return fetch('http://localhost:4000/clientes/cliente',{
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: json
  })
  .then( resp => { 
    return resp.body
  })
} 

const deletaCliente = id => {
  return fetch(`http:localhost:4000/clientes/cliente/${id}`, {
    method: "DELETE",
})}


const detalhaCliente = id => { 
  return fetch(`http://localhost:4000/clientes/cliente/${id}`,{
    method: 'GET'
  }) 
  .then(resposta => {
    return resposta.json()
  })
}

const editaCliente = (id, cpf, nome) => {
  const json = JSON.stringify({
    nome: nome,
    cpf: cpf
  })
  return fetch(`http://localhost:4000/clientes/cliente/${id}`,{
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: json
  })
}






//PRIMEIRO EXERCICIO FEITO EM GRUPO

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
// console.log(btnCats);
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



EXERCICIO DRAGS

HTML

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Drag Race</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <main>
    <h1 id=titulo>Random Drag Race</h1>
    <input id="idDrag" type="number" value="" placeholder="buscar pelo id..." /> 
    <button id="btnBuscar" class="btn">Buscar</button>
    <button id="btnRandom" class="btn">Random Drag</button>
    <p id="mensagem-erro"></p>
    <article>
      <div id="img-box">
        <img src="" alt="" id="imagem">
      </div>
      <h2 id="nome"></h2>
      <p id="frase"></p>
    </article>
  </main>
  < src=".js"></>
</body>

</html>

CSS-------------------------------------------------------------------

body {
  backgroud-color: #fff;
  display: flex;
  justify-content: center;
}

#titulo {
  color: #eb5db7;
}

article {
  width: 300px;
  margin-top: 20px;
}

#img-box {
  height: 250px;
  overflow: hidden;
  width: 280px;
}

.btn {
  background-color: #eb5db7;
  border: none;
  color: white;
  border-radius: 8px;
  width: 100px;
  height: 30px;
  outline: none;
}

input {
  width: 200px;
  height: 25px;
  border-radius: 8px;
  outline: none;
}

.btn:hover {
  border: 1px solid #eb5db7;
  background-color: transparent;
  color: #eb5db7;
}

#mensagem-erro {
  color: red;
}

img {
  width: 100%;
}


JS -------------------------------------------------------

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

// função para mostrar as drags

btnBuscar.addEventListener('click', function(event){
  event.preventDefault();

  const idDragValue = idDrag.value;
  // console.log(idDragValue);
  const url = `http://www.nokeynoshade.party/api/queens/${idDragValue}`

  fetch(url)
  .then(function(response){
    console.log(response);
    if(response.status !== 200){
      limparCard(); //O que está abaixo do return não é executado
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
  
})

// função para limpar os campos

const limparCard = () => {
  img.src = '';
  h2.textContent = '';
  p.textContent = '';
}


// requisindo drags aleatórias

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

const idDrag = document.getElementById('idDrag'); 
const btnBuscar = document.querySelector('#btnBuscar'); 
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

btnBuscar.addEventListener('click', function(event){
  event.preventDefault();

  const idDragValue = idDrag.value;
  pegarDadosAPI(idDragValue)
  
  
})

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
