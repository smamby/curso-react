import { useState, useEffect } from 'react'
import getProducts from '../services/getProducts.js'

export default function useGetProducts (keyword) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts(keyword)
      .then(res => {
        setProducts(res.products)
      })
  }, [keyword])

  return products
}