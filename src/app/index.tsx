import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import CustomTheme from "../Theme";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
const App = () => {

  return (
    <BrowserRouter>
      <ThemeProvider theme={CustomTheme}>
        <CssBaseline />
        <Navigation />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
