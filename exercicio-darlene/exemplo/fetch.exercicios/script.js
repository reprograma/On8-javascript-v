const image = document.getElementById('poema')


/*
 Crie um exemplo utilizando Fetch
*/



const clicar = () => {
    fetch('img.jpg')
    .then(response => response.blob()) // convertendo respostas usando o blob() pq é um arquivo de imagens
    .then(blob => {
        console.log(blob) // Objeto retornado
        const createUrl = URL.createObjectURL(blob) //criando a url para inserir no src da imagem
        image.src = createUrl // inseri a imagaem chamando a variável de criação da url
    })
    .catch(erro => console.log(erro)) // Quando não dá certo nariquisição
}


/*
7. Qual a vantagem de utilizar Async/Await?
*/

    async function lookPhoto(photo){
        const response = await fetch(photo)
        const blob = await response.blob()
        image.src = URL.createObjectURL(blob)
    }

    lookPhoto('img.jpg')