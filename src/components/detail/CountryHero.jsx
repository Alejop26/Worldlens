import { getFlag } from '../../utils/format';
import Badge from '../ui/Badge';

export default function CountryHero({ country, onAddToCompare }) {
  return (
    <div className="detail-hero">
      <div className="hero-flag" aria-hidden="true"><img src={getFlag(country)}></img></div>
      <div className="hero-info">
        <h1 className="hero-name">{country.name.common}</h1>
        <p className="hero-official">{country.name.official}</p>
        <div className="hero-badges">
          {country.region    && <Badge variant="accent">{country.region}</Badge>}
          {country.subregion && <Badge>{country.subregion}</Badge>}
          {country.unMember  && <Badge variant="green">ONU</Badge>}
          {country.landlocked && <Badge>Sin litoral</Badge>}
          {(country.continents || []).map(x => <Badge key={x}>{x}</Badge>)}
        </div>
      </div>
      <button className="add-compare-btn" onClick={() => onAddToCompare(country)}>
        + Agregar a comparación
      </button>
    </div>
  );
}
