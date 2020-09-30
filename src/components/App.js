import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "../store";
import RootApp from "./RootApp";

render(
  <Provider store={store}>
    <RootApp />
  </Provider>,
  document.getElementById("root")
);