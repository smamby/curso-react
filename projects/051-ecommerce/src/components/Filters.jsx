

export default function Filters ({ filters, setFilters, categories }) {

  console.log('filters', filters)

  return (
    <section className="filters">
      <div className="filter-Price">
        <label htmlFor="price">Precios menores de ${filters.maxPrice}</label>
        <input type="range" min='0' max='3000'
                value={filters.maxPrice}
                onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value)})}/>
      </div>
      
      <select name='categories' id ='categories'
              value={filters.category}
              onChange={(e) => setFilters({...filters, category: e.target.value})} >
        <option value={filters.category}> {filters.category }</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </section>
  )
}