import { useState } from 'react'
import confetti from "canvas-confetti";
import { isWinner } from "./logic/board.js";
import { WinnerModal } from "./components/WinnerModal.jsx";
import { TurnModal, TURNS } from "./components/Turn.jsx";
import { Board } from "./components/board.jsx";



function App() {
  const [board, setBoard] = useState(
    Array(9).fill(null)
  )

  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)


  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const updateBoard = (index) => {
    if (board[index]) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    console.log(newBoard)
    let hasWin = isWinner(newBoard)
    console.log(`${turn} WIN: ${hasWin}`)

    if (hasWin) {
      setWinner(hasWin)
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      })
      console.log(`El ganador es: ${turn}`)
    } else if (hasWin === false) {
      setWinner(false) // Empate
      console.log('Empate')
    }
    if (hasWin === undefined) {
      const newturn = turn === TURNS.X ? TURNS.O : TURNS.X
      setTurn(newturn)
    }
  }

  return (
    <>
      <main className="board">
        <h1>Tic Tac Toe</h1>
        <button onClick={resetGame}>Reiniciar</button>

        <Board
          board={board}
          updateBoard={updateBoard}>
        </Board>

        <TurnModal
          turn={turn}>
        </TurnModal>

        <WinnerModal
          resetGame={resetGame}
          winner={winner}
          turn={turn}>
        </WinnerModal>
      </main>
    </>
  )
}

export default App