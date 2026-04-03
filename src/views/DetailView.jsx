import { useAppContext } from '../context/AppContext';
import CountryHero from '../components/detail/CountryHero';
import StatCard from '../components/detail/StatCard';
import InfoRow from '../components/detail/InfoRow';
import BordersList from '../components/detail/BordersList';
import TimezonesList from '../components/detail/TimezonesList';
import EmptyState from '../components/ui/EmptyState';
import { fmtNumber, fmtArea, getGini, getLanguages, getCurrencies, getCapital } from '../utils/format';

export default function DetailView({ countries }) {
  const { detailCountry, addToCompare } = useAppContext();

  if (!detailCountry) {
    return (
      <EmptyState
        icon="◎"
        title="Ningún país seleccionado"
        subtitle="Haz doble clic en cualquier país del Explorador o haz clic en un ranking"
      />
    );
  }

  const c = detailCountry;
  const gini    = getGini(c);
  const density = c.area ? (c.population / c.area).toFixed(1) : null;

  return (
    <article className="detail-view" aria-label={`Detalle de ${c.name.common}`}>
      <CountryHero country={c} onAddToCompare={addToCompare} />

      <div className="stat-grid">
        <StatCard label="Población"      value={fmtNumber(c.population)}                         accent="accent-blue"  />
        <StatCard label="Área"           value={fmtArea(c.area)}                                                        />
        <StatCard label="Densidad"       value={density ? `${density} hab/km²` : '—'}                                  />
        <StatCard label="Índice Gini"    value={gini ? `${gini.value}% (${gini.year})` : '—'}   accent="accent-green" />
        <StatCard label="Zonas hor."     value={c.timezones?.length ?? '—'}                                             />
        <StatCard label="Fronteras"      value={c.borders?.length ?? 0}                                                 />
      </div>

      <div className="detail-sections">
        <div className="detail-section">
          <div className="section-title">Datos generales</div>
          <InfoRow label="Capital"  value={getCapital(c)}    />
          <InfoRow label="Idiomas"  value={getLanguages(c)}  />
          <InfoRow label="Moneda"   value={getCurrencies(c)} />
          <InfoRow label="Región"   value={[c.region, c.subregion].filter(Boolean).join(' · ')} />
        </div>

        <BordersList borderCodes={c.borders} countries={countries} />
        <TimezonesList timezones={c.timezones} />
      </div>
    </article>
  );
}
