import { Provider } from "react-redux";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOMClient from "react-dom/client";
import store from "./app/store";
import App from "./App";

const container = document.getElementById("root") as Element;
const root = ReactDOMClient.createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
