import { useState } from "react";
import "./CardProd.css";

function Card({ nome, descricao, preco }) {
  const [quantidade, setQuantidade] = useState(0);

  const adicionar = () => {
    setQuantidade(quantidade + 1);
  };

  const remover = () => {
    if (quantidade > 0) {
      setQuantidade(quantidade - 1);
    }
  };

  return (
    <div className="card">
      <h2>{nome}</h2>

      <p>{descricao}</p>

      <h4>Preço: R$ {preco.toFixed(2)}</h4>

      <h4>Quantidade: {quantidade}</h4>

      <h4>Preço Total: R$ {(preco * quantidade).toFixed(2)}</h4>

      <div className="botoes">
        <button className="adicionar" onClick={adicionar}>
          Adicionar
        </button>

        <button className="remover" onClick={remover}>
          Remover
        </button>
      </div>
    </div>
  );
}

function CardProd() {
  const produtos = [
    {
      nome: "X-Salada",
      descricao: "Pão, hambúrguer, queijo, alface, tomate e maionese.",
      preco: 18,
    },
    {
      nome: "X-Bacon",
      descricao: "Hambúrguer, bacon crocante, queijo e molho especial.",
      preco: 22,
    },
    {
      nome: "X-Tudo",
      descricao:
        "Hambúrguer duplo, bacon, ovo, queijo, presunto e salada.",
      preco: 28,
    },
    {
      nome: "Batata Frita",
      descricao: "Porção de batatas crocantes e salgadas.",
      preco: 12,
    },
    {
      nome: "Hot Dog",
      descricao: "Pão, salsicha, milho, batata palha e molho.",
      preco: 10,
    },
  ];

  return (
    <div className="container">
      {produtos.map((produto, index) => (
        <Card
          key={index}
          nome={produto.nome}
          descricao={produto.descricao}
          preco={produto.preco}
        />
      ))}
    </div>
  );
}

export default CardProd;