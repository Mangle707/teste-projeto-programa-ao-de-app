import { useState } from "react";
import { Link } from "react-router-dom";
import "./Pedido.css";

function Pedido({ carrinho }) {

  const [status, setStatus] = useState("Recebido");

  const avancarStatus = () => {
    if (status === "Recebido") {
      setStatus("Preparando");
    } 
    else if (status === "Preparando") {
      setStatus("Pronto");
    } 
    else if (status === "Pronto") {
      setStatus("Entregue");
    }
  };

  const statusLista = [
    "Recebido",
    "Preparando",
    "Pronto",
    "Entregue"
  ];

  const statusAtual = statusLista.indexOf(status);

  return (
    <div className="pagina-pedido">

      {/* CABEÇALHO */}
      <header className="cabecalho-pedido">

        <div>
          <h1>PEDIDO #001</h1>
          <p>Pedido para a cozinha</p>
        </div>

        <Link to="/carrinho" className="voltar-carrinho">
          ← Voltar
        </Link>

      </header>


      {/* PEDIDO */}
      <main className="pedido">

        {/* INFORMAÇÕES */}
        <section className="info-pedido">

          <div>
            <span>Mesa</span>
            <strong>03</strong>
          </div>

          <div>
            <span>Horário</span>
            <strong>12:15</strong>
          </div>

        </section>


        <hr />


        {/* PRODUTOS */}
        <section className="produtos-pedido">

          <h2>Itens do Pedido</h2>

          {carrinho && carrinho.length > 0 ? (

            carrinho.map((produto, index) => (

              <div
                className="item-pedido"
                key={index}
              >

                <strong>
                  {produto.quantidade}x
                </strong>

                <span>
                  {produto.nome}
                </span>

              </div>

            ))

          ) : (

            <>
              <div className="item-pedido">
                <strong>2x</strong>
                <span>X-Burguer</span>
              </div>

              <div className="item-pedido">
                <strong>1x</strong>
                <span>Batata Frita</span>
              </div>

              <div className="item-pedido">
                <strong>2x</strong>
                <span>Coca-Cola</span>
              </div>
            </>

          )}

        </section>


        <hr />


        {/* ENDEREÇO */}
        <section className="endereco">

          <strong>senaipr.org.br</strong>

          <p>
            Rua Senador Accioly Filho, 298 |
            Cidade Industrial de Curitiba
          </p>

          <p>
            81310-000 | Curitiba-PR | (41) 3271-7100
          </p>

        </section>


        <hr />


        {/* STATUS */}
        <section className="status-pedido">

          <h2>Status</h2>

          <div className="status-atual">
            {status}
          </div>


          {/* FLUXO */}
          <div className="fluxo-status">

            {statusLista.map((item, index) => (

              <div
                key={item}
                className="etapa"
              >

                <div
                  className={
                    index <= statusAtual
                      ? "bolinha ativa"
                      : "bolinha"
                  }
                >
                  {index + 1}
                </div>

                <span
                  className={
                    index <= statusAtual
                      ? "nome-status ativo"
                      : "nome-status"
                  }
                >
                  {item}
                </span>

                {index < statusLista.length - 1 && (
                  <div
                    className={
                      index < statusAtual
                        ? "linha-status preenchida"
                        : "linha-status"
                    }
                  />
                )}

              </div>

            ))}

          </div>


          {/* BOTÃO */}
          {status !== "Entregue" && (

            <button
              className="botao-avancar"
              onClick={avancarStatus}
            >
              Avançar Pedido
            </button>

          )}

          {status === "Entregue" && (

            <div className="pedido-entregue">
              ✓ Pedido Entregue
            </div>

          )}

        </section>

      </main>

    </div>
  );
}

export default Pedido;