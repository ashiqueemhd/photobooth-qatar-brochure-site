import { categories } from '../data/catalogue'

function CategoryFilter({ activeCategory, onSelectCategory, searchQuery, onSearchChange, totalCount, filteredCount }) {
  return (
    <div className="filter-wrapper no-print">
      <div className="filter-tabs">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`filter-tab ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => onSelectCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="filter-search-box">
        <div className="search-input-wrapper">
          <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            className="search-input"
            placeholder="Search booth (e.g., 55″, White, Mirror, Vintage)..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          {searchQuery && (
            <button
              type="button"
              className="clear-search-btn"
              onClick={() => onSearchChange('')}
              title="Clear search"
            >
              ×
            </button>
          )}
        </div>
        <div className="filter-counter">
          <span>{filteredCount} of {totalCount} machines</span>
        </div>
      </div>
    </div>
  )
}

export default CategoryFilter
