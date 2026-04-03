import { useCountryFilter } from '../hooks/useCountryFilter';
import { useAppContext } from '../context/AppContext';
import SearchBar from '../components/explorer/SearchBar';
import CountryGrid from '../components/explorer/CountryGrid';

export default function ExplorerView({ countries }) {
  const { selection, openDetail } = useAppContext();
  console.log("selection", selection)
  const { query, setQuery, region, setRegion, sortBy, setSortBy, filtered } = useCountryFilter(countries);

  return (
    <section aria-label="Explorador de países">
      <SearchBar
        query={query}   setQuery={setQuery}
        region={region} setRegion={setRegion}
        sortBy={sortBy} setSortBy={setSortBy}
        total={filtered.length}
      />
      <CountryGrid
        countries={filtered}
        isSelected={selection.isSelected}
        selectionIndex={selection.selectionIndex}
        onSelect={selection.toggle}
        onDetail={openDetail}
      />
    </section>
  );
}
