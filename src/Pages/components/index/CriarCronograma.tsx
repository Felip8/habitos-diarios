import { useNavigate } from "react-router-dom";
import "../../../css/index/criarCronograma.css";

export default function CriarCronograma() {
  const navigate = useNavigate();
  const voltar = () => {
    navigate("/index");
  };

  return (
    <form>
      <div className="semana-e-horario">
        <input type="time" /> <p>até</p>
        <input type="time" className="input-time" />
        <div>
          <p>Segunda-feira</p>
          <input type="text" className="dia-observacao" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"
            />
          </svg>
        </div>
      </div>

      <div className="semana-e-horario">
        <input type="time" /> <p>até</p>
        <input type="time" className="input-time" />
        <div>
          <p>Terça-feira</p>
          <input type="text" className="dia-observacao" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"
            />
          </svg>
        </div>
      </div>
      <div className="semana-e-horario">
        <input type="time" /> <p>até</p>
        <input type="time" className="input-time" />
        <div>
          <p>Quarta-feira</p>
          <input type="text" className="dia-observacao" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"
            />
          </svg>
        </div>
      </div>
      <div className="semana-e-horario">
        <input type="time" /> <p>até</p>
        <input type="time" className="input-time" />
        <div>
          <p>Quinta-feira</p>
          <input type="text" className="dia-observacao" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"
            />
          </svg>
        </div>
      </div>

      <div className="form-botoes">
        <button onClick={voltar}>Voltar</button>
        <button>Salvar cronograma</button>
      </div>
    </form>
  );
}
