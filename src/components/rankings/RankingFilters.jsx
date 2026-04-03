import { RANKING_METRICS } from '../../constants/rankingMetrics';

export default function RankingFilters({ activeKey, onSelect }) {
  return (
    <div className="rank-pills">
      {RANKING_METRICS.map(m => (
        <button
          key={m.key}
          className={`rank-pill${activeKey === m.key ? ' active' : ''}`}
          onClick={() => onSelect(m.key)}
          aria-pressed={activeKey === m.key}
        >
          {m.label}
        </button>
      ))}
    </div>
  );
}
