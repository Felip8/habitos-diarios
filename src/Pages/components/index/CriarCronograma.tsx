import { useNavigate } from "react-router-dom";
import "../../../css/criarCronograma/criarCronograma.css";
import "../../../css/criarCronograma/tabela.css";
import { useState } from "react";

export default function CriarCronograma() {
  const navigate = useNavigate();
  const voltar = () => {
    navigate("/index");
  };

  const linhaVazia = {
    horaInicio: "",
    horaFim: "",
    segunda: "",
    terca: "",
    quarta: "",
    quinta: "",
    sexta: "",
    sabado: "",
    domingo: "",
  };

  const [linhas, setLinhas] = useState([linhaVazia]);

  const adicionarLinha = (e: React.FormEvent) => {
    e.preventDefault();
    setLinhas([...linhas, linhaVazia]);
  };

  const limparLinha = (e: React.FormEvent) => {
    e.preventDefault();
    setLinhas([linhaVazia]);
  };

  const lidarComMudança = (
    index: number,
    campo: keyof typeof linhaVazia,
    valor: string,
  ) => {
    const novaLinha = [...linhas];
    novaLinha[index][campo] = valor;
    setLinhas(novaLinha);
  };

  return (
    <div>
      <button onClick={voltar} className="button-voltar">
        Voltar
      </button>
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
            {linhas.map((linha, index) => (
              <tr key={index} className="linhas-criar-cronograma">
                <td className="linha-inputs">
                  <input
                    type="time"
                    className="horarios"
                    value={linha.horaInicio}
                    onChange={(e) =>
                      lidarComMudança(index, "horaInicio", e.target.value)
                    }
                  />
                  <p>até</p>
                  <input
                    type="time"
                    className="horarios"
                    value={linha.horaFim}
                    onChange={(e) =>
                      lidarComMudança(index, "horaFim", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={linha.segunda}
                    onChange={(e) =>
                      lidarComMudança(index, "segunda", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={linha.terca}
                    onChange={(e) =>
                      lidarComMudança(index, "terca", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={linha.quarta}
                    onChange={(e) =>
                      lidarComMudança(index, "quarta", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={linha.quinta}
                    onChange={(e) =>
                      lidarComMudança(index, "quinta", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={linha.sexta}
                    onChange={(e) =>
                      lidarComMudança(index, "sexta", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={linha.sabado}
                    onChange={(e) =>
                      lidarComMudança(index, "sabado", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={linha.domingo}
                    onChange={(e) =>
                      lidarComMudança(index, "domingo", e.target.value)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="botoes">
          <div>
            <button onClick={adicionarLinha} className="adicionar">
              +
            </button>
          </div>
          <button onClick={limparLinha} className="button-limpar">
            Limpar cronograma
          </button>
          <button className="button-salvar">Salvar cronograma</button>
        </div>
      </form>
    </div>
  );
}
