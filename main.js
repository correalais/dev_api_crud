const cadastroProdutos = require('./cadastro_produtos.js')

//Main
//cadastroProdutos.inserir({nome: "mesa", preco:450});
//cadastroProdutos.inserir({nome: "cadeira", preco:180});
//cadastroProdutos.inserir({nome: "roupeiro", preco:840});
//1
console.log("Listar: ");
//2
cadastroProdutos.listar(
    //4
    function(err, produtos) {
        if(err) {
            console.log("Sistema esta com problemas");
            console.log(err);
        }
        else {
            console.log(produtos);
        }
    }
);
//3

/* console.log("BuscarPorId(2): ");
cadastroProdutos.buscarPorId(2, function(erro, produto){
    if (erro){
        console.log('Erro ' + erro);

    } else {
        console.log(produto)
    }
});
 */

cadastroProdutos.inserir({nome: "pastel", preco:4.85},  function(err, produtos) {
    if(err) {
        console.log("Sistema esta com problemas");
        console.log(err);
    }
    else {
        console.log(produtos);
    }
});

//console.log("BuscarPorId(4): ");
//console.log(cadastroProdutos.buscarPorId(4));

//console.log("Atualizar: ");
//console.log(cadastroProdutos.atualizar(
//    3, {id:3, nome: "roupeiro", preco:850}
//));

//console.log("Deletar: ");
//console.log(cadastroProdutos.deletar(1));

//console.log("Listar: ");
//console.log(cadastroProdutos.listar());
