import { Link, useNavigate } from "react-router-dom";
import "./Carrinho.css";

function Carrinho({ carrinho, setCarrinho }) {

  const navigate = useNavigate();

  const totalItens = carrinho.reduce(
    (total, produto) => total + produto.quantidade,
    0
  );

  const valorTotal = carrinho.reduce(
    (total, produto) =>
      total + produto.preco * produto.quantidade,
    0
  );

  const limparCarrinho = () => {
    setCarrinho([]);
  };


  // =========================
  // FINALIZAR PEDIDO
  // =========================

  const finalizarPedido = () => {

    if (carrinho.length === 0) {
      alert("Seu carrinho está vazio.");
      return;
    }
  
    const pedidos =
      JSON.parse(localStorage.getItem("pedidos")) || [];
  
    const nomeUsuario =
      localStorage.getItem("nomeUsuario") || "Cliente";
  
  
    const novoPedido = {
  
      id: Date.now(),
  
      numero: pedidos.length + 1,
  
      nomeUsuario: nomeUsuario,
  
      carrinho: carrinho,
  
      status: "Recebido",
  
      horario: new Date().toLocaleTimeString(
        "pt-BR",
        {
          hour: "2-digit",
          minute: "2-digit"
        }
      )
  
    };
  
  
    const novaFila = [
      ...pedidos,
      novoPedido
    ];
  
  
    localStorage.setItem(
      "pedidos",
      JSON.stringify(novaFila)
    );
  
  
    // Limpa o carrinho
    setCarrinho([]);
  
  
    // Mostra mensagem
    alert(
      `Pedido #${String(novoPedido.numero).padStart(3, "0")} enviado com sucesso!`
    );
  
  
    // Volta para Home depois da mensagem
    navigate("/");
  };

  return (

    <div className="pagina-carrinho">

      <header className="cabecalho-carrinho">

        <h1>
          CARRINHO DE COMPRAS
        </h1>

        <Link
          to="/"
          className="voltar"
        >
          ← Voltar para Home
        </Link>

      </header>


      <main className="conteudo-carrinho">

        {carrinho.length === 0 ? (

          <div className="carrinho-vazio">

            <h2>
              Seu carrinho está vazio
            </h2>

            <p>
              Adicione alguns produtos para continuar.
            </p>

            <Link
              to="/"
              className="botao-voltar"
            >
              Ver Produtos
            </Link>

          </div>

        ) : (

          <>

            {/* =========================
                PRODUTOS
            ========================= */}

            <div className="tabela-carrinho">

              <div className="linha titulo-tabela">

                <span>Foto</span>
                <span>Produto</span>
                <span>Categoria</span>
                <span>Qtde</span>
                <span>Preço</span>

              </div>


              {carrinho.map((produto, index) => (

                <div
                  className="linha produto-carrinho"
                  key={index}
                >

                  <img
                    src={produto.imagem}
                    alt={produto.nome}
                  />

                  <strong>
                    {produto.nome}
                  </strong>

                  <span>
                    {produto.categoria}
                  </span>

                  <span>
                    {produto.quantidade}
                  </span>

                  <strong>
                    R$ {(produto.preco * produto.quantidade).toFixed(2)}
                  </strong>

                </div>

              ))}

            </div>


            {/* =========================
                RESUMO
            ========================= */}

            <div className="resumo-carrinho">

              <div>

                <strong>
                  Total de itens:
                </strong>

                <span>
                  {totalItens}
                </span>

              </div>


              <div>

                <strong>
                  Valor Total:
                </strong>

                <span className="valor-total">
                  R$ {valorTotal.toFixed(2)}
                </span>

              </div>

            </div>


            {/* =========================
                AÇÕES
            ========================= */}

            <div className="acoes-carrinho">

              <button
                className="limpar"
                onClick={limparCarrinho}
              >
                Limpar Carrinho
              </button>


              <button
                className="finalizar"
                onClick={finalizarPedido}
              >
                Finalizar Pedido
              </button>

            </div>

          </>

        )}

      </main>

    </div>

  );
}

export default Carrinho;