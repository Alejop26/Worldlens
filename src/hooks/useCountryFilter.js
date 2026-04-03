import { useState, useMemo } from 'react';

export function useCountryFilter(countries) {
  const [query,  setQuery]  = useState('');
  const [region, setRegion] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const filtered = useMemo(() => {
    let result = [...countries];

    if (query) {
      const q = query.toLowerCase();
      result = result.filter(c =>
        c.name.common.toLowerCase().includes(q) ||
        (c.name.official || '').toLowerCase().includes(q)
      );
    }

    if (region) {
      result = result.filter(c => c.region === region);
    }

    result.sort((a, b) => {
      if (sortBy === 'population') return (b.population || 0) - (a.population || 0);
      if (sortBy === 'area')       return (b.area || 0)       - (a.area || 0);
      return a.name.common.localeCompare(b.name.common);
    });

    return result;
  }, [countries, query, region, sortBy]);

  return { query, setQuery, region, setRegion, sortBy, setSortBy, filtered };
}
