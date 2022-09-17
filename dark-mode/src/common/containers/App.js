import React from 'react';
import { ThemeProvider } from '../../common/contexts/themeContext';

export default function App({ children }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}
