var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Site operações matemáticas');
});

app.post('/soma', function (req, res) {
    function soma(a, b) {
        return a + b;
    }
    var body = req.body;
    var resultado = soma(body.a, body.b);
    
    res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
});

app.post('/subtracao', function (req, res) {
  function subtracao(a, b) {
      return a - b;
  }
  var body = req.body;
  var resultado = subtracao(body.a, body.b);
  
  res.send(`O resultado da subtração de ${body.a} e ${body.b} é ${resultado}`);
});

app.post('/divisao', function (req, res) {
  function divisao(a, b) {
      return a / b;
  }
  var body = req.body;
  var resultado = divisao(body.a, body.b);
  
  res.send(`O resultado da divisão de ${body.a} e ${body.b} é ${resultado}`);
});

app.post('/multiplicacao', function (req, res) {
  function multiplicao(a, b) {
      return a * b;
  }
  var body = req.body;
  var resultado = multiplicao(body.a, body.b);
  
  res.send(`O resultado da multiplicação de ${body.a} e ${body.b} é ${resultado}`);
});

var port = 3001;

// iniciando o processo do servidor
app.listen(port, function() {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});