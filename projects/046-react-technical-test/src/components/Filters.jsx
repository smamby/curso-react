export default function Filters ({ filters, setFilters, types }) {
  return (
    <div className="filters">
      Before
      <input type="range"
        min={1900}
        max={2025}
        value={filters.year}
        onChange={event => setFilters({...filters, year: (event.target.value)})}
      /> {filters.year}
    </div>
  )
}