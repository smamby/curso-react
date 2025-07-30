export function isWinner(board) {
  for (let i = 0; i < 9; i++) {
    if (board[i] !==null
      && ((i===0 || i===3 || i===6) && board[i] === board[i+1] && board[i] === board[i+2]
      || board[i] === board[i+3] && board[i] === board[i+6]
      || i===2 && board[2] === board[4] && board[2] === board[6]
      || board[i] === board[i+4] && board[i] === board[i+8])
    ) {
      return true
    } else if (board.every(square => square !== null)) {
      return false // Empate
    }
  }
}
