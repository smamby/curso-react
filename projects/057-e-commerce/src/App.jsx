import './css/App.css'
import { useState, useCallback } from 'react'
import { CartIcon } from './components/Icons'
import Products from './components/Products'
import Filters from './components/Filters'
import { products as initialProducts} from './mocks/products.json'
import useGetProducts from './hooks/useGetProducts'
import useFilters from './hooks/useFilters'
import debounce from 'just-debounce-it'

function App () {
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
        setKeyword(value)
    }

    const filteredProducts = filterProducts(products)

    return (
        <>
            <h1>E-commerce <CartIcon /></h1>
            <Filters products={products} 
                     handlerKeyword={handlerKeyword}
                     setFilters={setFilters} 
                     setKeyword={setKeyword} 
                     selectedCategory={selectedCategory}
                     debouncedSetKeyword={debouncedSetKeyword}
            />
            {
                filteredProducts.length > 0
                    ? <Products products={filteredProducts} />
                    : <p>No se encontraron productos.</p>
            }
        </>
    )
}

export default App