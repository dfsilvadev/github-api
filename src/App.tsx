import { ThemeProvider } from "styled-components";

import { BaseRoutes } from "./routes";

import { DefaultTheme, GlobalStyles } from "./styles";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={DefaultTheme}>
        <BaseRoutes />
        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
