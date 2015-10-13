function setupBoard() {
	var board = document.getElementsByClassName('gameboard')[0];
	var rows = board.getElementsByTagName('tr');
	for(var r = 0; r < rows.length; r++) {
		var row = rows[r];
		var fields = row.getElementsByTagName('td')
		for(var c = 0; c < fields.length; c++) {
			fields[c].innerHTML = '';
			fields[c].setAttribute('onclick', 'setField(' + c + ',' + r + ')');
		}
	}
}

var game = [
	[null, null, null],
	[null, null, null],
	[null, null, null]
];

var winner = null;

function hasWon() {
	var rowCheck = [
		game[0][0] == game[0][1] && game[0][0] == game[0][2],
		game[1][0] == game[1][1] && game[1][0] == game[1][2],
		game[2][0] == game[2][1] && game[2][0] == game[2][2]   	
	];
	
	var colCheck = [
		game[0][0] == game[1][0] && game[0][0] == game[2][0],
		game[0][1] == game[1][1] && game[0][1] == game[2][1],
		game[0][2] == game[1][2] && game[0][2] == game[2][2]
	];
	
	var diagCheck = [
		game[0][0] == game[1][1] && game[0][0]== game[2][2],
		game[2][0] == game[1][1] && game[2][0]== game[0][2]
	];
	
	for (var i = 0; i < 3; i++) {
		if (rowCheck[i] && game[i][0]) {
			return game[i][0];
		}
		
		if (colCheck[i] && game[0][i]) {
			return game[0][i];
		}
	}
	
	for (var i = 0; i < 2; i++) {
		if (diagCheck[i] && game[1][1]) {
			return game[1][1];
		}
	}
	
	return null;
}

function getField(x, y) {
	var board = document.getElementsByClassName('gameboard')[0];
	var row = board.getElementsByTagName('tr')[y];
	return row.getElementsByTagName('td')[x];
}

function checkWinner() {
	var w = hasWon();
	if (w) {
		winner = w;
		var elem = document.getElementsByClassName('winnermsg')[0];
		elem.innerHTML = winner + ' has won the game!';
	}  
}

var turn = 'X';
function setField(x, y) {
	if (!game[y][x] && !winner) {
		getField(x, y).innerHTML = turn;
		game[y][x] = turn;
		turn = turn == 'X' ? 'O' : 'X';
		checkWinner();
	}
}

setupBoard();

