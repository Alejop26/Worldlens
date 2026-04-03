import { useAppContext } from '../context/AppContext';
import { useRankings } from '../hooks/useRankings';
import RankingFilters from '../components/rankings/RankingFilters';
import RankingItem from '../components/rankings/RankingItem';

export default function RankingsView({ countries }) {
  const { openDetail } = useAppContext();
  const { activeKey, setActiveKey, metric, ranked, maxVal } = useRankings(countries);

  return (
    <section aria-label="Rankings de países">
      <RankingFilters activeKey={activeKey} onSelect={setActiveKey} />
      <div className="rank-list" role="list">
        {ranked.map((c, i) => {
          const val = metric.get(c);
          const pct = Math.round((val / maxVal) * 100);
          return (
            <RankingItem
              key={c.cca3}
              country={c}
              position={i}
              value={val}
              formattedValue={metric.fmt(val)}
              pct={pct}
              onClick={openDetail}
            />
          );
        })}
      </div>
    </section>
  );
}
