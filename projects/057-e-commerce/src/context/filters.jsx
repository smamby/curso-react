import { useState, createContext } from "react"

export const FiltersContext = createContext()

export function FiltersProvider ({ children }) {
    const [filters, setFilters] = useState({
        maxPrice: 50000,
        category: 'all'
    })

    return (
        <FiltersContext.Provider
            value={{ filters, setFilters}}
        >
            {children}
        </FiltersContext.Provider>
    )
}