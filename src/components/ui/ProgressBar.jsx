export default function ProgressBar({ pct, variant = '' }) {
  return (
    <div className="bar-wrap">
      <div className={`bar-fill ${variant}`} style={{ width: `${pct}%` }} />
    </div>
  );
}
