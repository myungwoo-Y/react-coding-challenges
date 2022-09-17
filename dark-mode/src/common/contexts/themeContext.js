import React, { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext({ state: { darkMode: false }});

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [state, setState] = useState({ darkMode: false });

  const setDarkMode = (darkMode) => {
    const htmlTags = document.getElementsByTagName('html');

    if (htmlTags.length > 0) {
      const htmlTag = htmlTags[0];
      console.log(htmlTag)
      if (darkMode) {
        htmlTag.classList.add('dark-mode');
        return void setState({ darkMode });
      } 
      htmlTag.classList.remove('dark-mode');
    }

    setState({ darkMode });
  }

  return (
    <ThemeContext.Provider value={{ state, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}
