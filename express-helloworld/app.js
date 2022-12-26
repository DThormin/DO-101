var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

//Para implementar o novo recurso, adicione as seguintes linhas ao app.jsarquivo:

app.get('/mars', function(req, res) {
  res.send('Olá Marte!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

