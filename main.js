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

/* cadastroProdutos.inserir({nome: "feijão", preco:10.50},  function(err, produtoInserido) {
    console.log("Inserindo produto...");
    if(err) {
        console.log(err);
    }
    else {
        console.log("Produto Inserido");
        console.log(produtoInserido);
    }
}); */

/* cadastroProdutos.atualizar(1, {nome: "arroz", preco:4.75}, function(err, produto) {
    console.log("Atualizando produto...");
    if(err) {
        console.log(err);
    }
    else {
        console.log("Produto atualizado");
        console.log(produto);
    };
}); */

cadastroProdutos.deletar(3,  function(err, produto) {
    console.log("Deletando produto...");
    if(err) {
        console.log(err);
    }
    else {
        console.log("Produto deletado");
        console.log(produto);
    };
});
