import { useState, useEffect, useRef } from 'react'

export default function useNewQuery (input) {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const firstInput = useRef(true)

  useEffect(() => {
    if(!input || input === '') return

    if (firstInput.current) {
      firstInput.current = input === ''
      return
    }

    if (input.match(/^\d/)) {
      setError('The movie name cannot begin with a number')
      return
    }
    if (input.length < 4) {
      setError('The movie name must be more than four character')
      return
    }
    if (input.startsWith(' ')) {
      setError('The movie name cannot begin with a space')
      return
    }
    setError(null)
    setQuery(input)

  }, [input])

  return { query, error }
}