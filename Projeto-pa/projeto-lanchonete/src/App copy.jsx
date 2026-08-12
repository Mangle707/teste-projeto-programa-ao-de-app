import { useState } from "react";
import Header from "./components/Header";
import Login from "./pages/Login";
import CardProd from "./components/CardProd";
import Funcionarios from "./components/Funcionario";
import Footer from "./components/Footer";

function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controlar o login

  // Função para lidar com o login
  const handleLogin = () => {
    setIsLoggedIn(true); // Atualiza o estado para indicar que o usuário está logado
  };

  return (
    <>
      <div className="App">
        {isLoggedIn ? ( // Verifica se o usuário está logado
          <>
            <Header
              titulo="Lanchonete do Senai"
              subtitulo="O melhor da regiao"
              carrinho={carrinho}
            />
            <CardProd carrinho={carrinho} setCarrinho={setCarrinho} />
            <Funcionarios />
            <Footer />
          </>
        ) : (
          <Login onLogin={handleLogin} /> // Renderiza o componente Login
        )}
      </div>
    </>
  );
}

export default App;