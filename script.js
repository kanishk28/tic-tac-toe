// DOM of cells button x and o 

let everyCell = document.querySelectorAll('.cell');
let buttonX = document.getElementById("X-btn");
let buttonO = document.getElementById("O-btn");

// Object of gameboard and players





const playersAll = () => {
    let player1 = "";
    let player2 = "";
    let currentPlayer = "";
}

// button event listeners 
function switchPlayer() {
    currentPlayer = currentPlayer === "X"? "O": "X";
}

buttonX.addEventListener("click", function(){
    player1 = "X";
    player2 = "O";
    currentPlayer = player1;
    buttonX.disabled = true;
    buttonO.disabled = true;
    console.log(player1, player2, currentPlayer);
})

buttonO.addEventListener("click", function(){
    player1 = "O";
    player2 = "X";
    buttonX.disabled = true;
    buttonO.disabled = true;
    currentPlayer = player1;
    console.log(player1, player2, currentPlayer);
})




// win Logic function 


let board = ["", "", "", "", "", "", "", "", ""];

const checkWin = () => {
    const winPatterns = [
      [0, 1, 2], // Rows
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6], // Columns
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8], // Diagonals
      [2, 4, 6]
    ];
  
    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // Return the winner (X or O)
      }
    }
  
    if (board.every(cell => cell !== '')) {
      return 'draw'; // Return 'draw' if all cells are filled and no winner
    }
  
    return null; // Return null if the game is still ongoing
  };
  
  // Function to reset the game board
  const resetBoard = () => {
    board = ['', '', '', '', '', '', '', '', ''];
    everyCell.forEach(cell => cell.innerText = '');
    currentPlayer = player1; // Reset to player1's turn
  };
  
  // Function to handle the end of the game
  const handleEndGame = (result) => {
    if (result === 'draw') {
      alert('Its a draw!');
    } else {
      alert('Player ' + result + ' wins!');
    }
    resetBoard();
  };
  
  // Update the cell click event listener to check for a win or draw after each move
  everyCell.forEach((cell, index) => {
    cell.addEventListener("click", function() {
      if (cell.innerText === "") {
        cell.innerText = currentPlayer;
        board[index] = currentPlayer;
  
        const result = checkWin();
        if (result) {
          handleEndGame(result);
          return;
        }
  
        switchPlayer();
      }
    });
  });


//   reset button 

const resetButton = document.getElementsByClassName("reset-btn");

resetButton.addEventListener('click', function(){
    board = ['', '', '', '', '', '', '', '', ''];
    everyCell.forEach(cell => cell.innerText === '');
    currentPlayer = player1;
})




