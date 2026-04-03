import { getFlag } from '../../utils/format';

export default function CompareCountryHeader({ country, onRemove }) {
  return (
    <div className="compare-country-head">
      <span className="chflag" aria-hidden="true"><img src={getFlag(country)}></img></span>
      <div>
        <div className="chname">{country.name.common}</div>
        <div className="chsub">{country.region}</div>
      </div>
      <button
        className="ch-remove"
        onClick={() => onRemove(country.cca3)}
        aria-label={`Quitar ${country.name.common} de la comparación`}
      >
        ✕
      </button>
    </div>
  );
}
