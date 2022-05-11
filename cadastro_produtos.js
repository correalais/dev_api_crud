//const Client = require('pg').Client;
const {Client} = require('pg');

const conexao = {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '080194', 
    database: 'crud_produtos'
};

function inserir(produto, callback){

    const cliente = new Client(conexao);
    cliente.connect();
    const sql = "INSERT INTO produtos (nome, preco) VALUES ($1, $2)";
    const values = [produto.nome, produto.preco];
    cliente.query(sql, values, 
        function (err, res) {
            if(err) {
               callback(err.message, undefined);
               //console.log(err.stack)
            }
            else if (res.rows && res.rows.length > 0) {
                let produtos = res.rows;
                //console.log(produtos);
                callback(undefined, produtos);     
            }
            cliente.end();
        } 
    )

    /* cliente.query(sql, values, 
        function (err, res) {
            if(err) {
               // callback(err.message, undefined);
               console.log(err.stack)
            }
            else if (res.rows && res.rows.length > 0) {
                let produtos = res.rows;
                console.log(produtos);
                //callback(undefined, produtos);     
            }
            cliente.end();
        } */
    

}




function listar(callback) {
    const cliente = new Client(conexao);
    cliente.connect();
    
    const sql = "SELECT * FROM produtos";
    cliente.query(sql, 
        function (erro, res) {
            if(erro) {
                callback(erro.message, undefined);
            }
            else {
                let produtos = res.rows;
                callback(undefined, produtos);     
            }
            cliente.end();
        }
    )    
}

function buscarPorId(id, callback){
    /*

    const cliente = new Client(conexao);
    cliente.connect();
    
    const sql = 'SELECT * FROM produtos WHERE id = ' + id;
    cliente.query(sql, 
        function (erro, res) {
            if(erro) {
                callback(erro.message, undefined);
            }
            else {
                let produtos = res.rows[id];
                callback(undefined, produtos);     
            }
            cliente.end();
        }
    )   
    */

    const cliente = new Client(conexao);
    cliente.connect();
    
    const sql = 'SELECT * FROM produtos WHERE id = $1';
    const values = [id]
    cliente.query(sql, values, 
        function (err, res) {
            if(err) {
                callback(err.message, undefined);
            }
            else if (res.rows && res.rows.length > 0) {
                let produtos = res.rows;
                callback(undefined, produtos);     
            } else {
                console.log('Produto não encontrado.')
            }
            cliente.end();
        }
    )   
   
    
}


function atualizar(id,produtoAlterado) {
}

function deletar(id) {
}

module.exports = {
    inserir, listar, buscarPorId, atualizar, deletar
}