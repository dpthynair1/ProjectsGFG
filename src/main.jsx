import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../src/components/Landing/style.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/cart-context.jsx";
import { LoginProvider } from "./context/login-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <LoginProvider>
          <App />
        </LoginProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
