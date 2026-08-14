import { useState } from "react";
import "./CardProd.css";

function CardProd({ produtos, carrinho, setCarrinho }) {

  const [listaProdutos, setListaProdutos] = useState(
    produtos.map((produto) => ({
      ...produto,
      quantidade: 0
    }))
  );

  // Adicionar quantidade
  const adicionar = (index) => {
    const lista = [...listaProdutos];

    lista[index].quantidade++;

    setListaProdutos(lista);
  };

  // Remover quantidade
  const remover = (index) => {
    const lista = [...listaProdutos];

    if (lista[index].quantidade > 0) {
      lista[index].quantidade--;
    }

    setListaProdutos(lista);
  };

  // Adicionar produto ao carrinho
  const adicionarCarrinho = (index) => {
    const produto = listaProdutos[index];

    if (produto.quantidade > 0) {

      setCarrinho([
        ...carrinho,
        {
          ...produto
        }
      ]);

      alert(
        `${produto.quantidade} ${produto.nome} adicionado(s) ao carrinho!`
      );

    } else {

      alert(
        `Selecione pelo menos 1 ${produto.nome} antes de adicionar ao carrinho.`
      );

    }
  };

  // Calcular total
  const totalPedido = listaProdutos.reduce(
    (total, produto) =>
      total + produto.preco * produto.quantidade,
    0
  );

  return (
    <>
      <div className="container">

        {listaProdutos.map((produto, index) => (

          <div className="card" key={index}>

            <img
              src={produto.imagem}
              alt={produto.nome}
              className="imagem"
            />

            <h2>{produto.nome}</h2>

            <p>{produto.descricao}</p>

            <h4>
              Preço: R$ {produto.preco.toFixed(2)}
            </h4>

            <h4>
              Quantidade: {produto.quantidade}
            </h4>

            <h4>
              Total do Produto: R${" "}
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

            <button
              className="carrinho"
              onClick={() => adicionarCarrinho(index)}
            >
              Adicionar ao Carrinho
            </button>

          </div>

        ))}

      </div>

      <div className="resumo">

        <h2>Total do Pedido</h2>

        <h3>
          R$ {totalPedido.toFixed(2)}
        </h3>

      </div>
    </>
  );
}

export default CardProd;