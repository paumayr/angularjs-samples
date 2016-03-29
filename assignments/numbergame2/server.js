var express = require('express');
var app = express();
app.use(express.static('./'));

var games = [];
app.post('/newgame', function(req, res) {
  var newGame = {
    id: games.length,
    theNumber: Math.floor(Math.random() * 100),
    guessCount: 0,
    startTime: new Date().getTime()
  };
  
  games.push(newGame);
  res.send({ id: newGame.id, guessCount: newGame.guessCount });
});

app.get('/try/:id/:guess', function(req, res) {

  var gameId = req.params.id;
  var guess = req.params.guess;

  if (gameId >= 0 && gameId < games.length && guess >= 0 && guess <= 100 ) {
    var game = games[gameId];
    game.guessCount++;
    
    if (game.theNumber == guess) {
      console.log('game ' + game.id + ': finished!');
      game.endTime = new Date().getTime();
      game.finished = true;
      res.send({ result: 'correct', guessCount: game.guessCount, theNumber: game.theNumber });
    } else if (guess > game.theNumber) {
      console.log('game ' + game.id + ': ' + guess + ' is too high!');
      res.send({ result: 'toohigh', guessCount: game.guessCount });
    } else if (guess < game.theNumber) {
      console.log('game ' + game.id + ': ' + guess + ' is too low!');
      res.send({ result: 'toolow', guessCount: game.guessCount });
    }
  } else {
    res.sendStatus(400);
  }
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

