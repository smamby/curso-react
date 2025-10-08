import { CartIcon } from './Icons.jsx'
import Filters from './Filters.jsx'

function Head ({ products, filters, setFilters}) {

  const categories = [...new Set(
    ['all', ...products
      .map(p => p.category)]
      .filter(c => c !== filters.category)
  )]
  console.log(categories)

  return (
    <header>
      <h1>React e-commerce <CartIcon /> </h1>
      <Filters filters={filters} setFilters={setFilters} categories={categories} />
    </header>
  )
}

export default Head