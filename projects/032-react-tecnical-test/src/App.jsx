import './css/style.css'
import { useGetNewFact } from './components/getFact.js'
import { useGetImageUrl } from './components/getCatImage.js'

export default function App () {
  const { fact, getNewFact } = useGetNewFact ()
  const { imageUrl } = useGetImageUrl({ fact })

  function handleNewFactRequest () {
    getNewFact()
  }

  return (
    <>
      <h1>React Tecnical Test</h1>
      <h2>Facts and Cats</h2>
      <section>
        <button onClick={handleNewFactRequest}>Get a new fact</button>
        {fact && <p>{fact}</p>}
        <img src={imageUrl} alt='cat image obteined from cataas.com' />
      </section>
    </>
  )
}
