import { useState } from 'react';

export function useTheme() {
  const [isLight, setIsLight] = useState(false);

  const toggle = () => {
    setIsLight(prev => {
      document.body.classList.toggle('light', !prev);
      return !prev;
    });
  };

  return [isLight, toggle];
}
