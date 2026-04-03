import ProgressBar from '../ui/ProgressBar';

export default function MetricCell({ value, formatted, isNumeric, pct, cls }) {
  return (
    <div className="metric-cell">
      <div className={`metric-val ${cls}`}>{formatted}</div>
      {isNumeric && pct > 0 && <ProgressBar pct={pct} variant={cls} />}
    </div>
  );
}
