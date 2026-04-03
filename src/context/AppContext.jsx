import { createContext, useContext, useState, useCallback } from 'react';
import { useSelection } from '../hooks/useSelection';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [activeTab, setActiveTab]       = useState('explorer');
  const [detailCountry, setDetailCountry] = useState(null);
  const selection = useSelection();

  const navigateTo = useCallback((tab) => setActiveTab(tab), []);

  const openDetail = useCallback((country) => {
    setDetailCountry(country);
    setActiveTab('detail');
  }, []);

  const addToCompare = useCallback((country) => {
    selection.toggle(country);
    setActiveTab('compare');
  }, [selection]);

  return (
    <AppContext.Provider value={{
      activeTab, navigateTo,
      detailCountry, openDetail,
      addToCompare,
      selection,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useAppContext must be used inside AppProvider');
  return ctx;
}
