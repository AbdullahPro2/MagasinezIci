import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { ProductProvider } from "./context/productContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </ProductProvider>
  </React.StrictMode>
);
