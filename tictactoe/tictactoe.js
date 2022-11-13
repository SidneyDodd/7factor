const readline = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O'
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];

function joinOr(arr, delimiter = ', ', word = 'or') {
  switch (arr.length) {
    case 0:
      return '';
    case 1: 
      return `${arr[0]}`;
    case 2:
      return arr.join(` ${word} `);
    default:
      return arr.slice(0, arr.length -1).join(delimiter) + 
             `${delimiter}${word} ${arr[arr.length - 1]}`;
  }
}

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`)
console.log("");
console.log('     |     |');
console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
console.log('     |     |');
console.log('------------------')
console.log('     |     |');
console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
console.log('     |     |');
console.log('------------------')
console.log('     |     |');
console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
console.log('     |     |');
console.log("");
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square += 1) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function prompt(message) {
  console.log(`=>${message}`);
}

function emptySquares(board){
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return false;
}

function findAtRiskSquare(line, board, marker) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }

  return null;
}

function playerChoosesSquare(board) {
  let square;


  while (true) {
    prompt(`Choose a square ${joinOr(emptySquares(board))}:`);
    square = readline.question().trim();

    if (emptySquares(board).includes(square)) {
      break;
    } else {
      prompt("That's not a valid choice.") ;
      }
    }

    board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let square;
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, HUMAN_MARKER);
    if (square) break;
  }

  if (!square) {
    for (let index = 0; index < WINNING_LINES.length; index++) {
      let line = WINNING_LINES[index];
      square = findAtRiskSquare(line, board, COMPUTER_MARKER);
      if (square) break;
    }
  }

  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
}

function someoneWon(board) {
  return detectWinner(board);
}

function detectWinner(board) {

  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

    return null;
}

while (true) { 
let board = initializeBoard();

while (true) {
  displayBoard(board);

  playerChoosesSquare(board);
  if (someoneWon(board) || boardFull(board)) break;

  computerChoosesSquare(board);
  displayBoard(board);

if (someoneWon(board) || boardFull(board)) break;
}

displayBoard(board);

if (someoneWon(board)) {
  prompt(`${detectWinner(board)} won!`);
} else {
  prompt("It's a tie!");
}

prompt('Would you like to play again? y/n')
let answer = readline.question().toLowerCase()[0];
if (answer !== 'y') break;
}

prompt('Thank you for playing Tic Tac Toe!')