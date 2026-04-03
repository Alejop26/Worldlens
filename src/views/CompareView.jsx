import { useAppContext } from '../context/AppContext';
import CompareCountryHeader from '../components/compare/CompareCountryHeader';
import MetricRow from '../components/compare/MetricRow';
import EmptyState from '../components/ui/EmptyState';
import { COMPARE_METRICS } from '../constants/metrics';

export default function CompareView() {
  const { selection } = useAppContext();
  const { selected, remove } = selection;

  if (selected.length < 2) {
    return (
      <EmptyState
        icon="⊕"
        title="Selecciona al menos 2 países"
        subtitle="Ve al Explorador y haz clic en los países que quieres comparar"
      />
    );
  }

  return (
    <section className="compare-view" aria-label="Comparación de países">
      <div
        className="compare-header"
        style={{ gridTemplateColumns: `160px repeat(${selected.length}, 1fr)` }}
      >
        <div aria-hidden="true" />
        {selected.map(c => (
          <CompareCountryHeader key={c.cca3} country={c} onRemove={remove} />
        ))}
      </div>

      <div className="metrics-list" role="table" aria-label="Métricas comparativas">
        {COMPARE_METRICS.map(m => (
          <MetricRow key={m.key} metric={m} countries={selected} />
        ))}
      </div>

      <div className="compare-legend" aria-label="Leyenda">
        <span className="legend-best">■ Mayor valor</span>
        {' · '}
        <span className="legend-worst">■ Menor valor</span>
        {' · Gini: menor = más igualitario'}
      </div>
    </section>
  );
}
