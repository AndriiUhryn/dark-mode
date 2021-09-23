import React, { useState, createContext } from 'react';

export const DarkModeContext = createContext(null);

export default function App({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark-mode');
    } else {
      document.documentElement.classList.add('dark-mode');
    }
    setDarkMode(!darkMode);
  };

  return (
   <DarkModeContext.Provider
    value={{
      darkMode,
      toggleDarkMode
    }}
   >
     {children}
   </DarkModeContext.Provider>
  );
}
