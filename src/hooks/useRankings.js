import { useState, useMemo } from 'react';
import { RANKING_METRICS } from '../constants/rankingMetrics';
import { RANK_LIMIT } from '../constants';

export function useRankings(countries) {
  const [activeKey, setActiveKey] = useState('population');

  const metric = useMemo(
    () => RANKING_METRICS.find(m => m.key === activeKey),
    [activeKey]
  );

  const ranked = useMemo(() => {
    return countries
      .filter(metric.filter)
      .filter(c => metric.get(c) > 0)
      .sort((a, b) => metric.get(b) - metric.get(a))
      .slice(0, RANK_LIMIT);
  }, [countries, metric]);

  const maxVal = ranked.length ? metric.get(ranked[0]) : 1;

  return { activeKey, setActiveKey, metric, ranked, maxVal };
}
