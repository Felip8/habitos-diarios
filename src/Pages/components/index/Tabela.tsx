import "../../../css/index/tabela.css";

export default function Tabela() {
  return (
    <div>
      <table className="tabela">
        <thead>
          <tr className="colunas">
            <th>Horário</th>
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
          <tr className="linhas">
            <td>08:00 - 10:00</td>
            <td>Estudar inglês</td>
            <td>Tomar banho</td>
          </tr>
          <tr>
            <td>08:00 - 10:00</td>
            <td>Estudar inglês</td>
            <td>Tomar banho</td>
          </tr>
        </tbody>
        {/* <tfoot>
          <tr>
            <td colspan="3">Dados atualizados em 2023</td>
          </tr>
        </tfoot> */}
      </table>
    </div>
  );
}
