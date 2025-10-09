import getProducts from '../services/getProducts.js'
import { useState, useEffect } from 'react'

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