import Header from "./components/Header";
import Login from "./components/Login";
import CardProd from "./components/CardProd";
import Funcionarios from "./components/Funcionario";
import Footer from "./components/Footer";

function App(){
  return(
    <>
      <Header titulo="Lanchonete do Senai"
              subtitulo="O melhor da regiao"/>
      <Login/>
      <CardProd/>
      <Funcionarios/>
      <Footer/>
      </>
  )
}
export default App