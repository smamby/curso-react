import './css/App.css'
import { products as initialProducts } from './mocks/products.json'
import Products from './components/Products.jsx'
import Head from './components/Head.jsx'
import { useState } from 'react'

function App () {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    maxPrice: 3000,
    category: 'all'
  })

  const filterProducts = (products) => {
    return products.filter( product => {
      return (
        product.price <= filters.maxPrice && (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Head products={products} filters={filters} setFilters={setFilters} />
      <Products products={filteredProducts} />
    </>
  )
}

export default App
