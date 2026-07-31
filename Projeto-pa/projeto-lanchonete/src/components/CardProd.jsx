import { useState } from "react";
import "./CardProd.css";

//mudar as imagens aqui e arrumar para aparecerem
function CardProd({ carrinho, setCarrinho }) {
  const [produtos, setProdutos] = useState([
    {
    imagem: "/IMG/xsalada.jpg",
    nome: "X-Salada",
    descricao: "Pão, hambúrguer, queijo, alface, tomate e maionese.",
    preco: 18,
    quantidade: 0
    },
    {
      imagem: "/IMG/xbacon.webp",//mudar a imagem novamente aqui
      nome: "X-Bacon",
      descricao: "Hambúrguer, bacon crocante, queijo e molho especial.",
      preco: 22,
      quantidade: 0,
    },
    {
      imagem: "/IMG/xtudo.jpg",//mudar a imagem novamente aqui
      nome: "X-Tudo",
      descricao: "Hambúrguer duplo, bacon, ovo, queijo, presunto e salada.",
      preco: 28,
      quantidade: 0,
    },
    {
      imagem: "/IMG/fritas.webp",//mudar a imagem novamente aqui
      nome: "Batata Frita",
      descricao: "Porção de batatas crocantes e salgadas.",
      preco: 12,
      quantidade: 0,
    },
    {
      imagem: "/IMG/hotdog.webp",//mudar a imagem novamente aqui
      nome: "Hot Dog",
      descricao: "Pão, salsicha, milho, batata palha e molho.",
      preco: 10,
      quantidade: 0,
    },
    {
      imagem: "/IMG/coca.webp",//mudar a imagem novamente aqui
      nome: "Coca-Cola",
      descricao: "refrigerante de cola 300ml geladinho.",
      preco: 5,
      quantidade: 0,
    },
    {
      imagem: "/IMG/agua.png",//mudar a imagem novamente aqui
      nome: "Garrafa de agua crystal",
      descricao: "Água mineral natural 500ml.",
      preco: 5,
      quantidade: 0,
    },
    {
      imagem: "/IMG/fanta.jpg",//mudar a imagem novamente aqui
      nome: "fanta laranja ou uva 220ml",
      descricao: "escolha um do dois sabores de fanta 220ml.",
      preco: 5,
      quantidade: 0,
    },
  ]);

  const adicionar = (index) => {
    const lista = [...produtos];
    lista[index].quantidade++;
    setProdutos(lista);
  };

  const remover = (index) => {
    const lista = [...produtos];

    if (lista[index].quantidade > 0) {
      lista[index].quantidade--;
    }

    setProdutos(lista);
  };
  const adicionarCarrinho = (index) => {
    const produto = produtos[index];
  
    if (produto.quantidade > 0) {
      setCarrinho([...carrinho, { ...produto }]);
  
      alert(
        `${produto.quantidade} ${produto.nome} adicionado(s) ao carrinho!`
      );
    } else {
      alert(`Selecione pelo menos 1 ${produto.nome} antes de adicionar ao carrinho.`);
    }
  };

  const totalPedido = produtos.reduce(
    (total, produto) => total + produto.preco * produto.quantidade,
    0
  );

  return (
    <>
      <div className="container">
        {produtos.map((produto, index) => (
          <div className="card" key={index}>
            <img src={produto.imagem} alt={produto.nome} className="imagem" />
            <h2>{produto.nome}</h2>

            <p>{produto.descricao}</p>

            <h4>Preço: R$ {produto.preco.toFixed(2)}</h4>

            <h4>Quantidade: {produto.quantidade}</h4>

            <h4>
              Total do Produto: R$
              {(produto.preco * produto.quantidade).toFixed(2)}
            </h4>

            <div className="botoes">
              <button
                className="adicionar"
                onClick={() => adicionar(index)}
              >
                Adicionar
              </button>

              <button
                className="remover"
                onClick={() => remover(index)}
              >
                Remover
              </button>
             
            </div>
            <button className="carrinho"onClick={() => adicionarCarrinho(index)}>Adicione ao Carrinho </button>
          </div>
        ))}
      </div>

      <div className="resumo">
        <h2>Total do Pedido</h2>
        <h3>R$ {totalPedido.toFixed(2)}</h3>
      </div>
    </>
  );
}

export default CardProd;
