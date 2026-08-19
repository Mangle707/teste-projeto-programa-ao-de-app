import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Login.module.css";


function Login({ onLogin }) {

  const [isVisible, setIsVisible] = useState(false);

  const [nomeUsuario, setNomeUsuario] = useState("");

  const [senha, setSenha] = useState("");

  // Controla Login ou Criar Conta
  const [criandoConta, setCriandoConta] = useState(false);

  // Tipo usado SOMENTE na criação da conta
  const [tipoUsuario, setTipoUsuario] = useState("");

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


    // Verifica tipo

    if (!tipoUsuario) {

      alert(
        "Escolha se a conta será de Cliente ou Funcionário."
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


    // Busca usuários salvos

    const usuariosSalvos =
      JSON.parse(
        localStorage.getItem("usuarios")
      ) || [];


    // Junta usuários padrão e criados

    const todosUsuarios = [

      ...usuariosPadrao,
      ...usuariosSalvos

    ];


    // Verifica se já existe

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


    // Cria usuário

    const novoUsuario = {

      nome:
        nomeUsuario.trim(),

      senha:
        senha,

      tipo:
        tipoUsuario

    };


    // Salva

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


    // Volta para login

    setCriandoConta(false);

    setNomeUsuario("");

    setSenha("");

    setTipoUsuario("");

  };


  // ========================================
  // LOGIN AUTOMÁTICO
  // ========================================

  const handleSubmit = (e) => {

    e.preventDefault();


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


    // Busca usuários criados

    const usuariosSalvos =
      JSON.parse(
        localStorage.getItem("usuarios")
      ) || [];


    // Junta todos os usuários

    const todosUsuarios = [

      ...usuariosPadrao,
      ...usuariosSalvos

    ];


    // ========================================
    // PROCURA PELO NOME E SENHA
    // ========================================

    const usuarioEncontrado =
      todosUsuarios.find(

        (usuario) =>

          usuario.nome.toLowerCase() ===
          nomeUsuario.trim().toLowerCase()

          &&

          usuario.senha === senha

      );


    // ========================================
    // LOGIN INCORRETO
    // ========================================

    if (!usuarioEncontrado) {

      alert(
        "Nome de usuário ou senha incorretos."
      );

      return;

    }


    // ========================================
    // DESCOBRE AUTOMATICAMENTE O TIPO
    // ========================================

    const tipoEncontrado =
      usuarioEncontrado.tipo;


    // ========================================
    // SALVA LOGIN
    // ========================================

    localStorage.setItem(
      "login",
      "true"
    );

    localStorage.setItem(
      "tipoUsuario",
      tipoEncontrado
    );

    localStorage.setItem(
      "nomeUsuario",
      usuarioEncontrado.nome
    );


    // Atualiza o App

    onLogin(
      tipoEncontrado,
      usuarioEncontrado.nome
    );


    // ========================================
    // FUNCIONÁRIO
    // ========================================

    if (
      tipoEncontrado === "funcionario"
    ) {

      navigate("/pedido");

      return;

    }


    // ========================================
    // CLIENTE
    // ========================================

    navigate("/home");

  };


  return (

    <div
      className={`${styles["login-container"]} ${
        isVisible
          ? styles.active
          : ""
      }`}
    >


      {/* ========================================
          PIXELS
      ======================================== */}

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


      {/* ========================================
          CAIXA
      ======================================== */}

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


        {/* TÍTULO DA TELA */}

        <h2>

          {criandoConta
            ? "Criar Conta"
            : "Login"}

        </h2>


        {/* ========================================
            ESCOLHA DO TIPO
            APENAS AO CRIAR CONTA
        ======================================== */}

        {criandoConta && (

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

        )}


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


          {/* ========================================
              BOTÃO PRINCIPAL
          ======================================== */}

          <button type="submit">

            {criandoConta
              ? "Criar Conta"
              : "Entrar"}

          </button>


          {/* ========================================
              OPÇÕES DO LOGIN
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