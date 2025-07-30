import { useState, useEffect } from 'react'
import { factRequest } from '../services/FactRequest.js'

export function useGetNewFact () {
  const [fact, setFact] = useState()

  const getNewFact = () => {
    factRequest()
      .then(newFact => setFact(newFact))
  }

  useEffect(getNewFact, [])
  return { fact, getNewFact }
}