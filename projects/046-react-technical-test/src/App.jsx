import './css/App.css'
import results from './mocks/results.json'
import Movies from './components/Movies.jsx'
import Head from './components/Head.jsx'
import { useState, useCallback } from 'react'
import useNewMovies from './hooks/useNewMovies.js'
import useNewQuery from './hooks/useNewQuery.js'
import debounce from 'just-debounce-it'

export default function App () {
  const [filters, setFilters] =useState({
    year: 1900,
    type: 'movie'
  })

  const [sort, setSort] = useState(false)
  const [input, setInput] = useState('')
  const { query, error } = useNewQuery(input)
  const { movies, loading, getNewMovies } = useNewMovies({ query, sort })

  const debouncedMovies = useCallback (
    debounce((query) => {
      getNewMovies({query})

    }, 600)
    , [getNewMovies]
  )

  const filterMovies = (movies) => {
    console.log(movies)
    return movies.filter( movie => {
      return (
        movie.Year < filters.year && (
          filters.type === 'all' ||
          filters.type === movie.Type
        )
      )
    })
  }


  const handlerSubmit = (event) => {
    event.preventDefault()
    getNewMovies({ query })
  }

  const handlerChange = (event) => {
    const newInput = event.target.value
    setInput(newInput)
    debouncedMovies(newInput)
  }

  const handlerSort = () => {
    setSort(!sort)
    console.log(movies)
  }

  const filteredMovies = filterMovies(movies)

  return (
    <>
      <Head movies={movies} filters={filters} setFilters={setFilters}/>
      <form className='form' onSubmit={handlerSubmit}>
        <label htmlFor="input">Enter a movie title</label>
        <div className="input-elements">
          <input id='input' name='input' onChange={handlerChange}
            style={{borderColor: error ? 'red' : 'transparent'}} />
          <input type='checkbox' onChange={handlerSort} checked={sort}/>
          <button>Search</button>
        </div>
      </form>
      {error && <p style={{color: 'red'}}>{error}</p>}

      <main>
        {
          loading
            ? <p>Loading... </p>
            : <Movies movies={filteredMovies} />
        }
      </main>
    </>
  )
}