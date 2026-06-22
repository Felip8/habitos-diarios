import { useNavigate } from "react-router-dom";
import "../css/characters/character.css";
import Pig from "../assets/logo.png";
import { useState } from "react";
import "../css/characters/characterForm.css";

interface Personagem {
  id: number;
  nome: string;
  foto: string;
}

export default function Characters() {
  const navigate = useNavigate();

  const voltar = () => {
    navigate("/criarCronograma");
  };

  //janela de criar o personagem
  const [modalAberto, setModalAberto] = useState<boolean>(false);

  //campos para pegar nome a foto do usuário
  const [nomeInput, setNomeInput] = useState<string>("");
  const [fotoInput, setFotoInput] = useState<string>("");

  //ja vai começar com um por padrão
  const [meusPersonagens, setMeusPersonagens] = useState<Personagem[]>([
    {
      id: 1,
      nome: "Pig",
      foto: Pig,
    },
  ]);

  const salvarNovoPersonagem = (e: React.FormEvent) => {
    e.preventDefault();

    const fotoFinal =
      fotoInput.trim() || "https://placehold.co/150?text=Sem+Foto";

    const novo: Personagem = {
      id: Date.now(),
      nome: nomeInput,
      foto: fotoFinal,
    };

    setMeusPersonagens([...meusPersonagens, novo]);

    setNomeInput("");
    setFotoInput("");
    setModalAberto(false);
    console.log(novo);
  };

  return (
    <div className="characters-page">
      <button onClick={voltar} className="button-voltar">
        Voltar
      </button>

      <div className="characters-container">
        {meusPersonagens.map((personagem, index) => (
          <div key={index} className="character-card">
            <p className="container-centraliza-p">{personagem.nome}</p>
            <img src={personagem.foto} alt="Pig" className="pig" />
            <p>{personagem.id === 1 ? "Current character" : null}</p>
          </div>
        ))}

        <div className="add-character">
          <button onClick={() => setModalAberto(true)}> + </button>
        </div>

        {modalAberto && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>Cadastrar personagem</h3>
              <form>
                <div className="form-group">
                  <label>Nome do personagem:</label>
                  <input
                    type="text"
                    value={nomeInput}
                    onChange={(e) => setNomeInput(e.target.value)}
                    placeholder="Character name"
                  />
                </div>
                <div className="form-group">
                  <label>Link da foto</label>
                  <input
                    type="text"
                    value={fotoInput}
                    onChange={(e) => setFotoInput(e.target.value)}
                    placeholder="Paste the link's image"
                  />
                </div>
              </form>
              <div className="botoes-centralizados">
                <button onClick={() => setModalAberto(false)}>Cancelar</button>
                <button onClick={salvarNovoPersonagem}>Salvar</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
