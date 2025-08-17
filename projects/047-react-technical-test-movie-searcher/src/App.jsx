import './css/App.css'
import results from './mocks/results.json'
import { useState, useEffect, useCallback } from 'react'
import Movies from './components/Movies.jsx'
import useNewQuery from './hooks/useNewQuery.js'
import useGetMovies from './hooks/useGetMovies.js'
import debounce from 'just-debounce-it'


export default function App () {
  const [sort, setSort] = useState(false)
  const [input, setInput] = useState('')
  const { query, error } = useNewQuery(input)
  const { movies, loading, getMovies } = useGetMovies({ query, sort })

  const debouncedMovies = useCallback(
    debounce(query => {
      getMovies({query: query})
    }, 500)
    , [getMovies]
  )

  const handlerSubmit = (event) => {
    event.preventDefault()
    console.log('handlerSubmit')
    getMovies({query})
  }

  const handlerChange = (event) => {
    const newInput = event.target.value
    if (newInput === ' ') return
    setInput(newInput)
    debouncedMovies(newInput)
  }

  const handlerSort = () => {
    setSort(!sort)
  }

  useEffect(() => {

    console.log('change sort or movies')
  }, [getMovies])

  return (
    <>
      <h1>Movie Searcher with React</h1>
      <form className='form' onSubmit={handlerSubmit}>
        <label htmlFor="input">Enter a movie's title</label>
        <div className="input-elements">
          <input name="input" onChange={handlerChange} value={input}
            style={{
              border: '2px solid transparent',
              borderColor: error ? 'red' : 'transparent'
            }}
          />
          <input type='checkbox' checked={sort} onChange={handlerSort}/>
          <button>Search</button>
        </div>
      </form>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <main>
        {
          loading
            ? <p>Loading ...</p>
            : <Movies movies={ movies } />
        }
      </main>
    </>
  )
}