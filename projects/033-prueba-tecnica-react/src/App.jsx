import { useState, useEffect } from 'react'
import useGetNewFact from './components/useGetFact.js'
import { useGetImageUrl } from './components/useGetImage.js'
import './css/style.css'

export default function App () {
  const { fact, factRequest } = useGetNewFact()
  const { imageUrl } = useGetImageUrl({ fact })

  function handleClickRefresh () {
    factRequest()
  }

  return (
    <>
      <h1>React technical test</h1>
      <h2>Facts & Cats</h2>

      <section>
        <button onClick={handleClickRefresh}>
          Refresh
        </button>
        {fact && <p>{fact}</p>}
        <img src={imageUrl} alt='Cat image with fact text' />
      </section>
    </>
  )
}
