import CountryCard from './CountryCard';
import EmptyState from '../ui/EmptyState';

export default function CountryGrid({ countries, isSelected, selectionIndex, onSelect, onDetail }) {
  
  if (countries.length === 0) {
    return (
      <EmptyState
        icon="◌"
        title="Sin resultados"
        subtitle="Prueba con otro nombre o quita los filtros activos"
      />
    );
  }

  return (
    <div className="country-grid">
      {countries.map(c => (
        <CountryCard
          key={c.cca3}
          country={c}
          isSelected={isSelected(c.cca3)}
          selIndex={selectionIndex(c.cca3)}
          onSelect={onSelect}
          onDetail={onDetail}
        />
      ))}
    </div>
  );
}
