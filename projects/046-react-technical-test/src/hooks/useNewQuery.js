import { useState, useEffect , useRef } from 'react'

export default function useNewQuery (input) {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const firstInput = useRef(true)

  useEffect(() => {
    if (firstInput.current) {
      firstInput.current = input === ''
      return
    }
    if (input.match(/^\d/)) {
      setError('Movie title cannot begin with a number')
      return
    }
    if (input.startsWith(' ')) {
      setError('Movie title cannot begin with a number')
      return
    }
    if (input.length < 4) {
      setError('Movie title cannot begin with a number')
      return
    }
    setError(null)
    setQuery(input)
  }, [input])

  return { query, error }
}