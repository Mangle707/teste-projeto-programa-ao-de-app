import { Link } from "react-router-dom";


import './header.css'

function Header({ titulo, subtitulo}) {

    return (

        <>
        <header>
        <div className="titulo">
        <h1>{titulo}</h1>
        <h2>{subtitulo}</h2>
        </div>
         
          </header>
          <nav className="menu">
            <Link to ="/">Home</Link>
            <Link to ="/carrinho">Carrinho</Link>
            <Link to ="/pedido">Pedido</Link>
            <Link to ="/login">Login</Link>
          </nav>
        </>
    );
}
export default Header 
//export precia estar no final para poder ser exportado