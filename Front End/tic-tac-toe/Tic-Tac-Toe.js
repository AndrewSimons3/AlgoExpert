"use-strict";

const BOARD_WIDTH = 3;

const WIN_CONDITIONS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

let currentPlayer = 1;
let numMoves = 0;

const gameSquares = document.querySelectorAll('.game-square');
const gameHeading = document.getElementById('game-heading');
const restartButton = document.getElementById('restart-button');

gameSquares.forEach((gameSquare, i) => {
	gameSquare.addEventListener('click', () => {
		const row = Math.floor(i / BOARD_WIDTH);
		const col = i % BOARD_WIDTH;
		makeMove(gameSquare, row, col);
	});
});

function makeMove(gameSquare) {
	gameSquare.textContent = currentPlayer === 1 ? 'X' : 'O';
	gameSquare.disabled = true;
	numMoves++;

	if (didPlayerWin()) {
		gameHeading.textContent = `Player ${currentPlayer} Won!`;
		endGame();
	} else if (numMoves >= BOARD_WIDTH * BOARD_WIDTH) {
		gameHeading.textContent = `Tie Game!`;
		endGame();
	} else {
		currentPlayer = currentPlayer === 1 ? 2 : 1;
		setCurrentPlayerHeading();
	}
}

function didPlayerWin() {
  const relativeText = currentPlayer === 1 ? 'X' : 'O';
  return WIN_CONDITIONS.some(condition => {
    return condition.every(gameSquarePosition => {
      return gameSquares[gameSquarePosition].textContent === relativeText;
    });
  });
}

function endGame() {
  restartButton.style.display = 'block';
  gameSquares.forEach(gameSquare => {
    gameSquare.disabled = true;
  })
}

function setCurrentPlayerHeading() {
  gameHeading.textContent = `Player ${currentPlayer}'s turn!`
}

restartButton.addEventListener('click', restartGame);

function restartGame() {
  currentPlayer = 1;
  numMoves = 0;
  setCurrentPlayerHeading();
  gameSquares.forEach(gameSquare => {
    gameSquare.disabled = false;
    gameSquare.textContent = '';
  });
  restartButton.style.display = 'none';
}
