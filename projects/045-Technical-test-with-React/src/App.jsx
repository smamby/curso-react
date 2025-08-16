import './css/App.css'
import { useState, useCallback } from 'react'
import Movies from './components/Movies.jsx'
import results from './mocks/results.json'
import useGetMovies from './hooks/useGetMovies.js'
import useNewQuery from './hooks/useNewQuery.js'
import debounce from 'just-debounce-it'

export default function App () {
  const [sort, setSort] = useState(false)
  const [input, setInput] = useState('')
  const { query, error } = useNewQuery(input)
  const { movies, getMovies, loading } = useGetMovies({ query, sort })

  const debouncedGetMovies = useCallback(
    debounce(search => {
      console.log('debounced', search)
      getMovies({ query: search })
    }, 600)
    , [getMovies]
  )

  const handlerSubmit = (event) => {
    event.preventDefault()
    getMovies({ query })
  }

  const handlerChange = (event) => {
    const newInput = event.target.value
    if (newInput === ' ') return
    setInput(newInput)
    debouncedGetMovies(newInput)
  }

  const handlerSort = () => {
    setSort(!sort)
  }

  return (
    <>
      <h1>Movie Searcher with React</h1>
      <form className='form' onSubmit={handlerSubmit}>
        <label htmlFor="input">Enter a Movie Name</label>
        <div className='input-elements'>
          <input name='input'
            onChange={handlerChange} value={input}
            style={{border: '2px solid transparent',
                    borderColor: error ? 'red' : 'transparent'
            }}
          />
          <input type='checkbox' className='checkbox' onChange={handlerSort} checked={sort}/>
          <button>Search</button>
        </div>
      </form>
      {error && <p style={{ color: 'red'}}>{error}</p>}

      <main>
        {
          loading
            ? <p>Loading...</p>
            : <Movies movies={ movies } />
        }
      </main>
    </>
  )
}