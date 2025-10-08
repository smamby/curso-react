

export default function Filters ({ filters, setFilters, categories }) {


  return (
    <div className="filters">
      <div className="input-range">
        Precio menor a:
        <input type="range"
                min={0}
                max={3000}
                value={filters.maxPrice}
                onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value)})}
        /> ${filters.maxPrice}
      </div>
      <select value={filters.category}
              onChange={(e) => setFilters({ ...filters, category: e.target.value})}>
        <option value={filters.category}>{filters.category}</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}

      </select>
    </div>
  )
}