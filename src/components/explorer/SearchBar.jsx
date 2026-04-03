import { REGIONS, SORT_OPTIONS } from '../../constants';

export default function SearchBar({ query, setQuery, region, setRegion, sortBy, setSortBy, total }) {
  return (
    <div className="controls">
      <div className="search-wrap">
        <svg className="search-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M13 13l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <input
          className="search-box"
          type="search"
          placeholder="Buscar país..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          aria-label="Buscar país"
        />
        {query && (
          <button className="search-clear" onClick={() => setQuery('')} aria-label="Limpiar búsqueda">
            ✕
          </button>
        )}
      </div>

      <select
        className="filter"
        value={region}
        onChange={e => setRegion(e.target.value)}
        aria-label="Filtrar por región"
      >
        <option value="">Todas las regiones</option>
        {REGIONS.map(r => <option key={r} value={r}>{r}</option>)}
      </select>

      <select
        className="filter"
        value={sortBy}
        onChange={e => setSortBy(e.target.value)}
        aria-label="Ordenar por"
      >
        {SORT_OPTIONS.map(o => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>

      <span className="results-count" aria-live="polite">{total} países</span>
    </div>
  );
}
