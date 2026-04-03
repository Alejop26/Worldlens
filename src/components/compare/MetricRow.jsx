import MetricCell from './MetricCell';

export default function MetricRow({ metric, countries }) {
  const vals = countries.map(c => metric.get(c));
  const numericVals = vals.filter(v => typeof v === 'number' && v !== null && !isNaN(v));
  const maxVal = numericVals.length ? Math.max(...numericVals) : 0;
  const minVal = numericVals.length ? Math.min(...numericVals) : 0;

  const getCls = (raw) => {
    if (!metric.numeric || typeof raw !== 'number' || numericVals.length < 2) return '';
    if (metric.lowerBetter) return raw === minVal ? 'best' : raw === maxVal ? 'worst' : '';
    return raw === maxVal ? 'best' : raw === minVal ? 'worst' : '';
  };

  const getPct = (raw) => {
    if (!metric.numeric || typeof raw !== 'number' || maxVal === 0) return 0;
    return Math.round((raw / maxVal) * 100);
  };

  return (
    <div
      className="metric-row"
      style={{ gridTemplateColumns: `160px repeat(${countries.length}, 1fr)` }}
    >
      <div className="metric-label">{metric.label}</div>
      {countries.map((c, i) => (
        <MetricCell
          key={c.cca3}
          value={vals[i]}
          formatted={metric.fmt(vals[i])}
          isNumeric={metric.numeric && typeof vals[i] === 'number' && !isNaN(vals[i])}
          pct={getPct(vals[i])}
          cls={getCls(vals[i])}
        />
      ))}
    </div>
  );
}
