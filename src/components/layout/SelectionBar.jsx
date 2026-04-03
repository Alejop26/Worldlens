import { getFlag } from '../../utils/format';

export default function SelectionBar({ selected, onRemove, onCompare }) {
  if (!selected.length) return null;

  return (
    <div className="selection-bar" role="region" aria-label="Países seleccionados">
      <span className="sel-label">Seleccionados:</span>
      <div className="sel-pills">
        {selected.map(country => (
          <div key={country.cca3} className="sel-pill">
            <span aria-hidden="true"><img src={getFlag(country)}></img></span>
            {country.name.common}
            <button
              className="sel-pill-rm"
              onClick={() => onRemove(country.cca3)}
              aria-label={`Quitar ${country.name.common}`}
            >
              ✕
            </button>
          </div>
        ))}
      </div>
      <button
        className="compare-btn"
        onClick={onCompare}
        disabled={selected.length < 2}
      >
        Comparar {selected.length} países →
      </button>
    </div>
  );
}
