import { useEffect, useState } from "react";
import "./Pedido.css";


function Pedido({ carrinho }) {

  const [pedidos, setPedidos] =
    useState([]);


  // ========================================
  // STATUS
  // ========================================

  const statusLista = [
    "Recebido",
    "Preparando",
    "Pronto",
    "Entregue"
  ];


  // ========================================
  // BUSCAR PEDIDOS
  // ========================================

  useEffect(() => {

    const carregarPedidos = () => {

      const pedidosSalvos =
        JSON.parse(
          localStorage.getItem("pedidos")
        ) || [];


      // Mais antigo primeiro

      const pedidosOrdenados =
        [...pedidosSalvos].sort(
          (a, b) =>
            (a.criadoEm || 0) -
            (b.criadoEm || 0)
        );


      setPedidos(
        pedidosOrdenados
      );

    };


    carregarPedidos();


    window.addEventListener(
      "pedidosAtualizados",
      carregarPedidos
    );


    return () => {

      window.removeEventListener(
        "pedidosAtualizados",
        carregarPedidos
      );

    };

  }, []);


  // ========================================
  // FECHAR
  // ========================================

  const fecharPedido = () => {

    const confirmar =
      window.confirm(
        "Deseja sair e voltar ao login?"
      );


    // Se clicar em CANCELAR

    if (!confirmar) {

      return;

    }


    // ========================================
    // REMOVE LOGIN
    // ========================================

    localStorage.removeItem(
      "login"
    );

    localStorage.removeItem(
      "tipoUsuario"
    );

    localStorage.removeItem(
      "nomeUsuario"
    );


    // ========================================
    // VOLTA PARA LOGIN /
    // ========================================

    window.location.href = "/";

  };


  // ========================================
  // AVANÇAR STATUS
  // ========================================

  const avancarStatus = (id) => {

    const pedidoAtual =
      pedidos.find(
        (pedido) =>
          pedido.id === id
      );


    if (!pedidoAtual) {

      return;

    }


    // ========================================
    // PRONTO → ENTREGUE → REMOVE
    // ========================================

    if (
      pedidoAtual.status === "Pronto"
    ) {

      const confirmar =
        window.confirm(
          `O pedido #${String(
            pedidoAtual.numero
          ).padStart(3, "0")} foi entregue?`
        );


      if (!confirmar) {

        return;

      }


      const novaFila =
        pedidos.filter(
          (pedido) =>
            pedido.id !== id
        );


      setPedidos(
        novaFila
      );


      localStorage.setItem(
        "pedidos",
        JSON.stringify(
          novaFila
        )
      );


      window.dispatchEvent(
        new Event(
          "pedidosAtualizados"
        )
      );


      return;

    }


    // ========================================
    // RECEBIDO → PREPARANDO
    // ========================================

    let novoStatus =
      "Recebido";


    if (
      pedidoAtual.status ===
      "Recebido"
    ) {

      novoStatus =
        "Preparando";

    }


    // ========================================
    // PREPARANDO → PRONTO
    // ========================================

    else if (
      pedidoAtual.status ===
      "Preparando"
    ) {

      novoStatus =
        "Pronto";

    }


    // ========================================
    // ATUALIZA PEDIDO
    // ========================================

    const novaFila =
      pedidos.map(
        (pedido) => {

          if (
            pedido.id !== id
          ) {

            return pedido;

          }


          return {

            ...pedido,

            status:
              novoStatus

          };

        }
      );


    setPedidos(
      novaFila
    );


    localStorage.setItem(
      "pedidos",
      JSON.stringify(
        novaFila
      )
    );


    window.dispatchEvent(
      new Event(
        "pedidosAtualizados"
      )
    );

  };


  // ========================================
  // TELA
  // ========================================

  return (

    <div className="pagina-pedido">


      {/* CABEÇALHO */}

      <header
        className="cabecalho-pedido"
      >

        <div>

          <h1>
            FILA DE PEDIDOS
          </h1>

          <p>
            Pedidos mais antigos aparecem primeiro
          </p>

        </div>


        {/* FECHAR */}

        <button
          type="button"
          className="voltar-carrinho"
          onClick={fecharPedido}
        >

          Fechar

        </button>

      </header>


      {/* FILA */}

      <main className="fila-pedidos">


        {pedidos.length === 0 ? (

          <div className="nenhum-pedido">

            <h2>
              Nenhum pedido na fila
            </h2>

            <p>
              Aguardando novos pedidos...
            </p>

          </div>

        ) : (

          <div className="lista-pedidos">

            {pedidos.map(
              (pedido, index) => {

                const statusAtual =
                  statusLista.indexOf(
                    pedido.status ||
                    "Recebido"
                  );


                return (

                  <div
                    className="card-pedido"
                    key={
                      pedido.id ||
                      index
                    }
                  >

                    {/* TOPO */}

                    <div className="topo-card">

                      <div>

                        <h2>

                          Pedido #

                          {String(
                            pedido.numero ||
                            index + 1
                          ).padStart(
                            3,
                            "0"
                          )}

                        </h2>


                        <strong>

                          {pedido.nomeUsuario ||
                            "Cliente"}

                        </strong>

                      </div>


                      <span
                        className="posicao-fila"
                      >

                        #{index + 1}

                      </span>

                    </div>


                    {/* HORÁRIO */}

                    <div className="info-card">

                      <span>
                        Horário:
                      </span>

                      <strong>

                        {pedido.horario ||
                          "--:--"}

                      </strong>

                    </div>


                    {/* PRODUTOS */}

                    <div className="produtos-card">

                      <h3>
                        Itens
                      </h3>


                      {pedido.carrinho &&
                      pedido.carrinho.length > 0 ? (

                        pedido.carrinho.map(
                          (
                            produto,
                            produtoIndex
                          ) => (

                            <div
                              className="item-card"
                              key={
                                produtoIndex
                              }
                            >

                              <strong>

                                {
                                  produto.quantidade
                                }x

                              </strong>

                              <span>

                                {
                                  produto.nome
                                }

                              </span>

                            </div>

                          )

                        )

                      ) : (

                        <div
                          className="item-card"
                        >

                          <span>
                            Nenhum item
                          </span>

                        </div>

                      )}

                    </div>


                    {/* STATUS */}

                    <div className="status-card">

                      <h3>
                        Status
                      </h3>


                      <div
                        className="status-atual"
                      >

                        {
                          pedido.status ||
                          "Recebido"
                        }

                      </div>


                      {/* FLUXO */}

                      <div className="mini-fluxo">

                        {statusLista.map(
                          (
                            item,
                            statusIndex
                          ) => (

                            <div
                              key={item}
                              className="mini-etapa"
                            >

                              <div
                                className={
                                  statusIndex <=
                                  statusAtual

                                    ?

                                  "mini-bolinha ativa"

                                    :

                                  "mini-bolinha"
                                }
                              >

                                {
                                  statusIndex + 1
                                }

                              </div>


                              <span>

                                {item}

                              </span>

                            </div>

                          )
                        )}

                      </div>


                      {/* BOTÃO */}

                      <button
                        className="botao-avancar"

                        onClick={() =>
                          avancarStatus(
                            pedido.id
                          )
                        }
                      >

                        {pedido.status ===
                        "Pronto"

                          ? "Entregar Pedido"

                          : "Avançar Pedido"}

                      </button>

                    </div>

                  </div>

                );

              }
            )}

          </div>

        )}

      </main>

    </div>

  );

}


export default Pedido;