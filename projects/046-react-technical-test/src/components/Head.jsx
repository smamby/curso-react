import Filters from './Filters.jsx'

export default function Head ({ movies, filters, setFilters}) {

  const types = [...new Set(
    ['all', ...movies.map(movie => movie.type)]
    .filter(t => t !== filters.type)
  )]

  return (
    <header>
      <h1>Searcher Movies with React 🎦</h1>
      <Filters filters={filters} setFilters={setFilters} types={types} />
    </header>
  )
}