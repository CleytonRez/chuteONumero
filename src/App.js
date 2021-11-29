import react, { useState } from "react";
import "./styles.css";

export default function App() {
  const [estado, setEstado] = useState("ENTRADA");

  const [palpite, setPalpite] = useState(150);
  const [numPalpites, setNumPalpites] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(300);
    setNumPalpites(1);
    setPalpite(150);
  };
  if (estado === "ENTRADA") {
    return (
      <div className="container">
        <h1 className="container"> Acertando o Numero: </h1>
        <button className="buttonComecarOJogo" onClick={iniciarJogo}>
          Começar a Jogar!
        </button>
      </div>
    );
  }

  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);

    const proximoPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proximoPalpite);
  };

  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setMin(palpite);

    const proximoPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proximoPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };
  if (estado === "FIM") {
    return (
      <div className="container">
        <h2 className="container">
          Acertei o numero {palpite} com {numPalpites} chutes!
        </h2>
        <button className="buttonIniciarJogo" onClick={iniciarJogo}>
          {" "}
          Iniciar Novamente!
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="container">
        <h1 className="container"> Acertando o Numero: </h1>
        <p className="container"> O Seu palpite é {palpite} ?</p>
        <button className="buttonMenor" onClick={menor}>
          Menor!
        </button>
        <button className="buttonAcertou" onClick={acertou}>
          Acertou!
        </button>
        <button className="buttonMaior" onClick={maior}>
          Maior!
        </button>
      </div>
    </div>
  );
}
