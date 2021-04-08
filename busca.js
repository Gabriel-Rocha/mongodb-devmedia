const MongoClient = require('mongodb').MongoClient;

const servidor = 'mongodb://localhost:27017/db_devmedia';

MongoClient.connect(servidor, function(erro, db){
    if(erro)
        console.log("Eroo ao estabelecer conexão: " + erro);
    else 
        console.log('Conexão estabelecida com success');

    var colecao = db.collection('clientes');

    colecao.find({status: 'Ativo'}).toArray(function(erro, documentos){
        documentos.forEach(function(doc) {
            console.log("_______________________");
            console.log("Codigo: " + doc.codigo);
            console.log("Nome: " + doc.nome);
            console.log("Status: " + doc.status);
        }, this);
    });
    
    db.close();
});