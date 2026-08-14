import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

      <div className={styles["login-box"]}>

        <h1 className={styles["login-title"]}>
          Lanchonete do Senai
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

          <p>
            Esqueceu sua senha?
          </p>

        </form>

      </div>

    </div>
  );
}

export default Login;