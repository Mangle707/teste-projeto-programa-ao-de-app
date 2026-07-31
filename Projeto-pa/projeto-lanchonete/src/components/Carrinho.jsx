import "./Carrinho.css";

function Carrinho({ carrinho }) {
  const total = carrinho.reduce(
    (soma, item) => soma + item.preco * item.quantidade,
    0
  );

  const pagar = () => {
    if (carrinho.length === 0) {
      alert("O carrinho está vazio!");
    } else {
      alert(`Pagamento realizado!\nTotal: R$ ${total.toFixed(2)}`);
    }
  };

  return (
    <div className="menuCarrinho">
      <h2 className="h2Carrinho">Meu Carrinho</h2>

      {carrinho.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <>
          {carrinho.map((item, index) => (
            <div className="itemCarrinho" key={index}>
              <h3>{item.nome}</h3>
              <p>Quantidade: {item.quantidade}</p>
              <p>Preço: R$ {item.preco.toFixed(2)}</p>
              <p>
                Subtotal: R$ {(item.preco * item.quantidade).toFixed(2)}
              </p>
              <hr />
            </div>
          ))}

          <h3>Total: R$ {total.toFixed(2)}</h3>

          <button className="btnPagar" onClick={pagar}>
             Pagar
          </button>
        </>
      )}
    </div>
  );
}

export default Carrinho;