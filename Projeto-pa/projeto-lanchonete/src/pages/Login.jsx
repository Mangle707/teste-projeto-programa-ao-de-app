import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Login.module.css";

function Login({ onLogin }) {

  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e) => {

    e.preventDefault();

    onLogin();

    navigate("/");
  };

  return (
    <div
      className={`${styles["login-container"]} ${
        isVisible ? styles.active : ""
      }`}
    >

      {/* PIXELS SUBINDO */}
      <div className={styles.pixels}>

        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>

      </div>


      {/* CAIXA DE LOGIN */}
      <div className={styles["login-box"]}>

        {/* ÍCONE DA MARCA */}
        <img
          src="/IMG/Icone.png"
          alt="Logo Danger Hamburgers"
          className={styles.logo}
        />

        <h1 className={styles["login-title"]}>
          
        </h1>

        <h2>Login</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Usuário"
            required
          />

          <input
            type="password"
            placeholder="Senha"
            required
          />

          <button type="submit">
            Entrar
          </button>

          <Link
            to="/esqueci-senha"
            className={styles["esqueci-senha"]}
          >
            Esqueceu sua senha?
          </Link>

        </form>

      </div>

    </div>
  );
}

export default Login;