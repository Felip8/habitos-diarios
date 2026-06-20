import "../css/index/tabela.css";
import Tabela from "./components/index/Tabela";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  const criarCronograma = () => {
    navigate("/criarCronograma");
  };

  const voltar = () => {
    navigate("/login");
  };

  return (
    <div>
      <button onClick={voltar} className="button-criar-cronograma">
        Go back
      </button>
      <button onClick={criarCronograma} className="button-criar-cronograma">
        Criar cronograma
      </button>
      <Tabela />
    </div>
  );
}
