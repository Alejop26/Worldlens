import { TABS } from '../../constants';

export default function AppNav({ activeTab, onNavigate, compareCount }) {
  return (
    <nav className="tabs" aria-label="Navegación principal">
      {TABS.map(t => (
        <button
          key={t.key}
          className={`tab${activeTab === t.key ? ' active' : ''}`}
          onClick={() => onNavigate(t.key)}
          aria-current={activeTab === t.key ? 'page' : undefined}
        >
          {t.label}
          {t.key === 'compare' && compareCount > 0 && (
            <span className="tab-badge" aria-label={`${compareCount} seleccionados`}>
              {compareCount}
            </span>
          )}
        </button>
      ))}
    </nav>
  );
}
