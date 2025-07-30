import { Square } from "./Square"

export function WinnerModal({ winner, turn, resetGame }) {
  if (winner == null) return null

  const winnerText =winner === false
              ? 'Empate'
              : `El ganador es ${turn}`

  return (
    <section className="winner">
      <div className="text">
          { winnerText }

        <header className="win">
          {winner && <Square>{turn}</Square>}
        </header>
        <footer>
          <button onClick={resetGame}>Reiniciar</button>
        </footer>
      </div>
    </section>
  )
}
