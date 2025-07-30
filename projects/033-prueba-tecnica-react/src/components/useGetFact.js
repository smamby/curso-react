import { getNewFact } from '../service/factRecuest.js';
import { useState, useEffect } from 'react';

export default function useGetNewFact() {
  const [fact, setFact] = useState()

  const factRequest = () => {
    getNewFact()
      .then(newFact => setFact(newFact))
  }

  useEffect(factRequest, [])
  return { fact, factRequest }
}