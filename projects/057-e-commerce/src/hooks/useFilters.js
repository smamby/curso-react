import { useContext } from 'react'
import { FiltersContext } from '../context/filters.jsx'

function useFilters () {
    const { filters, setFilters } = useContext(FiltersContext)

    const filterProducts = (products) => {
        return products.filter(product => {
            return (
                product.price < filters.maxPrice && (
                    filters.category === 'all' ||
                    filters.category === product.category
                )
            )
        })
    }

    return { filterProducts, setFilters, selectedCategory: filters.category }

}

export default useFilters