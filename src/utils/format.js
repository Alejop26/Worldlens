export function fmtNumber(n) {
  if (!n && n !== 0) return '—';
  if (n >= 1e9) return (n / 1e9).toFixed(2) + 'B';
  if (n >= 1e6) return (n / 1e6).toFixed(1) + 'M';
  if (n >= 1e3) return (n / 1e3).toFixed(0) + 'K';
  return n.toLocaleString();
}

export function fmtArea(n) {
  if (!n) return '—';
  return n.toLocaleString() + ' km²';
}

export function fmtDensity(pop, area) {
  if (!area || !pop) return '—';
  return (pop / area).toFixed(1) + ' hab/km²';
}

export function getFlag(country) {
  return country?.flags?.png || '🏳';
}

export function getLanguages(country) {
  return Object.values(country?.languages || {}).join(', ') || '—';
}

export function getCurrencies(country) {
  return Object.entries(country?.currencies || {})
    .map(([, v]) => `${v.name}${v.symbol ? ` (${v.symbol})` : ''}`)
    .join(', ') || '—';
}

export function getGini(country) {
  if (!country?.gini) return null;
  const entries = Object.entries(country.gini);
  if (!entries.length) return null;
  entries.sort((a, b) => b[0] - a[0]);
  return { year: entries[0][0], value: entries[0][1] };
}

export function getCapital(country) {
  return (country?.capital || []).join(', ') || '—';
}
