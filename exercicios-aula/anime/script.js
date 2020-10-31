/*  
API
https://jikan.moe/ 

*/

const form = document.querySelector("form");
const input = document.querySelector("#nomeAnime");
const mensagemErro = document.querySelector("#mensagemErro");

const cardCaixa = document.querySelector("#cardCaixa")
const cardUrl = document.querySelector("#cardUrl")
const cardImg = document.querySelector("#cardImg")
const cardType = document.querySelector("#cardType")
const cardEpisodes = document.querySelector("#cardEpisodes")
const cardSynopsis = document.querySelector("#cardSynopsis")

form.addEventListener("submit", (event) => {
  event.preventDefault();

  fetch(`https://api.jikan.moe/v3/search/anime?q=${input.value}`)
    .then((response) => response.json())
    .then((json) => {
      const anime = json.results[0];
      console.log(json.results[0])
      cardCaixa.classList.add("active")
      
      cardImg.src = anime.image_url
      cardUrl.href = anime.url
      cardUrl.textContent = anime.title;
      // cardUrl.setAttribute('href', anime.url)
      cardType.textContent = anime.type;
      cardEpisodes.textContent = `| ${anime.episodes} episodes`
      cardSynopsis.textContent = anime.synopsis
    
    });
});
