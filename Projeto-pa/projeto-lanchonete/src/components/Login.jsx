import './Login.css'
function Login({login}){
    return(
        <>
        <h4>Login</h4>
        <div className="Logon">
        <h5>Digite seu nome</h5>
        <input type="text" id="meuNome" placeholder="Digite seu nome:"/>
        <h5>Digite sua idade</h5>
        <input type="text" id="sua idade" placeholder="Digite sua idade:"/>
        <button onclick="salvarDado()">Salvar</button>
        </div>
        </>
    )
}
export default Login