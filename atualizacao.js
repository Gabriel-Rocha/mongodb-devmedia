const MongoClient = require('mongodb').MongoClient;

const servidor = 'mongodb://localhost:27017/db_devmedia';

MongoClient.connect(servidor, function(erro, db){
    if(erro)
        console.log("Eroo ao estabelecer conexão: " + erro);
    else 
        console.log('Conexão estabelecida com success');

    var colecao = db.collection('clientes');

    colecao.updateOne({codigo : 1}, {$unset : { pontos : 0}}, function(erro, resultado) {
        if(erro)
            console.log("Erro ao inserir documento" + erro);
        else
            console.log("Documento inserido com sucesso")
    });
    
    db.close();
});