const statusCharacters = document.querySelector("#statusCharacters");
const btn = document.querySelector(".btn");

/*
  Essa função faz requisição na API de breaking bad e retorna um array com os personagens
*/
const getCharacters = async (number) => {
  const baseURL = "https://www.breakingbadapi.com/api";

  const url = number
    ? `${baseURL}/characters?limit=${number}&offset=0`
    : `${baseURL}/characters?limit=62&offset=0`;

  const response = await fetch(url);
  const json = await response.json();
  return json;
};

/*
  Essa função pega um array de personagens e cria um template HTMl.
*/
const createCards = (characters) => {
  const template = characters.reduce((acumalador, atual) => {
    return (acumalador += `
     <li class="card">
     <div class="card-img">
      <img src="${atual.img}" />
     </div>
     <div class="card-description">
      <h1 class="card-name">${atual.name}</h1>
      <p>Apelido: ${atual.nickname}</p>
      <p>Aniversário: ${atual.birthday}</p>
     </div>
     </li>
    `);
  }, "");
  insertCharactersIntoPage(template);
};

/*
  Essa função pega o template de Cards criado e adiciona no DOM
*/
const insertCharactersIntoPage = (template) => {
  const cards = document.querySelector(".cards");
  cards.innerHTML = template;
};

// Eventos de clicks

// evento de click do select
statusCharacters.addEventListener("click", async (event) => {
  const statusCharacters = event.target.value;
  const characters = await getCharacters();

  if (statusCharacters === "all") {
    return createCards(characters);
  }
  const filterCharacters = filterStatus(characters, statusCharacters);
  return createCards(filterCharacters);
});

const filterStatus = (arrayCharacters, status) => {
  return arrayCharacters.filter((character) => {
    return character.status === status;
  });
};

// evento de click do botão
btn.addEventListener("click", async (event) => {
  event.preventDefault();
  const input = document.querySelector("#qtdCharacters");
  const characters = await getCharacters(input.value);
  createCards(characters);
  input.value = "";
});

const init = async () => {
  const characters = await getCharacters();
  console.log(characters);
  return createCards(characters);
};

init();
