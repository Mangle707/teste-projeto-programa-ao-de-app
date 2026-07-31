import './Funcionarios.css'
import { useRef } from "react";

function Funcionarios() {
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

      <h2 className='funcio'>Conheca nossos Funcionários</h2>

      <div className="carousel-wrapper">

        <button className="btn" onClick={() => mover(-1)}>
          ❮
        </button>

        <div className="carousel" ref={carouselRef}>

          <div className="card1">
            <img src="/IMG/stati.png" alt="Cesar Stati" />
            <h3>Cesar Stati</h3>
            <p>Gerente</p>
          </div>

          <div className="card1">
            <img src="/IMG/simone.png" alt="Simone" />
            <h3>Simone</h3>
            <p>Cozinheira mirin</p>
          </div>

          <div className="card1">
            <img src="/IMG/anderson.jpg" alt="Anderson Cidade" />
            <h3>Anderson Cidade</h3>
            <p>CEO</p>
          </div>

          <div className="card1">
            <img src="/IMG/Donatan.jpg" alt="Donathan Ramalho Gonçalves" />
            <h3>Donathan Ramalho Gonçalves</h3>
            <p>Caixa</p>
          </div>

          <div className="card1">
            <img src="/IMG/Alexandre.jpg" alt="Alexandre Gaspari" />
            <h3>Alexandre Gaspari</h3>
            <p>Cozineiro chefe</p>
          </div>

          <div className="card1">
            <img src="/IMG/empregados.jpg" alt="Nosso pessoal de atendimento" />
            <h3>Nosso pessoal de atendimento</h3>
            <p>Empregados</p>
          </div>

        </div>

        <button className="btn" onClick={() => mover(1)}>
          ❯
        </button>

      </div>

    </section>
  );
}

export default Funcionarios;