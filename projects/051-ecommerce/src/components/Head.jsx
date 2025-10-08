import Filters from './Filters.jsx'

export default function Head ({ products, filters, setFilters}) {

  console.log('head', filters)
  const categories = [ ...new Set(
    ['all', ...products
      .map(p => p.category)]
      .filter(c => c !== filters.category))]

  return (
    <header>
      <h1>React Shop </h1>
      <Filters filters={filters} setFilters={setFilters} categories={categories} />
    </header>
  )
}