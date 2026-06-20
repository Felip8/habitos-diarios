import { useNavigate } from "react-router-dom";
import "../css/login.css";
import Pig from "../assets/logo.png";

export default function Login() {
  const navigate = useNavigate();
  const entrar = () => {
    navigate("/index");
  };

  const changeCharacter = () => {
    navigate("/characters");
  };

  return (
    <div className="login-container">
      {/* <h1>Login</h1>
      <div>
        <input type="text" placeholder="Usuário" />
      </div>
      <div>
        <input type="text" placeholder="Senha" />
      </div> */}

      <img src={Pig} alt="" className="pig" />
      <p className="current">Current character</p>
      <div>
        <button onClick={entrar} className="button-entrar">
          Enter
        </button>
      </div>
      <button onClick={changeCharacter}>Change character</button>
    </div>
  );
}
