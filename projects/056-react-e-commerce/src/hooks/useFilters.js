import { useContext } from "react"
import { FiltersContext } from "../context/filters"

function useFilters () {
  // const [filters, setFilters] = useState({
  //   maxPrice: 50000,
  //   category: 'all'
  // })
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