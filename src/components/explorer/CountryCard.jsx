import { getFlag, fmtNumber } from '../../utils/format';

export default function CountryCard({ country, isSelected, selIndex, onSelect, onDetail }) {
  return (
    <article
      className={`country-card${isSelected ? ' selected' : ''}`}
      onClick={() => onSelect(country)}
      onDoubleClick={() => onDetail(country)}
      title="Clic: seleccionar · Doble clic: ver detalle"
    >
      {isSelected && (
        <span className="sel-badge" aria-label={`Seleccionado #${selIndex + 1}`}>
          {selIndex + 1}
        </span>
      )}
      <div className="card-flag" aria-hidden="true"><img src={getFlag(country)}></img></div>
      <div className="card-name">{country.name.common}</div>
      <div className="card-region">
        {country.region || '—'}
        {country.subregion ? ` · ${country.subregion}` : ''}
      </div>
      <div className="card-pop">{fmtNumber(country.population)} hab.</div>
    </article>
  );
}
