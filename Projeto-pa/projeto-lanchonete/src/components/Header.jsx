import { Link } from "react-router-dom";

import "./Header.css";


function Header({
  titulo,
  subtitulo,
  usuario,
  onLogout
}) {


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


          <img
            src="/IMG/Icone.png"
            alt="Logo Danger Hamburgers"
            className="logo"
          />


          <div>

            <h1>{titulo}</h1>

            <h2>{subtitulo}</h2>

          </div>


        </div>

      </header>


      <nav className="menu">


        <Link to="/home">
          Home
        </Link>


        <Link to="/carrinho">
          Carrinho
        </Link>


        {/* PEDIDOS APARECE SOMENTE PARA FUNCIONÁRIO */}

        {usuario?.tipo === "funcionario" && (

          <Link to="/pedido">
            Pedidos
          </Link>

        )}


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