import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";
import Pedido from "./pages/Pedido";
import Login from "./pages/Login";

function App() {

  const [carrinho, setCarrinho] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Routes>

      <Route
        path="/login"
        element={<Login onLogin={handleLogin} />}
      />

      <Route
        path="/"
        element={
          isLoggedIn ? (
            <Home
              carrinho={carrinho}
              setCarrinho={setCarrinho}
            />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route
        path="/carrinho"
        element={
          isLoggedIn ? (
            <Carrinho
              carrinho={carrinho}
              setCarrinho={setCarrinho}
            />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route
        path="/pedido"
        element={
          isLoggedIn ? (
            <Pedido carrinho={carrinho} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

    </Routes>
  );
}

export default App;