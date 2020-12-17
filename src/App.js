import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme/theme';
import { GlobalStyles } from './theme/global';
import { useDarkMode } from './theme/useDarkMode';
import Toggle from './components/toggle/Toggle';
 
const App = () => {
 
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  };

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <AppRouter />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </ThemeProvider>
    </BrowserRouter>
  );
}
 
export default App;