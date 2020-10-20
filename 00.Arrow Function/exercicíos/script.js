
/* Nestes exercícios iremos praticar a utilização de das arrow functions. */

/*

Exercício 1 - Hora de usar as setas
Refatore a função imprimeProduto para utilizar arrow functions. Não deixe de customizar o método para utilizar templates strings.
*/
let carrinho = [
    { nome: 'abacaxi', preco: '2.00' },
    { nome: 'detergente', preco: '2.50' },
    { nome: 'bolacha', preco: '3.80' }
]

carrinho.forEach(function(produto) {
    imprimeProduto(produto.nome, produto.preco);
})

function imprimeProduto(nome, preco) {
    console.log('Produto: ' + nome + ' | ' + 'Preço: ' + preco);
}

/*

Exercício 2 - Hora de usar as setas novamente
Refatore o código a seguir para utilizar arrow functions:

*/

let itens = ['abacaxi', 'banana', 'maçã', 'laranja', 'limão'];
itens.forEach(function(item) {
    console.log(item);
})

/*

Exercício 3 - Vou lavar sua boca com sabão!
Utilize as arrow funcions para deixar o código a seguir ainda menor.

*/

let palavroes = [
    "Inconstitucionalíssimo",
    "Otorrinolaringologista",
    "Pneumoultramicroscopicossilicovulcanoconiose",
    "Oftalmotorrinolaringologista"
];

let tamanhos =  palavroes.map(function(palavrao){ return palavrao.length });

console.log(tamanhos); // [ 22, 22, 44, 28 ]

