import { Provider } from "react-redux";
import React from "react";
import ReactDOMClient from "react-dom/client";
import store from "./app/store";
import App from "./App";
import "./index.css";

const container = document.getElementById("root") as Element;
const root = ReactDOMClient.createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
