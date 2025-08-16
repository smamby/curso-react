import { useState, useEffect } from 'react'

const FACT_URL = 'https://catfact.ninja/fact'
const IMAGE_URL = 'https://cataas.com/cat/says/'
const PARAMS = '?fontSize=40&fontColor=orange'

export default function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  const getFact = async () => {
    const response = await fetch(FACT_URL)
    const data = await response.json()
    return data.fact
  }
  const refreshFactState = () => {
    getFact()
      .then(newFact => setFact(newFact))
  }
  useEffect(refreshFactState, [])


  function handlerClickRefresh () {
    refreshFactState()
  }

  useEffect(() => {
    if (!fact) return
    const treefirstWord = fact.split(' ', 3).join(' ')
    fetch(IMAGE_URL + treefirstWord + PARAMS)
      .then(image => {
        setImageUrl(image.url)
      })
  }, [fact])

  return (
    <>
      <h1>React technical test</h1>
      <h2>Facts & Cats</h2>

      <section>
        <button onClick={handlerClickRefresh}>Refresh</button>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt='' />}
      </section>
    </>
  )
}