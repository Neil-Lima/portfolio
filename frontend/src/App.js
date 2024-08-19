import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Rotas from "./routes/Rotas";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeContextProvider } from "./context/ThemeContext";


function App() {
  return (
    <ThemeContextProvider>
      <Rotas />
    </ThemeContextProvider>
  );
}

export default App;
