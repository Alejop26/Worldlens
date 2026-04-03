export const TABS = [
  { key: 'explorer', label: 'Explorador' },
  { key: 'compare',  label: 'Comparar'   },
  { key: 'rankings', label: 'Rankings'   },
  { key: 'detail',   label: 'Detalle'    },
];

export const REGIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Antarctic'];

export const SORT_OPTIONS = [
  { value: 'name',       label: 'Ordenar: Nombre'    },
  { value: 'population', label: 'Ordenar: Población' },
  { value: 'area',       label: 'Ordenar: Área'      },
];

export const API_FIELDS = [
  'name', 'flags', 'population', 'area', 'region', 'subregion',
  'capital', 'languages', 'currencies', 'timezones', 'borders',
  'gini', 'landlocked', 'unMember', 'continents', 'cca3',
].join(',');

export const MAX_SELECTION = 4;

export const RANK_MEDALS = ['🥇', '🥈', '🥉'];
export const RANK_LIMIT   = 30;
