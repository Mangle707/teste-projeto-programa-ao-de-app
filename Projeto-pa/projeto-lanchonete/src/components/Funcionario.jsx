import './Funcionarios.css';
import { useRef } from "react";

function Funcionarios({ funcionarios }) {

  const carouselRef = useRef(null);

  function mover(direcao) {

    const scrollAmount = 240;

    carouselRef.current.scrollBy({
      left: scrollAmount * direcao,
      behavior: "smooth"
    });

  }

  return (
    <section className="funcionarios">

      <h2 className="funcio">
        Conheça nossos Funcionários
      </h2>

      <div className="carousel-wrapper">

        <button
          className="btn"
          onClick={() => mover(-1)}
        >
          ❮
        </button>

        <div
          className="carousel"
          ref={carouselRef}
        >

          {funcionarios.map((funcionario, index) => (

            <div
              className="card1"
              key={index}
            >

              <img
                src={funcionario.imagem}
                alt={funcionario.nome}
              />

              <h3>
                {funcionario.nome}
              </h3>

              <p>
                {funcionario.cargo}
              </p>

            </div>

          ))}

        </div>

        <button
          className="btn"
          onClick={() => mover(1)}
        >
          ❯
        </button>

      </div>

    </section>
  );
}

export default Funcionarios;