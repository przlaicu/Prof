import { createContext, useState } from 'react';
import FunctionalContext from './FunctionalContext';

export const ThemeContext = createContext();

export default function Theme() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme(!darkTheme);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <FunctionalContext />
    </ThemeContext.Provider>
  );
}
