var express = require('express');
app = express();

app.get('/', function (req, res) {
res.send('Hello World! 1234567\n');
});

//Para implementar o novo recurso, adicione as seguintes linhas ao app.jsarquivo:

app.get('/mars', function(req, res) {
  res.send('Olá Marte!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

//API Key: 2d4362ecb544a34f74201d1a01372b1d


