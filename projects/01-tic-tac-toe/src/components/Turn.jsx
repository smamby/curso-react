import { Square } from "./Square.jsx";

export const TURNS = {
  X: '❌',
  O: '⭕' 
}

export function TurnModal({ turn }) {
  return (
    <section className="turn">
      <Square isSelected={turn === TURNS.X}>
        {TURNS.X}
      </Square>
      <Square isSelected={turn === TURNS.O}>
        {TURNS.O}
      </Square>
    </section>
  )
}