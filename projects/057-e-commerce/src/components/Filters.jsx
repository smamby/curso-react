import { Cross } from './Icons'
import { useState } from 'react'

function Filters ({ products, 
                    handlerKeyword,
                    setFilters,
                    setKeyword,
                    selectedCategory,
                    debouncedSetKeyword
}) {
    const [inputValue, setInputValue] = useState('')
    const [maxPriceFilter, setMaxPriceFilter] = useState(50000)
    const [categoryFilter, setCategoryFilter] = useState('all')
   

    const categories = [ ...new Set(
        ['all', ...products
            .map(p => p.category)]
            .filter(c => c !== selectedCategory)
    )]


    return (
        <section className='searcher-and-filters'>
            <div className='searcher'>
                <form className='Keyword-form' onSubmit={handlerKeyword}>
                    <label htmlFor="keyword">Busca un producto</label>
                    <input 
                        type="text"
                        placeholder='motorcycle, phone, photo...' 
                        name='keyword'
                        id='keyword'
                        onChange={(e) => {
                            setInputValue(e.target.value)
                            debouncedSetKeyword(e.target.value)
                        }}
                        value={inputValue}
                    />
                    <button
                        id='clear'                        
                        onClick={(e) => {
                            e.preventDefault()
                            setInputValue('')
                            setKeyword('')
                            setFilters(prevState => ({ ...prevState, category: 'all'}))
                            document.getElementById('keyword').value = {categoryFilter}
                        }}
                    >
                        <Cross />
                    </button>
                </form>
            </div>

            <div className='filters'>
                <div className='price-range'>
                    <p>Precio menor a </p>
                    <input 
                        type="range" 
                        min='0'
                        max='50000'
                        value={maxPriceFilter}
                        onChange={(e) => {
                            setFilters(prevState => ({ 
                                ...prevState, maxPrice: Number(e.target.value)
                            }))
                            setMaxPriceFilter(Number(e.target.value))
                        }}
                    />
                    ${maxPriceFilter}
                </div>
                <div className='category-cont'>
                    <label htmlFor="categories-select">Categorias</label>
                    <select 
                        name="categories-select" 
                        id="categories-select"
                        onChange={(e) => {
                            setFilters(prevState => ({
                                ...prevState, category: e.target.value
                            }))
                            setCategoryFilter(e.target.value)
                        }}
                        value={categoryFilter}
                    >
                        <option value={categoryFilter}                        >
                            {categoryFilter}
                        </option>
                        {
                            categories.map((category, index) => (
                                <option key={index} value={category}>
                                    {category}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </div>
        </section>
    )
}

export default Filters