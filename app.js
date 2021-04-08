const MongoClient = require('mongodb').MongoClient;

const servidor = 'mongodb://localhost:27017/db_devmedia';

MongoClient.connect(servidor, function(erro, db){
    if(erro)
        console.log("Eroo ao estabelecer conexão: " + erro);
    else 
        console.log('Conexão estabelecida com success');

    var cliente = {
        codigo: 1,
        nome: 'Joel Rodriguez',
        endereco: {
            logradouro: 'Rua Afonso Lopes Vieira',
            numero: '123',
            bairro: 'Bairro Cachoeirinha',
            cidade: 'São Paulo',
            estado: 'SP'
        },
        status: 'Ativo',
        pontos: 10
    }

    var colecao = db.collection('clientes');

    colecao.insertOne(cliente, function(erro, result) {
        if(erro)
            console.log("Erro ao inserir documento" + erro);
        else
            console.log("Documento inserido com sucesso")
    });
    
    db.close();
});