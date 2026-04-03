export default function TimezonesList({ timezones }) {
  if (!timezones?.length) return null;

  return (
    <div className="detail-section">
      <div className="section-title">Zonas horarias ({timezones.length})</div>
      <div className="tz-wrap">
        {timezones.map(tz => (
          <span key={tz} className="tz-pill">{tz}</span>
        ))}
      </div>
    </div>
  );
}
