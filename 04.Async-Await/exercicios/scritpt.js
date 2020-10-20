/* Exercício 1 - Tire esse then da minha frente!
Refatore a função a seguir para funcionar utilizando async/await.
*/
function showGitHubUser(username) {
  const url = `https://api.github.com/users/${username}`;
  fetch(url)
    .then((response) => response.json())
    .then((user) => {
      console.log(user);
    });
}

/*
Exercício 2 - Na minha máquina funciona...
Como fazemos para tratar erros quando estamos trabalhando com async/await? Refatore o código do exercício anterior para lidar com estes casos.
*/
