import "../css/index/tabela.css";
import Tabela from "./components/index/Tabela";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  const criarCronograma = () => {
    navigate("/criarCronograma");
  };

  return (
    <div>
      <button onClick={criarCronograma} className="button-criar-cronograma">
        Criar cronograma
      </button>
      <Tabela />
    </div>
  );
}
