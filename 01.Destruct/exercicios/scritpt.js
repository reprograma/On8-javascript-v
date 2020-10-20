/*
  1 - Pegando a propriedade na lata
  Refatore o trecho de código a seguir para utilizar a técnica de desestruturamento.
*/
const cliente = {
  nome: "Natália",
  email: "meuemailfeliz@hotmail.com",
  idade: 25,
};

const email = cliente.email;
const nome = cliente.nome;
const idade = cliente.idade;


/* 
    2 - Não gostei desse nome não
  Considere o objeto literal usuario e extraia as propriedades nome e email em variáveis com o nome nick e login, respectivamente.
 
*/
const usuario = {
  nome: "Toreto",
  email: "velozesefuriososparasempre@gmail.com",
};



/*
  Exercício 3 - Minha mãe mandou eu escolher esse daqui...
  Considere a lista de contatos a seguir:
  Utilizando a técnica de desestruturamento de arrays, obtenha somente os dados do segundo contato.
*/

const contatos = [
  {
    nome: "Mario Antonio",
    numero: "1234-5678",
  },
  {
    nome: "Reinalda Silva",
    numero: "1234-6789",
  },
  {
    nome: "Bárbara Lopes",
    numero: "1234-5567",
  },
];

/*
Exercício 4 - Cara-Crachá
Otimize o trecho de código a seguir utilizando o desestruturamento.
*/
const profissional = {
  titulo: "Engenheiro de Software",
  departamento: "Engenharia",
};

function isEngenheiro(profissional) {
  const titulo  = profissional.titulo;
  const departamento = profissional.departamento;

  return titulo.indexOf("Engenheiro") > -1 && departamento === "Engenharia";
}

isEngenheiro(profissional); // true
profissional.titulo = "Marketing";
isEngenheiro(profissional); // false
