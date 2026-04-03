import { getFlag } from '../../utils/format';
import { RANK_MEDALS } from '../../constants';

export default function RankingItem({ country, position, value, formattedValue, pct, onClick }) {
  const medal = RANK_MEDALS[position] ?? `#${position + 1}`;

  return (
    <div
      className={`rank-item pos-${position + 1}`}
      onClick={() => onClick(country)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onClick(country)}
      aria-label={`${country.name.common}: ${formattedValue}`}
    >
      <div className="rank-pos">{medal}</div>
      <div className="rank-flag" aria-hidden="true"><img src={getFlag(country)}></img></div>
      <div className="rank-info">
        <div className="rank-name">{country.name.common}</div>
        <div className="rank-region">{country.region}</div>
        <div className="rank-bar-wrap">
          <div className="rank-bar" style={{ width: `${pct}%` }} />
        </div>
      </div>
      <div className="rank-val">{formattedValue}</div>
    </div>
  );
}
