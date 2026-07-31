import { useState } from "react";
import Carrinho from "./Carrinho.jsx";
import './header.css'

function Header({ titulo, subtitulo, carrinho }) {
    const [mostrarCarrinho, setMostrarCarrinho] = useState(false);
    return (

        <>
        <div className="titulo">
        <h1>{titulo}</h1>
        <h2>{subtitulo}</h2>
          <button className="btnCarrinho" onClick={() => setMostrarCarrinho(!mostrarCarrinho)}>
          Carrinho</button>
          </div>
          {mostrarCarrinho && <Carrinho carrinho={carrinho} />}
        </>
    );
}
export default Header 
//export sem precia estar no final para poder ser exportado