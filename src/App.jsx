import { useCountries } from './hooks/useCountries';
import { useAppContext } from './context/AppContext';

import AppHeader    from './components/layout/AppHeader';
import AppNav       from './components/layout/AppNav';
import SelectionBar from './components/layout/SelectionBar';
import Loader       from './components/ui/Loader';
import ErrorMessage from './components/ui/ErrorMessage';

import ExplorerView from './views/ExplorerView';
import CompareView  from './views/CompareView';
import RankingsView from './views/RankingsView';
import DetailView   from './views/DetailView';

function AppContent({ countries }) {
  const { activeTab, navigateTo, selection } = useAppContext();
  const totalPop = countries.reduce((sum, c) => sum + (c.population || 0), 0);

  const VIEW_MAP = {
    explorer: <ExplorerView countries={countries} />,
    compare:  <CompareView />,
    rankings: <RankingsView countries={countries} />,
    detail:   <DetailView countries={countries} />,
  };

  return (
    <>
      <div className="app">
        <AppHeader countryCount={countries.length} totalPopulation={totalPop} />
        <AppNav
          activeTab={activeTab}
          onNavigate={navigateTo}
          compareCount={selection.selected.length}
        />
        <main>{VIEW_MAP[activeTab]}</main>
      </div>

      <SelectionBar
        selected={selection.selected}
        onRemove={selection.remove}
        onCompare={() => navigateTo('compare')}
      />
    </>
  );
}

export default function App() {
  const { countries, loading, error } = useCountries();

  if (loading) return <div className="app"><Loader message={`Cargando países...`} /></div>;
  if (error)   return <div className="app"><ErrorMessage message={error} /></div>;

  return <AppContent countries={countries} />;
}
