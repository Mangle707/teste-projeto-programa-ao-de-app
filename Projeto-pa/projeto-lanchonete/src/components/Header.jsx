import { Link } from "react-router-dom";

import "./Header.css";

function Header({ titulo, subtitulo, onLogout }) {

  const tentarLogin = () => {

    const desejaLogin = window.confirm(
      "Você já está logado. Deseja fazer login novamente?"
    );

    if (desejaLogin) {
      onLogout();
    }
  };

  return (
    <>
      <header>
        <div className="titulo">
          <h1>{titulo}</h1>
          <h2>{subtitulo}</h2>
        </div>
      </header>

      <nav className="menu">

        <Link to="/">
          Home
        </Link>

        <Link to="/carrinho">
          Carrinho
        </Link>

        <Link to="/pedido">
          Pedido
        </Link>

        <button
          className="link-login"
          onClick={tentarLogin}
        >
          Login
        </button>

      </nav>
    </>
  );
}

export default Header;