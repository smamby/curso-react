import { CartIcon } from './Icons'
import Filters from './Filters'

export default function Head ({ products, filters, setFilters}) {

  const categories = [... new Set(
    ['all', ...products.map(p => p.category)]
      .filter(c => c !== filters.category)
  )]

  return (
    <header>
      <h1>React e-commerce <CartIcon/></h1>
      <Filters filters={filters} setFilters={setFilters} categories={categories} />
    </header>
  )
}
