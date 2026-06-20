import { useNavigate } from "react-router-dom";
import "../css/characters/character.css";
import Pig from "../assets/logo.png";

export default function Characters() {
  const navigate = useNavigate();

  const voltar = () => {
    navigate("/criarCronograma");
  };

  return (
    <div className="characters-page">
      <button onClick={voltar} className="button-voltar">
        Voltar
      </button>

      <div className="characters-container">
        <div className="character-card">
          <p className="container-centraliza-p">Pig</p>
          <img src={Pig} alt="Pig" className="pig" />
          <p>Current character</p>
        </div>

        <div className="add-character">
          <button> + </button>
        </div>
      </div>
    </div>
  );
}
