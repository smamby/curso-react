import './css/App.css'
import { useState, useCallback } from 'react'
import { products as initialProducts } from './mocks/products.json'
import useGetProducts from './hooks/useGetProducts.js'
import useFilters from './hooks/useFilters.js'
import Products from './components/Products.jsx'
import Head from './components/Head.jsx'
import debounce from 'just-debounce-it'
import { FiltersContext } from './context/filters.jsx'



function App () {
  const [inputValue, setInputValue] = useState('')
  const [keyword, setKeyword] = useState('')
  const { filterProducts, setFilters, selectedCategory } = useFilters()
  const products = useGetProducts(keyword)

  const debouncedSetKeyword = useCallback(
    debounce((key) => {
      setKeyword(key)
    }, 900)
    , []
  )

  const handlerKeyword = (e) => {
    const value = e.target.value
    setInputValue(value)
    debouncedSetKeyword(value)
  }

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Head products={products}
            setFilters={setFilters}
            selectedCategory={selectedCategory}
            handlerKeyword={handlerKeyword}
            setKeyword={setKeyword}
            setInputValue={setInputValue}
      />
      {
        filteredProducts.length > 0
          ? <Products products={filteredProducts} />
          : <p>No hay productos que coincidan con la búsqueda.</p>
      }


    </>
  )
}

export default App