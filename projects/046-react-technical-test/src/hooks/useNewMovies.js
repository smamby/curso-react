import { useState, useRef, useMemo, useCallback } from 'react'
import getMovies from '../services/getMovies.js'

export default function useNewMovies ({ query, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const lastQuery = useRef(query)

  const getNewMovies = useCallback(({ query }) => {
    try {
      if (!query || query === '') return
      if (lastQuery.current === query) return
      setLoading(true)
      getMovies({ query })
        .then(res => setMovies(res))
    }
    catch (error) {
      throw new Error('Problemas con la peticion al servidor', error)
    }
    finally {
      setLoading(false)
      lastQuery.current = query
    }
  }, [])

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies]?.sort((a, b) => a.Title.localeCompare(b.Title))
      : movies
  })

  return { movies: sortedMovies, loading, getNewMovies}
}