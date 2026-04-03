import { fmtNumber, getGini } from '../utils/format';

export const RANKING_METRICS = [
  {
    key: 'population',
    label: 'Población',
    get: c => c.population || 0,
    fmt: fmtNumber,
    filter: () => true,
  },
  {
    key: 'area',
    label: 'Área',
    get: c => c.area || 0,
    fmt: v => `${v.toLocaleString()} km²`,
    filter: c => c.area > 0,
  },
  {
    key: 'density',
    label: 'Densidad',
    get: c => (c.area ? c.population / c.area : 0),
    fmt: v => `${v.toFixed(1)} hab/km²`,
    filter: c => c.area > 0,
  },
  {
    key: 'gini',
    label: 'Índice Gini',
    get: c => getGini(c)?.value ?? 0,
    fmt: v => `${v}%`,
    filter: c => !!getGini(c),
  },
  {
    key: 'languages',
    label: 'Idiomas',
    get: c => Object.keys(c.languages || {}).length,
    fmt: v => `${v} idiomas`,
    filter: () => true,
  },
];
