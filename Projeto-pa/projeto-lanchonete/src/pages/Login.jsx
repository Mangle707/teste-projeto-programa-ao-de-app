import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Login.module.css";

function Login({ onLogin }) {

  const [isVisible, setIsVisible] = useState(false);

  const [tipoUsuario, setTipoUsuario] = useState("");

  const [nomeUsuario, setNomeUsuario] = useState("");

  const [senha, setSenha] = useState("");

  // Controla se está no Login ou Criar Conta
  const [criandoConta, setCriandoConta] = useState(false);

  const navigate = useNavigate();


  // =========================
  // ANIMAÇÃO
  // =========================

  useEffect(() => {

    setIsVisible(true);

  }, []);


  // =========================
  // USUÁRIOS PADRÃO
  // =========================

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


  // =========================
  // CRIAR CONTA
  // =========================

  const criarConta = (e) => {

    e.preventDefault();


    // Verifica tipo

    if (!tipoUsuario) {

      alert(
        "Escolha se você é Cliente ou Funcionário."
      );

      return;

    }


    // Verifica nome

    if (!nomeUsuario.trim()) {

      alert(
        "Digite um nome de usuário."
      );

      return;

    }


    // Verifica senha

    if (!senha.trim()) {

      alert(
        "Digite uma senha."
      );

      return;

    }


    // =========================
    // BUSCA USUÁRIOS SALVOS
    // =========================

    const usuariosSalvos =
      JSON.parse(
        localStorage.getItem("usuarios")
      ) || [];


    // Junta usuários padrão
    // e usuários criados

    const todosUsuarios = [

      ...usuariosPadrao,

      ...usuariosSalvos

    ];


    // =========================
    // VERIFICA SE JÁ EXISTE
    // =========================

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


    // =========================
    // CRIA NOVO USUÁRIO
    // =========================

    const novoUsuario = {

      nome:
        nomeUsuario.trim(),

      senha:
        senha,

      tipo:
        tipoUsuario

    };


    // =========================
    // SALVA USUÁRIO
    // =========================

    usuariosSalvos.push(
      novoUsuario
    );


    localStorage.setItem(
      "usuarios",
      JSON.stringify(
        usuariosSalvos
      )
    );


    // =========================
    // MENSAGEM
    // =========================

    alert(
      "Conta criada com sucesso!"
    );


    // =========================
    // VOLTA PARA LOGIN
    // =========================

    setCriandoConta(false);

    setNomeUsuario("");

    setSenha("");

    setTipoUsuario("");

  };


  // =========================
  // FAZER LOGIN
  // =========================

  const handleSubmit = (e) => {

    e.preventDefault();


    // Verifica tipo

    if (!tipoUsuario) {

      alert(
        "Escolha se você é Cliente ou Funcionário."
      );

      return;

    }


    // Verifica nome

    if (!nomeUsuario.trim()) {

      alert(
        "Digite seu nome de usuário."
      );

      return;

    }


    // Verifica senha

    if (!senha.trim()) {

      alert(
        "Digite sua senha."
      );

      return;

    }


    // =========================
    // BUSCA USUÁRIOS CRIADOS
    // =========================

    const usuariosSalvos =
      JSON.parse(
        localStorage.getItem("usuarios")
      ) || [];


    // Junta os usuários

    const todosUsuarios = [

      ...usuariosPadrao,

      ...usuariosSalvos

    ];


    // =========================
    // PROCURA USUÁRIO
    // =========================

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


    // =========================
    // LOGIN INCORRETO
    // =========================

    if (!usuarioEncontrado) {

      alert(
        "Nome de usuário ou senha incorretos."
      );

      return;

    }


    // =========================
    // SALVA LOGIN
    // =========================

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


    // Atualiza o App

    onLogin(
      tipoUsuario,
      usuarioEncontrado.nome
    );


    // =========================
    // FUNCIONÁRIO
    // =========================

    if (
      tipoUsuario === "funcionario"
    ) {

      navigate("/pedido");

    }


    // =========================
    // CLIENTE
    // =========================

    else {

      navigate("/");

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


      {/* =========================
          PIXELS
      ========================= */}

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


      {/* =========================
          CAIXA
      ========================= */}

      <div className={styles["login-box"]}>


        {/* LOGO */}

        <img
          src="/IMG/Icone.png"
          alt="Logo Danger Hamburgers"
          className={styles.logo}
        />


        {/* TÍTULO */}

        <h1 className={styles["login-title"]}>

          Danger Hamburgers

        </h1>


        {/* =========================
            TÍTULO DA TELA
        ========================= */}

        <h2>

          {criandoConta
            ? "Criar Conta"
            : "Login"}

        </h2>


        {/* =========================
            TIPO DE USUÁRIO
        ========================= */}

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


        {/* =========================
            FORMULÁRIO
        ========================= */}

        <form
          onSubmit={
            criandoConta
              ? criarConta
              : handleSubmit
          }
        >


          {/* USUÁRIO */}

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


          {/* SENHA */}

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


          {/* =========================
              BOTÃO PRINCIPAL
          ========================= */}

          <button type="submit">

            {criandoConta
              ? "Criar Conta"
              : "Entrar"}

          </button>


          {/* =========================
              LOGIN
          ========================= */}

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


              {/* CRIAR CONTA */}

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


          {/* =========================
              VOLTAR PARA LOGIN
          ========================= */}

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