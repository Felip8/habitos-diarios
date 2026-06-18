import { useNavigate } from "react-router-dom";
import "../../../css/criarCronograma/criarCronograma.css";
import "../../../css/criarCronograma/tabela.css";

export default function CriarCronograma() {
  const navigate = useNavigate();
  const voltar = () => {
    navigate("/index");
  };

  return (
      <div>
        <form className="centraliza-botao-com-a-tabela">
        <table className="tabela-criar-cronograma">
          <thead>
            <tr className="tabela-cabecalho">
              <th className="teste">Horário</th>
              <th>Segunda</th>
              <th>Terça</th>
              <th>Quarta</th>
              <th>Quinta</th>
              <th>Sexta</th>
              <th>Sábado</th>
              <th>Domingo</th>
            </tr>
          </thead>
          <tbody>
            <tr className="linhas-criar-cronograma">
              <td className="linha-inputs">
                <input type="time" className="horarios"/> 
                <p>até</p>
                <input type="time" className="input-time" />
              </td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>
            <tr className="linhas-criar-cronograma">
              <td className="linha-inputs">
                <input type="time" className="horarios"/> 
                <p>até</p>
                <input type="time" className="input-time" />
              </td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              
            </tr>
            <tr className="linhas-criar-cronograma">
              <td className="linha-inputs">
                <input type="time" className="horarios"/> 
                <p>até</p>
                <input type="time" className="input-time" />
              </td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>
            <tr className="linhas-criar-cronograma">
              <td className="linha-inputs">
                <input type="time" className="horarios"/> 
                <p>até</p>
                <input type="time" className="input-time" />
              </td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>
            <tr className="linhas-criar-cronograma">
              <td className="linha-inputs">
                <input type="time" className="horarios"/> 
                <p>até</p>
                <input type="time" className="input-time" />
              </td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>
          </tbody>
        </table>
        <div className="botoes">
          <button>Limpar</button>
          <button>Salvar</button>
        </div>
      
      
    </form>
    <button onClick={voltar}>Voltar</button>
      </div>


    
  );
}
