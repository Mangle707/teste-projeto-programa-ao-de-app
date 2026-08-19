import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";
import Pedido from "./pages/Pedido";
import Login from "./pages/Login";


function App() {

  const [carrinho, setCarrinho] = useState([]);


  // =========================
  // LOGIN
  // =========================

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("login") === "true"
  );


  // =========================
  // TIPO DE USUÁRIO
  // =========================

  const [tipoUsuario, setTipoUsuario] = useState(
    localStorage.getItem("tipoUsuario") || ""
  );


  // =========================
  // NOME DO USUÁRIO
  // =========================

  const [usuario, setUsuario] = useState(
    localStorage.getItem("nomeUsuario") || ""
  );


  // =========================
  // LOGIN
  // =========================

  function handleLogin(tipo, nome) {

    localStorage.setItem(
      "login",
      "true"
    );

    localStorage.setItem(
      "tipoUsuario",
      tipo
    );

    localStorage.setItem(
      "nomeUsuario",
      nome
    );


    setIsLoggedIn(true);

    setTipoUsuario(tipo);

    setUsuario(nome);

  }


  // =========================
  // LOGOUT
  // =========================

  function handleLogout() {

    localStorage.removeItem("login");

    localStorage.removeItem("tipoUsuario");

    localStorage.removeItem("nomeUsuario");


    setIsLoggedIn(false);

    setTipoUsuario("");

    setUsuario("");

  }


  return (

    <Routes>


      {/* =========================
          LOGIN
      ========================= */}

      <Route
        path="/login"
        element={
          <Login
            onLogin={handleLogin}
          />
        }
      />


      {/* =========================
          HOME - CLIENTE
      ========================= */}

      <Route
        path="/"
        element={

          isLoggedIn &&
          tipoUsuario === "cliente"

            ?

          <Home
            usuario={usuario}
            carrinho={carrinho}
            setCarrinho={setCarrinho}
            onLogout={handleLogout}
          />

            :

          <Navigate to="/login" />

        }
      />


      {/* =========================
          CARRINHO - CLIENTE
      ========================= */}

      <Route
        path="/carrinho"
        element={

          isLoggedIn &&
          tipoUsuario === "cliente"

            ?

          <Carrinho
            carrinho={carrinho}
            setCarrinho={setCarrinho}
          />

            :

          <Navigate to="/login" />

        }
      />


      {/* =========================
          PEDIDO - FUNCIONÁRIO
      ========================= */}

      <Route
        path="/pedido"
        element={

          isLoggedIn &&
          tipoUsuario === "funcionario"

            ?

          <Pedido
            carrinho={carrinho}
          />

            :

          <Navigate to="/login" />

        }
      />


      {/* =========================
          ROTA INVÁLIDA
      ========================= */}

      <Route
        path="*"
        element={
          <Navigate to="/login" />
        }
      />

    </Routes>

  );

}


export default App;