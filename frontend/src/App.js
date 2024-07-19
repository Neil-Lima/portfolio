import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Rotas from './routes/Rotas';

function App() {
  return (
    <ThemeProvider>
      <Rotas />
    </ThemeProvider>
  );
}

export default App;
