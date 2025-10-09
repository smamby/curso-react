import { CartIcon } from './Icons'
import Filters from './Filters.jsx'

export default function Head ({
    selectedCategory,
    products,
    setFilters,
    handlerKeyword,
    setKeyword,
    setInputValue
  }) {

    const categories = [...new Set(
      ['all', ...products
        .map(p => p.category)]
        .filter(c => c !== selectedCategory)
    )]


    return (
      <header>
        <h1>React e-commerce <CartIcon/></h1>
        <Filters
          setFilters={setFilters}
          categories={categories}
          handlerKeyword={handlerKeyword}
          setInputValue={setInputValue}
          setKeyword={setKeyword}
        />
      </header>
    )
}