import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./EsqueciSenha.module.css";

function EsqueciSenha() {

  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <div className={styles["recuperar-container"]}>

      {/* PIXELS */}
      <div className={styles.pixels}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={styles["recuperar-box"]}>

        <h1>Lanchonete do Senai</h1>

        {!enviado ? (
          <>
            <h2>Esqueceu sua senha?</h2>

            <p className={styles.instrucao}>
              Digite seu usuário para receber as instruções
              para recuperar sua senha.
            </p>

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                placeholder="Digite seu usuário"
                required
              />

              <button type="submit">
                Recuperar senha
              </button>

            </form>
          </>
        ) : (
          <div className={styles.sucesso}>

            <h2>Solicitação enviada!</h2>

            <p>
              Verifique as instruções para recuperar
              sua senha.
            </p>

          </div>
        )}

        <Link to="/login" className={styles.voltar}>
          ← Voltar para o Login
        </Link>

      </div>

    </div>
  );
}

export default EsqueciSenha;