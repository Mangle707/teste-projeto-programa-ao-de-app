import "./Home.css";

import Header from "../components/Header";
import CardProd from "../components/CardProd";
import Funcionarios from "../components/Funcionario";
import Footer from "../components/Footer";


function Home({
  usuario,
  carrinho,
  setCarrinho,
  onLogout
}) {


  // =========================
  // PRODUTOS
  // =========================

  const produtos = [

    {imagem: "/IMG/xsalada.jpg",nome: "X-Salada",categoria: "Lanches",descricao: "Pão, hambúrguer, queijo, alface, tomate e maionese.",preco: 18},
    {imagem: "/IMG/xbacon.webp",nome: "X-Bacon",categoria: "Lanches",descricao: "Hambúrguer, bacon crocante, queijo e molho especial.",preco: 22},
    {imagem: "/IMG/xtudo.jpg",nome: "X-Tudo",categoria: "Lanches",descricao: "Hambúrguer duplo, bacon, ovo, queijo, presunto e salada.",preco: 28},
    {imagem: "/IMG/fritas.webp",nome: "Batata Frita",categoria: "Porções",descricao: "Porção de batatas crocantes e salgadas.",preco: 10},
    {imagem: "/IMG/hotdog.webp",nome: "Hot Dog",categoria: "Lanches",descricao: "Pão, salsicha, milho, batata palha e molho.",preco: 17},
    {imagem: "/IMG/coca.webp",nome: "Coca-Cola",categoria: "Bebidas",descricao: "Refrigerante de cola 300ml geladinho.",preco: 6},
    {imagem: "/IMG/agua.png",nome: "Água Crystal",categoria: "Bebidas",descricao: "Água mineral natural 500ml.",preco: 5},
    {imagem: "/IMG/fanta.jpg",nome: "Fanta",categoria: "Bebidas",descricao: "Fanta laranja ou uva 220ml.",preco: 5}

  ];


  // =========================
  // FUNCIONÁRIOS
  // =========================

  const funcionarios = [

    {imagem: "/IMG/stati.png",nome: "Cesar Stati",cargo: "Gerente"},
    {imagem: "/IMG/simone.png",nome: "Simone",cargo: "Cozinheira mirin"},
    {imagem: "/IMG/anderson.png",nome: "Anderson Cidade",cargo: "CEO"},
    {imagem: "/IMG/Donatan.png",nome: "Donathan Ramalho Gonçalves",cargo: "Caixa"},
    {imagem: "/IMG/Alexandre.png",nome: "Alexandre Gaspari",cargo: "Cozinheiro chefe"},
    {imagem: "/IMG/empregados.jpg",nome: "Nosso pessoal de atendimento",cargo: "Empregados"}

  ];


  return (

    <div className="App">

      <div className="home">


        {/* =========================
            CABEÇALHO
        ========================= */}

        <Header

          titulo="Danger Hamburgers"

          subtitulo="O melhor da regiao"

          carrinho={carrinho}

          usuario={usuario}

          onLogout={onLogout}

        />


        {/* =========================
            CONTA DO USUÁRIO
        ========================= */}

        <div className="conta-usuario">

          Olá,{" "}

          <strong>
            {usuario || "Cliente"}
          </strong>

        </div>


        {/* =========================
            PRODUTOS
        ========================= */}

        <CardProd

          produtos={produtos}

          carrinho={carrinho}

          setCarrinho={setCarrinho}

        />


        {/* =========================
            FUNCIONÁRIOS
        ========================= */}

        <Funcionarios

          funcionarios={funcionarios}

        />


        <Footer />


      </div>

    </div>

  );

}


export default Home;