import { Cross } from './Icons'
import { useState, useId } from 'react'
import useFilters from '../hooks/useFilters.js'

export default function Filters ({
  setFilters,
  categories,
  handlerKeyword,
  setKeyword,
  setInputValue
}) {

  const [maxPriceFilter, setMaxPriceFilter] = useState(50000)
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [input, setInput] = useState('')
  const inputKeywordId = useId()
  const inputHTMLKeyword = document.getElementById(inputKeywordId)
  inputHTMLKeyword?.focus()
  const maxPriceFilterId = useId()
  const categoryFilterId = useId()


  return (
    <>
      <div className='search'>
        <form className='keyword-form' onSubmit={handlerKeyword}>
          <input
            type='text'
            placeholder='Buscar por palabra clave'
            name='keyword'
            id={inputKeywordId}
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
              handlerKeyword(e)
            }}
          />
          <button
            id='clear'
            onClick={(e) => {
              e.preventDefault()
              setInput('')
              setInputValue('')
              setKeyword('')
              setFilters(prevState => ({ ...prevState, category: 'all'}))
              setCategoryFilter('all')
              document.getElementById(categoryFilterId).value = {categoryFilter}
              inputHTMLKeyword.focus()
            }}
          >
            <Cross />
          </button>
        </form>
      </div>

      <div className='Filters'>
        <div className='cont-range'>
            <label htmlFor={maxPriceFilterId}>Precios menores de</label>
            <input
              type='range'
              id={maxPriceFilterId}
              min={0}
              max={50000}
              value={maxPriceFilter}
              onChange={(e) => {
                setMaxPriceFilter(Number(e.target.value))
                setFilters(prevState => ({
                  ...prevState, maxPrice: Number(e.target.value)
                }))
              }}
            />
            ${maxPriceFilter}
        </div>

        <div className='contselect'>
          <label htmlFor={categoryFilterId}>Categoria</label>
          <select
            id={categoryFilterId}
            value={categoryFilter}
            onChange={(e) => {
              setCategoryFilter(e.target.value)
              setFilters(prevState => ({
                ...prevState, category: e.target.value
              }))
            }}
          >
            <option value={categoryFilter}>
              {categoryFilter}
            </option>
            {
              categories.map((category, index) => (
                <option key={index} vañue={category}>
                  {category}
                </option>
              ))
            }
          </select>
        </div>
      </div>
    </>
  )
}