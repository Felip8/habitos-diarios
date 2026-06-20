import { useNavigate } from "react-router-dom";
import "../css/login.css";
import Pig from "../assets/logo.png";

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
      <div>
        <button onClick={entrar}>Entrar</button>
      </div>
      <img src={Pig} alt="" className="pig" />
    </div>
  );
}
