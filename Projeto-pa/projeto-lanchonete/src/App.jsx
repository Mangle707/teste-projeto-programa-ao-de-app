import { useState } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import CardProd from "./components/CardProd";
import Funcionarios from "./components/Funcionario";
import Footer from "./components/Footer";




function App(){
  const [carrinho, setCarrinho] = useState([]);
  return(
    <>
    <div className="App">
      <Header titulo="Lanchonete do Senai"
              subtitulo="O melhor da regiao"
              carrinho={carrinho}/>
      <Login/>
      <CardProd carrinho={carrinho}
                setCarrinho={setCarrinho}/>
      <Funcionarios/>
      <Footer/>
      </div>
      </>
  )
}
export default App