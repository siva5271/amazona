import React, { createContext, useEffect, useState } from 'react';
export const ModeContext = createContext();

function useModeToggler(key, initialValue) {
  const [value, setValue] = useState(() => {
    if (localStorage) {
      const persistedVal = localStorage.getItem(key);
      return persistedVal !== null ? persistedVal : initialValue;
    }
  });
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);
  return [value, setValue];
}

export function ModeWrapper({ children }) {
  const [isDark, setDark] = useModeToggler('isDark', false);
  const toggleMode = () => {
    const updatedValue = !isDark;
    setDark(updatedValue);
  };
  return (
    <ModeContext.Provider value={{ isDark, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
}
