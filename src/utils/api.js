const BASE = 'https://restcountries.com/v3.1';
const FIELDS = 'name,flags,population,area,region,subregion,capital,languages,cca3,gini';

export async function fetchAllCountries() {
  const res = await fetch(`${BASE}/all?fields=${FIELDS}`);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  const data = await res.json();
  return data.sort((a, b) => a.name.common.localeCompare(b.name.common));
}

export async function fetchCountryByCode(code) {
  const res = await fetch(`${BASE}/alpha/${code}?fields=${FIELDS}`);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}
