import './css/App.css'
import Products from "./components/Products.jsx"
import { products as initialProducts } from './mocks/products.json'
import Head from './components/Head.jsx'
import { useState } from 'react'

function App() {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    maxPrice: 3000
  })






  const filterProducts = (products) => {
    return products.filter(product => {
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
      <Head id='head' products={products} filters={filters} setFilters={setFilters} />

      <Products products={filteredProducts} />
    </>
  )
}

export default App
