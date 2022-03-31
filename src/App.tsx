import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "./components/Theme";
import { AppContainer } from "./App.style";
import { store } from "./store";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <HomePage />
        </AppContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
