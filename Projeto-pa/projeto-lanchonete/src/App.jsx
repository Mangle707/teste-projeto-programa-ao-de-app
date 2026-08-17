import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";
import Pedido from "./pages/Pedido";
import Login from "./pages/Login";
import EsqueciSenha from "./pages/EsqueciSenha";

function App() {

  const [carrinho, setCarrinho] = useState([]);

  // Verifica se já estava logado
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("login") === "true"
  );

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("login", "true");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("login");
  };

  return (
    <Routes>

      {/* LOGIN */}
      <Route
        path="/login"
        element={
          <Login onLogin={handleLogin} />
        }
      />
      {/*ESQUECI SENHA*/}
      <Route
        path="/esqueci-senha"
         element={<EsqueciSenha />}
       />

      {/* HOME */}
      <Route
        path="/"
        element={
          isLoggedIn ? (
            <Home
              carrinho={carrinho}
              setCarrinho={setCarrinho}
              onLogout={handleLogout}
            />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* CARRINHO */}
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

      {/* PEDIDO */}
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