import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Teste() {
  const navigate = useNavigate();

  const voltar = () => {
    navigate("/criarCronograma");
  };

  const [status, setStatus] = useState("Desativado");

  useEffect(() => {
    alert("O status mudou! O novo status é: " + status);
  }, [status]);

  return (
    <div>
      <button onClick={voltar} className="button-voltar">
        Voltar
      </button>
      <h1>Exercício 4: </h1>
      <p>Estado atual: {status}</p>
      <button onClick={() => setStatus("Ativado")}>Ligar</button>
      <button onClick={() => setStatus("Desativado")}>Desligar</button>
    </div>
  );
}
