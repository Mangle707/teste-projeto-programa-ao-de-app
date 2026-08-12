import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";
import Pedido from "./pages/Pedido";
import Login from "./pages/Login";
function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/pedido" element={<Pedido />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;