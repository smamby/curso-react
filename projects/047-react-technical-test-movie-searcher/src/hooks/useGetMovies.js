import getNewMovies from '../services/getNewMovies.js'
import { useState, useRef, useMemo, useCallback } from 'react'

export default function useGetMovies ({ query, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const lastSearch = useRef(query)

  const getMovies = useCallback(async ({ query }) => {
    if (query === lastSearch.current) return

    if (!query) return

    try {
      setLoading(true)
      const newMovies = await getNewMovies({ query })
      console.log('newMovies', newMovies)
      if (newMovies && newMovies.length > 0) {
        setMovies(newMovies)
      }
    }
    catch (error) {
      throw new Error('Error searchin movies', error)
    }
    finally {
      setLoading(false)
      lastSearch.current = query
    }
  }, [])

  const sortedMovies = useMemo (() => {
    return sort
    ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
    : movies
  }, [sort, movies])

  return { movies: sortedMovies, loading, getMovies }
}