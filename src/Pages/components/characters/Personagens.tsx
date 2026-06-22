import { listaDePersonagensPadrao } from "../../interfaces/defaultCharacters";
import "../../../css/characters/galeria.css";

interface PersonagensProps {
  onFechar: () => void;
  onSelecionarFoto: (urlDaFoto: string) => void;
}

export default function Personagens({
  onFechar,
  onSelecionarFoto,
}: PersonagensProps) {
  return (
    <div className="container-galeria">
      <div className="card-galeria">
        <h3>Escolha o avatar</h3>
        {listaDePersonagensPadrao.map((item) => (
          <img
            key={item.id}
            src={item.foto}
            alt=""
            className="pig"
            onClick={() => {
              onSelecionarFoto(item.foto);
              onFechar();
            }}
          />
        ))}
        <div>
          <button type="button" onClick={onFechar}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
