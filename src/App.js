import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
 
const App = () => {
 
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AppRouter />
    </BrowserRouter>
  );
}
 
export default App;