import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";
import Pedido from "./pages/Pedido";
import Login from "./pages/Login";

function App() {

  const [carrinho, setCarrinho] = useState([]);

  // Verifica se já estava logado
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("login") === "true"
  );

  const handleLogin = () => {
    setIsLoggedIn(true);

    // Guarda o login no navegador
    localStorage.setItem("login", "true");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);

    // Remove o login
    localStorage.removeItem("login");
  };

  return (
    <Routes>

      <Route
        path="/login"
        element={
          isLoggedIn ? (
            <Navigate to="/" />
          ) : (
            <Login onLogin={handleLogin} />
          )
        }
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