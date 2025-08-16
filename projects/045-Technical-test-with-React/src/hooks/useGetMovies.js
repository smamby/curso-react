import { useState, useRef, useMemo, useCallback } from 'react'
import getFromApi from '../services/getFromApi.js'

export default function useGetMovies ({ query, sort}) {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const previusSearch = useRef(query)

  const getMovies = useCallback( async ({ query }) => {
    if (query === previusSearch.current) return
    previusSearch.current = query

    if (!query) return

    try {
      setLoading(true)
      const newMovies = await getFromApi({query})
      setMovies(newMovies)
    }
    catch (err) {
      throw new Error ('Error searching movies', err)
    }
    finally {
      setLoading(false)
    }
  }, [])


  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [movies, sort])

    return { movies: sortedMovies, getMovies, loading }
}