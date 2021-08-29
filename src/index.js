import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import App from "./App";
import configureStore from "./store";
import history from "./store/history";

const store = configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <ConnectedRouter history={history}>
        <CssBaseline />
        <App />
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
