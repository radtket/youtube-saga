import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import App from "./App";
import configureStore from "./store";
import history from "./store/history";

const store = configureStore(history);
const theme = createTheme({});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <CssBaseline />
        <App />
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
