import './css/App.css'
import results from './mocks/results.json'
import Movies from './components/Movies.jsx'
import { useState, useCallback } from 'react'
import useGetMovies  from './hooks/useGetMovies.js'
import useNewQuery from './hooks/useNewQuery.js'
import debounce from 'just-debounce-it'

export default function App () {
  const [sort, setSort] = useState(false)
  const [input, setInput] = useState('')
  const {query, error} =  useNewQuery(input)
  const { movies, loading, getNewMovies } = useGetMovies({ query, sort })

  const debouncedGetMovies = useCallback(
    debounce(query => {
      getNewMovies({ query: query})
    }, 600)
    ,[getNewMovies]
  )

  const handlerSubmit = (event) => {
    event.preventDefault()
    getNewMovies({ query })
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

  // useEffect(()=> {
  //   console.log('sort App:', sort)
  // },[sort])

  return (
    <>
      <h1>Movie Searcher with React</h1>
      <form className='form' onSubmit={handlerSubmit}>
        <label htmlFor="input">Enter a movie title</label>
        <div className="input-elements">
          <input style={{border: '2px solid transparent',
            borderColor: error ? 'red' : 'transparent'
          }}
              value={input}
              name='input' onChange={handlerChange}
              placeholder='Matrix, Batman ...'/>
          <input type='checkbox' onChange={handlerSort} checked={sort} />
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