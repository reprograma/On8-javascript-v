const getCharactes = () => {
    console.log('fui exetudado');
    const baseURL = 'https://www.breakingbadapi.com/api';

    fetch(`${baseURL}/characters?limit=62&offset=0`)
        .then((resp) => resp.json())
        .then(json => createCards(json))
};

const createCards = (characters) => {

            const template = characters.reduce(acumulador, atual) => {

                //o método reduce precisa receber uma função de callback, e nesse caso, o acumulador começa com a sua string vazia:

                //console.log('eu o acumulador', acumulador)
                //console.log('eu sou o valor atual', atual)

                return acumulador += `
                <li class="card">

                <div class="card-img">
                <img src="${atual.img}"/>
                </div>

                <div class="card-description">
                <h1 class="card-name">${atual.name}</h1>

                <p>Apelidio: ${atual.name}</p>

                </div>

                </li>

                `
                
            }, '')

            insertCharactersIntoPage(template);
        }
        const insertCharactersIntoPage = (template) => {
            const cards = document.querySelector('.cards')
            cards.innerHTML = template
        }
}

getCharactes();
createCards()
