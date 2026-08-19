import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Pedido.css";

function Pedido() {

  const [pedidos, setPedidos] = useState([]);


  // =========================
  // STATUS DO PEDIDO
  // =========================

  const statusLista = [
    "Recebido",
    "Preparando",
    "Pronto",
    "Entregue"
  ];


  // =========================
  // BUSCAR PEDIDOS
  // =========================

  useEffect(() => {

    const pedidosSalvos =
      JSON.parse(localStorage.getItem("pedidos")) || [];

    setPedidos(pedidosSalvos);

  }, []);


  // =========================
  // AVANÇAR STATUS
  // =========================

  const avancarStatus = (id) => {

    const pedidosAtualizados = pedidos.map((pedido) => {

      if (pedido.id !== id) {
        return pedido;
      }


      const statusAtual =
        statusLista.indexOf(pedido.status);


      if (statusAtual < statusLista.length - 1) {

        return {
          ...pedido,
          status: statusLista[statusAtual + 1]
        };

      }


      return pedido;

    });


    setPedidos(pedidosAtualizados);


    localStorage.setItem(
      "pedidos",
      JSON.stringify(pedidosAtualizados)
    );

  };


  // =========================
  // REMOVER PEDIDO ENTREGUE
  // =========================

  const removerPedido = (id) => {

    const pedidosAtualizados =
      pedidos.filter(
        (pedido) => pedido.id !== id
      );


    setPedidos(pedidosAtualizados);


    localStorage.setItem(
      "pedidos",
      JSON.stringify(pedidosAtualizados)
    );

  };


  return (

    <div className="pagina-pedido">


      {/* =========================
          CABEÇALHO
      ========================= */}

      <header className="cabecalho-pedido">

        <div>

          <h1>
            FILA DE PEDIDOS
          </h1>

          <p>
            Pedidos para a cozinha
          </p>

        </div>


        <Link
          to="/"
          className="voltar-carrinho"
        >
          ← Voltar
        </Link>

      </header>


      {/* =========================
          FILA
      ========================= */}

      <main className="fila-pedidos">


        {pedidos.length === 0 ? (

          <div className="sem-pedidos">

            <h2>
              Nenhum pedido na fila
            </h2>

            <p>
              Aguardando novos pedidos...
            </p>

          </div>

        ) : (


          pedidos.map((pedido, index) => {

            const statusAtual =
              statusLista.indexOf(
                pedido.status
              );


            return (

              <article
                className="pedido"
                key={pedido.id}
              >


                {/* =========================
                    CABEÇALHO DO PEDIDO
                ========================= */}

                <header className="topo-pedido">

                  <div>

                    <h1>
                      PEDIDO #
                      {String(
                        pedido.numero
                      ).padStart(3, "0")}
                    </h1>

                    <p>
                      Pedido para a cozinha
                    </p>

                  </div>


                  <div className="posicao-fila">

                    <span>
                      FILA
                    </span>

                    <strong>
                      #{index + 1}
                    </strong>

                  </div>

                </header>


                <hr />


                {/* =========================
                    CLIENTE
                ========================= */}

                <section className="cliente-pedido">

                  <span>
                    Cliente
                  </span>

                  <strong>
                    {pedido.nomeUsuario}
                  </strong>

                </section>


                <hr />


                {/* =========================
                    INFORMAÇÕES
                ========================= */}

                <section className="info-pedido">

                  <div>

                    <span>
                      Horário
                    </span>

                    <strong>
                      {pedido.horario}
                    </strong>

                  </div>


                  <div>

                    <span>
                      Posição
                    </span>

                    <strong>
                      #{index + 1}
                    </strong>

                  </div>

                </section>


                <hr />


                {/* =========================
                    PRODUTOS
                ========================= */}

                <section className="produtos-pedido">

                  <h2>
                    Itens do Pedido
                  </h2>


                  {pedido.carrinho.map(
                    (produto, produtoIndex) => (

                      <div
                        className="item-pedido"
                        key={produtoIndex}
                      >

                        <strong>
                          {produto.quantidade}x
                        </strong>

                        <span>
                          {produto.nome}
                        </span>

                        <strong>
                          R$ {(
                            produto.preco *
                            produto.quantidade
                          ).toFixed(2)}
                        </strong>

                      </div>

                    )
                  )}

                </section>


                <hr />


                {/* =========================
                    STATUS
                ========================= */}

                <section className="status-pedido">

                  <h2>
                    Status
                  </h2>


                  <div className="status-atual">

                    {pedido.status}

                  </div>


                  {/* =========================
                      FLUXO
                  ========================= */}

                  <div className="fluxo-status">

                    {statusLista.map(
                      (item, statusIndex) => (

                        <div
                          key={item}
                          className="etapa"
                        >

                          <div
                            className={
                              statusIndex <= statusAtual
                                ? "bolinha ativa"
                                : "bolinha"
                            }
                          >

                            {statusIndex + 1}

                          </div>


                          <span
                            className={
                              statusIndex <= statusAtual
                                ? "nome-status ativo"
                                : "nome-status"
                            }
                          >

                            {item}

                          </span>


                          {statusIndex <
                            statusLista.length - 1 && (

                            <div
                              className={
                                statusIndex <
                                statusAtual
                                  ? "linha-status preenchida"
                                  : "linha-status"
                              }
                            />

                          )}

                        </div>

                      )
                    )}

                  </div>


                  {/* =========================
                      BOTÃO AVANÇAR
                  ========================= */}

                  {pedido.status !== "Entregue" && (

                    <button
                      className="botao-avancar"
                      onClick={() =>
                        avancarStatus(
                          pedido.id
                        )
                      }
                    >
                      Avançar Pedido
                    </button>

                  )}


                  {/* =========================
                      PEDIDO ENTREGUE
                  ========================= */}

                  {pedido.status === "Entregue" && (

                    <div className="pedido-entregue">

                      <div className="check-entregue">
                        ✓
                      </div>


                      <h2>
                        Pedido Entregue!
                      </h2>


                      <p>
                        Cliente:{" "}
                        {pedido.nomeUsuario}
                      </p>


                      <button
                        className="botao-remover"
                        onClick={() =>
                          removerPedido(
                            pedido.id
                          )
                        }
                      >
                        Remover da fila
                      </button>

                    </div>

                  )}

                </section>

              </article>

            );

          })

        )}

      </main>

    </div>

  );

}

export default Pedido;