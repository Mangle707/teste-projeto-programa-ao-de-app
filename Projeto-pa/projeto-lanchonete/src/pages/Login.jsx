import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Login.module.css";


function Login({ onLogin }) {

  const [isVisible, setIsVisible] = useState(false);

  const [tipoUsuario, setTipoUsuario] = useState("");

  const [nomeUsuario, setNomeUsuario] = useState("");

  const [senha, setSenha] = useState("");

  // Controla Login ou Criar Conta
  const [criandoConta, setCriandoConta] = useState(false);

  const navigate = useNavigate();


  // ========================================
  // ANIMAÇÃO
  // ========================================

  useEffect(() => {

    setIsVisible(true);

  }, []);


  // ========================================
  // USUÁRIOS PADRÃO
  // ========================================

  const usuariosPadrao = [

    {
      nome: "cliente",
      senha: "1234",
      tipo: "cliente"
    },

    {
      nome: "funcionario",
      senha: "1234",
      tipo: "funcionario"
    }

  ];


  // ========================================
  // CRIAR CONTA
  // ========================================

  const criarConta = (e) => {

    e.preventDefault();


    if (!tipoUsuario) {

      alert(
        "Escolha se você é Cliente ou Funcionário."
      );

      return;

    }


    if (!nomeUsuario.trim()) {

      alert(
        "Digite um nome de usuário."
      );

      return;

    }


    if (!senha.trim()) {

      alert(
        "Digite uma senha."
      );

      return;

    }


    const usuariosSalvos =
      JSON.parse(
        localStorage.getItem("usuarios")
      ) || [];


    const todosUsuarios = [

      ...usuariosPadrao,
      ...usuariosSalvos

    ];


    const usuarioExiste =
      todosUsuarios.some(

        (usuario) =>

          usuario.nome.toLowerCase() ===
          nomeUsuario.trim().toLowerCase()

      );


    if (usuarioExiste) {

      alert(
        "Esse nome de usuário já existe."
      );

      return;

    }


    const novoUsuario = {

      nome:
        nomeUsuario.trim(),

      senha:
        senha,

      tipo:
        tipoUsuario

    };


    usuariosSalvos.push(
      novoUsuario
    );


    localStorage.setItem(
      "usuarios",
      JSON.stringify(
        usuariosSalvos
      )
    );


    alert(
      "Conta criada com sucesso!"
    );


    setCriandoConta(false);

    setNomeUsuario("");

    setSenha("");

    setTipoUsuario("");

  };


  // ========================================
  // LOGIN
  // ========================================

  const handleSubmit = (e) => {

    e.preventDefault();


    if (!tipoUsuario) {

      alert(
        "Escolha se você é Cliente ou Funcionário."
      );

      return;

    }


    if (!nomeUsuario.trim()) {

      alert(
        "Digite seu nome de usuário."
      );

      return;

    }


    if (!senha.trim()) {

      alert(
        "Digite sua senha."
      );

      return;

    }


    const usuariosSalvos =
      JSON.parse(
        localStorage.getItem("usuarios")
      ) || [];


    const todosUsuarios = [

      ...usuariosPadrao,
      ...usuariosSalvos

    ];


    const usuarioEncontrado =
      todosUsuarios.find(

        (usuario) =>

          usuario.nome.toLowerCase() ===
          nomeUsuario.trim().toLowerCase()

          &&

          usuario.senha === senha

          &&

          usuario.tipo === tipoUsuario

      );


    if (!usuarioEncontrado) {

      alert(
        "Nome de usuário ou senha incorretos."
      );

      return;

    }


    // ========================================
    // SALVA LOGIN
    // ========================================

    localStorage.setItem(
      "login",
      "true"
    );

    localStorage.setItem(
      "tipoUsuario",
      tipoUsuario
    );

    localStorage.setItem(
      "nomeUsuario",
      usuarioEncontrado.nome
    );


    onLogin(
      tipoUsuario,
      usuarioEncontrado.nome
    );


    // ========================================
    // FUNCIONÁRIO
    // ========================================

    if (
      tipoUsuario === "funcionario"
    ) {

      navigate("/pedido");

    }


    // ========================================
    // CLIENTE
    // ========================================

    else {

      navigate("/home");

    }

  };


  return (

    <div
      className={`${styles["login-container"]} ${
        isVisible
          ? styles.active
          : ""
      }`}
    >


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


      <div className={styles["login-box"]}>


        <img
          src="/IMG/Icone.png"
          alt="Logo Danger Hamburgers"
          className={styles.logo}
        />


        <h1 className={styles["login-title"]}>

          Danger Hamburgers

        </h1>


        <h2>

          {criandoConta
            ? "Criar Conta"
            : "Login"}

        </h2>


        {/* ========================================
            TIPO DE USUÁRIO
        ======================================== */}

        <div className={styles["tipo-usuario"]}>


          <button
            type="button"

            className={
              tipoUsuario === "cliente"
                ? styles.selecionado
                : ""
            }

            onClick={() =>
              setTipoUsuario("cliente")
            }
          >

            Cliente

          </button>


          <button
            type="button"

            className={
              tipoUsuario === "funcionario"
                ? styles.selecionado
                : ""
            }

            onClick={() =>
              setTipoUsuario("funcionario")
            }
          >

            Funcionário

          </button>


        </div>


        {/* ========================================
            FORMULÁRIO
        ======================================== */}

        <form
          onSubmit={
            criandoConta
              ? criarConta
              : handleSubmit
          }
        >


          <input
            type="text"
            name="usuario"
            placeholder="Usuário"

            value={nomeUsuario}

            onChange={(e) =>
              setNomeUsuario(
                e.target.value
              )
            }

            required
          />


          <input
            type="password"
            name="senha"
            placeholder="Senha"

            value={senha}

            onChange={(e) =>
              setSenha(
                e.target.value
              )
            }

            required
          />


          <button type="submit">

            {criandoConta
              ? "Criar Conta"
              : "Entrar"}

          </button>


          {/* ========================================
              LOGIN
          ======================================== */}

          {!criandoConta && (

            <>

              <Link
                to="/esqueci-senha"
                className={
                  styles["esqueci-senha"]
                }
              >

                Esqueceu sua senha?

              </Link>


              <button
                type="button"

                className={
                  styles["criar-conta"]
                }

                onClick={() => {

                  setCriandoConta(true);

                  setNomeUsuario("");

                  setSenha("");

                  setTipoUsuario("");

                }}
              >

                Não possui uma conta?

                <strong>

                  Criar conta

                </strong>

              </button>

            </>

          )}


          {/* ========================================
              VOLTAR PARA LOGIN
          ======================================== */}

          {criandoConta && (

            <button
              type="button"

              className={
                styles["criar-conta"]
              }

              onClick={() => {

                setCriandoConta(false);

                setNomeUsuario("");

                setSenha("");

                setTipoUsuario("");

              }}
            >

              Já possui uma conta?

              <strong>

                Voltar para Login

              </strong>

            </button>

          )}


        </form>


      </div>


    </div>

  );

}


export default Login;