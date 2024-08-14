import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Foods } from "./components/Foods";
import { Cart } from "./pages/Cart";
import { AuthLogin } from "./pages/AuthLogin";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/foods"
          element={<Foods />}
        />
        <Route
          path="/cart"
          element={<Cart />}
        />
        <Route
          path="/auth/login"
          element={<AuthLogin />}
        />
      </Routes>
    </>
  );
}

export default App;
