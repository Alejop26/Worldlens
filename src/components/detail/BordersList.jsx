import { getFlag } from '../../utils/format';

export default function BordersList({ borderCodes, countries }) {
  if (!borderCodes?.length) return null;

  const resolved = borderCodes.map(code => {
    const found = countries.find(c => c.cca3 === code);
    return found ? `${getFlag(found)} ${found.name.common}` : code;
  });

  return (
    <div className="detail-section">
      <div className="section-title">Países fronterizos ({resolved.length})</div>
      <div className="borders-wrap">
        {resolved.map((label, i) => (
          <span key={i} className="border-pill">{label}</span>
        ))}
      </div>
    </div>
  );
}
