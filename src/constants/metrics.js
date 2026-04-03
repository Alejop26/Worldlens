import { fmtNumber, fmtArea, getLanguages, getCurrencies, getGini, getCapital } from '../utils/format';

export const COMPARE_METRICS = [
  {
    key: 'population',
    label: 'Población',
    get: c => c.population ?? null,
    fmt: fmtNumber,
    numeric: true,
  },
  {
    key: 'area',
    label: 'Área',
    get: c => c.area ?? null,
    fmt: fmtArea,
    numeric: true,
  },
  {
    key: 'density',
    label: 'Densidad',
    get: c => (c.area && c.population) ? c.population / c.area : null,
    fmt: v => v != null ? `${v.toFixed(1)} hab/km²` : '—',
    numeric: true,
  },
  {
    key: 'gini',
    label: 'Índice Gini',
    get: c => getGini(c)?.value ?? null,
    fmt: v => v != null ? `${v}%` : '—',
    numeric: true,
    lowerBetter: true,
  },
  {
    key: 'languages',
    label: 'Idiomas',
    get: c => getLanguages(c),
    fmt: v => v,
    numeric: false,
  },
  {
    key: 'capital',
    label: 'Capital',
    get: c => getCapital(c),
    fmt: v => v,
    numeric: false,
  },
  {
    key: 'region',
    label: 'Región',
    get: c => c.region || '—',
    fmt: v => v,
    numeric: false,
  },
];
