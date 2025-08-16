import { useState, useEffect, useRef } from 'react'

export default function useNewQuery (input) {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const firstInput = useRef(true)

  useEffect(() => {
    if (!input || input === '') return

    if (firstInput.current) {
      firstInput.current = input === ''
      setError(null)
      return
    }

    if (input.match(/^\d/)) {
      setError('The movie name cannot begin with a number')
      return
    }
    if (input.startsWith(' ')) {
      setError('The movie name cannot begin with a space')
      return
    }
    if (input.length < 4) {
      setError('the movie name must be longer than four character')
      return
    }
    setError(null)
    setQuery(input)

  }, [input])

  return { query, error}
}