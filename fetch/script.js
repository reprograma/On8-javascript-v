/*
  Fetch
  Um método usado para iniciar requisições e para transferências de dados entre recursos web. O fetch() retorna uma Promise

 Promise é um objeto que representa o sucesso ou fracasso de uma operação assíncrona. Elas são bastante usadas dentro de outras estruturas apresentadas no ES6.
*/

/*
  Exemplo da vida real sobre assíncrono

  Exemplo 1) Eu vou a uma pizzaria, peço uma pizza para viagem no balcão e fico plantado lá, só esperando me entregarem o pedido para que eu possa ir embora.
  Exemplo 2) Eu vou a uma pizzaria, peço uma pizza para viagem no balcão e, enquanto ela não fica pronta, dou uma passada na livraria ao lado para folhear um livro.

  Exemplo 1 é um caso típico de operação síncrona, pois minha vida parou completamente até que o pizzaiolo completasse seu trabalho. No exemplo 2, por outro lado, resolvi aproveitar meu precioso tempo ocioso degustando alguma livro. Isso é assíncrono… 
*/

/*
Anatomia de fetch()
Para realizar uma requisição GET, sem informações adicionais:
*/

function getDados(url) {
  fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((erro) => console.log(erro));
}
getDados(url);

/*
Opcionalmente, é possível adicionar informações da requisição, como segundo parâmetro, por meio de um objeto.
*/
fetch(url, {
  method: "GET",
  headers: {
    "Content-Type": "image/jpeg",
  },
  cache: "default",
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((erro) => console.log(erro));

/*
  .JSON()
  Um tipo de formato de dados muito utilizado com JavaScript é o JSON (JavaScript Object Notation), pelo fato dele possuir basicamente a mesma sintaxe que a de um objeto js. .json() transforma um corpo em json em um objeto JavaScript.
*/

fetch("https://viacep.com.br/ws/01001000/json/")
  .then((response) => response.json())
  .then((cep) => {
    console.log(cep.bairro, cep.logradouro);
  });

/*
.STATUS E .OK
Retorna o status da requisição. Se foi 404, 200, 202 e mais. ok retorna um valor booleano sendo true para uma requisição de sucesso e false para uma sem sucesso.
*/
fetch("https://viacep.com.br/ws/01001000/json/").then((response) => {
  console.log(response.status, response.ok);
  if (response.status === 404) {
    console.log("Página não encontrada");
  }
});

/*

Estrutura da requisição
Uma requisição é um pedido que fazemos a um webservice. O protocolo HTTP é baseado em pedidos e respostas. Quando um navegador acessa um site, ele envia uma requisição ao servidor, pedindo o conteúdo. Esse conteúdo que vem em forma de HTML é a resposta do servidor.

Veja a estrutura:
Endpoint – É o endereço web.
Query – É a query string na URI. Ex. /livros?lingua=pt-br
Recurso – É um caminho. Ex. http://site.com.br/carros (a palavra carros é o recurso).
Parâmetros – São variáveis enviadas na URI. Ex. http://site.com.br/carros/1 (o número 1 é o parâmetro).
Cabeçalho – São dados adicionais enviados na requisição. Ex. tipo de mídia que aceitamos como retorno, token para autenticação etc.
Método – É o tipo de requisição, chamado também de verbo. Ex. OPTIONS, GET, HEAD, POST, PUT, DELETE.
Dado – É o corpo da requisição. Ex. quando enviamos um formulário via POST, os dados nos inputs são o corpo da requisição.

Estrutura da resposta
A resposta é o retorno, que é o resultado de uma requisição.

Veja a estrutura:
Dado – É o corpo do retorno. O resultado da requisição.
Cabeçalho – São informações extras enviadas pelo servidor.

Status Code – É uma representação numérica de resposta.
Sempre que uma requisição HTTP é feita, um código numérico é retornado, indicando o resultado da requisição.
Esses códigos são divididos em cinco famílias:
1xx – Informacionais
2xx – Códigos de sucesso
3xx – Códigos de redirecionamento
4xx – Erros causados pelo cliente
5xx – Erros originados no servidor

Existem diversos tipos de código HTTP, mas vou tratar aqui apenas dos mais comumente utilizados:

200 OK – Usado para mostrar que a requisição foi bem sucedida.
201 CREATED – Usado quando se usa o método POST para criar novo recurso e indica que o recurso foi salvo com sucesso.
202 ACCEPTED - Usado para confirmar a solicitação enviada ao servidor e que será processada em outro momento. Usado tipicamente em requisições assíncronas, que não serão processadas em tempo real.
204 NO CONTENT – Requisição efetuada com sucesso, porém não existe nenhum retorno.
301 – MOVED PERMANENTLY – Requisição com sucesso, mas fez um redirecionamento para outra página.
400 BAD REQUEST – Usado quando da validação de entrada do lado do cliente falha. Requisição inválida.
401 UNAUTHORIZED - Indica falha na autenticação do serviço ou que se a autenticação ainda não feita.
403 FORBIDDEN – Indica que o acesso a essa página foi negado por questões de segurança.
404 NOT FOUND – Usado quando se está procurando um determinado recurso e ele não está disponível no sistema.
405 – METHOD NOT ALLOWED – Caso o método HTTP solicitado não puder ser encontrado na página. Por exemplo, se o cliente tiver solicitado uma requisição do tipo DELETE, mas o web service não a suportar.
500 – INTERNAL SERVER ERROR – Não usado explicitamente, mas pode ocorrer quando o sistema falhar.
502 BAD GATEWAY – Usado se o servidor, enquanto atuando como um servidor intermediário (gateway ou proxy), recebeu uma resposta inválida do servidor para o qual a requisição foi encaminhada..
504 – GATEWAY TIMEOUT – Erro de timeout caso a requisição não retorne no tempo estipulado.

Essa é uma lista resumida. Para a lista completa, recomendo a leitura abaixo:

https://en.wikipedia.orgwiki/List_of_HTTP_status_codes
*/

/*
  Documentação: 

  Fetch
  https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch

  then()
  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
  
  catch()
  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch

  promise
  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise


  Refêrencias 
  https://dev.to/monicavasco/desmistificando-api-rest-4e61
  https://github.com/reprograma/On8-javascript-iv
  https://www.origamid.com/slide/youtube/#/0101-javascript-antes-do-framework/9
  https://medium.com/@alcidesqueiroz/javascript-ass%C3%ADncrono-callbacks-promises-e-async-functions-9191b8272298
*/
