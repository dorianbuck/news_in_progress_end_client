import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "semantic-ui-css/semantic.min.css";
import "./styles/index.css";
import { Provider } from "react-redux"
import configureStore from "./state/store/configureStore";

const store = configureStore()

window.store = store

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
