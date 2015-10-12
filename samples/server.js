var express = require('express');
var bodyParser = require('body-parser')

var app = express();

app.use( bodyParser.json() );
app.use(express.static('./'));

var fruits = ['Apples', 'Bananas', 'Limes'];
app.get('/014%20httpget/fruits', function(req, res) {
  res.send(JSON.stringify(fruits));
});

app.get('/015%20fruits', function(req, res) {
  res.send(JSON.stringify(fruits));
});

app.post('/015%20fruits', function(req, res) {
  fruits.push(req.body.fruit);
  res.sendStatus(200);
});

app.delete('/015%20fruits/:id', function(req, res) {
  fruits.splice(req.params.id, 1);
  res.sendStatus(200);
})

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

