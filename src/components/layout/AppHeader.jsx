import { fmtNumber } from '../../utils/format';

export default function AppHeader({ countryCount, totalPopulation }) {
  return (
    <header className="header">
      <div className="logo-wrap">
        <div className="logo">World<span>Lens</span></div>
        <div className="tagline">// restcountries.com v3.1 · country intelligence</div>
      </div>
      {countryCount > 0 && (
        <div className="header-stats">
          <div className="hstat">
            <div className="hstat-n">{countryCount}</div>
            <div className="hstat-l">países</div>
          </div>
          <div className="hstat">
            <div className="hstat-n">{fmtNumber(totalPopulation)}</div>
            <div className="hstat-l">población global</div>
          </div>
        </div>
      )}
    </header>
  );
}
