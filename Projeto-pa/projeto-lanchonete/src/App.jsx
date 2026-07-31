import { useState } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import CardProd from "./components/CardProd";
import Funcionarios from "./components/Funcionario";
import Footer from "./components/Footer";
import Contador from "./components/Contador";



function App(){
  const [carrinho, setCarrinho] = useState([]);
  return(
    <>
      <Header titulo="Lanchonete do Senai"
              subtitulo="O melhor da regiao"
              carrinho={carrinho}/>
      <Login/>
      <CardProd carrinho={carrinho}
                setCarrinho={setCarrinho}/>
      <Contador/>
      <Funcionarios/>
      <Footer/>
      
      </>
  )
}
export default App