import { useState, useCallback } from 'react';
import { MAX_SELECTION } from '../constants';

export function useSelection() {
  const [selected, setSelected] = useState([]);

  const toggle = useCallback((country) => {
    setSelected(prev => {
      const alreadyIn = prev.some(c => c.cca3 === country.cca3);
      if (alreadyIn)             return prev.filter(c => c.cca3 !== country.cca3);
      if (prev.length >= MAX_SELECTION) return prev;
      return [...prev, country];
    });
  }, []);

  const remove = useCallback((cca3) => {
    setSelected(prev => prev.filter(c => c.cca3 !== cca3));
  }, []);

  const clear = useCallback(() => setSelected([]), []);

  const isSelected     = useCallback((cca3) => selected.some(c => c.cca3 === cca3),      [selected]);
  const selectionIndex = useCallback((cca3) => selected.findIndex(c => c.cca3 === cca3), [selected]);

  return { selected, toggle, remove, clear, isSelected, selectionIndex };
}
