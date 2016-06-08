var express = require('express');
var app = express();
app.use(express.static('./'));

var items = [
  { id: 0, heading: 'Item Heading 0', body: 'Body 0' },
  { id: 1, heading: 'Item Heading 1', body: 'Body 1' },
  { id: 2, heading: 'Item Heading 2', body: 'Body 2' },
  { id: 3, heading: 'Item Heading 3', body: 'Body 3' },
  { id: 4, heading: 'Item Heading 4', body: 'Body 4' },
]; 

app.get('/items', function(req, res) {
  res.send(JSON.stringify(items.map(function(item) { return item.id; })));
});

app.get('/items/:id', function(req, res) {
  res.send(JSON.stringify(items[req.params.id]));
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

