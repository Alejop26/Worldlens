import { useState, useEffect } from 'react';
import { fetchAllCountries } from '../utils/api';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState(null);

  useEffect(() => {
    let cancelled = false;

    fetchAllCountries()
      .then(data => { if (!cancelled) setCountries(data); })
      .catch(e   => { if (!cancelled) setError(e.message); })
      .finally(  () => { if (!cancelled) setLoading(false); });

    return () => { cancelled = true; };
  }, []);

  return { countries, loading, error };
}
