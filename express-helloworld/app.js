var express = require('express');
app = express();
var resposta;

app.get('/', function (req, res) {
    response = 'This is version 2 of the app.' + '\n';

    //envia a resposta para o cliente
    res.enviar(resposta);

});

//Para implementar o novo recurso, adicione as seguintes linhas ao app.jsarquivo:

app.get('/mars', function(req, res) {
  res.send('Olá Marte!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

