import { useNavigate } from "react-router-dom";
import "../css/login.css";

export default function Login() {
  const navigate = useNavigate();
  const entrar = () => {
    navigate("/index");
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <div>
        <input type="text" placeholder="Usuário" />
      </div>
      <div>
        <input type="text" placeholder="Senha" />
      </div>
      <button onClick={entrar}>Entrar</button>
    </div>
  );
}
