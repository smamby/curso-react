import getMovies from '../services/getMovies.js'
import { useState, useRef, useMemo, useCallback } from 'react'

export default function useGetMovies ({ query, sort }) {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const previusSearch = useRef(query)

  const getNewMovies = useCallback(({ query }) => {
    if (query === previusSearch.current) return
    previusSearch.current = query

    if (!query) return

    try {
      setLoading(true)
      getMovies({ query })
        .then(newMovies => {
          setMovies(newMovies)
        })
    }
    catch (error) {
      throw new Error('Error searchig movies', error)
    }
    finally {
      setLoading(false)
    }
  }, [] )

  const sortedMovies = useMemo(() => {
    return sort
    ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
    : movies
  }, [sort, movies])

  return { movies: sortedMovies, loading, getNewMovies}
}