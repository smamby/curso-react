import { useEffect, useState } from 'react'
import getProducts from '../services/getProducts'

export default function useGetProducts (keyword) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts(keyword)
            .then(res => {
                setProducts(res)
            })
    }, [keyword])

    return products
}