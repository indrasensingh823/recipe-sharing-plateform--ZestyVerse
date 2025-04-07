import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CookiesProvider } from "react-cookie"; // 👈 Add this

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CookiesProvider> {/* 👈 Wrap App inside this */}
      <App />
    </CookiesProvider>
  </React.StrictMode>
);