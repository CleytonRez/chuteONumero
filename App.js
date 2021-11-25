// Imports
import react, { useState } from "react";
import "./styles.css";

// Component Main( Componente Principal)
export default function App() {
  // Estado que armazena ENTRADA / RODANDO / FIM
  const [estado, setEstado] = useState("ENTRADA");

  // Estado que armazena os Palpite/ Chutes.
  const [palpite, setPalpite] = useState(150);

  // Estado que armazena a quantidade de Palpites.
  const [numPalpites, setNumPalpites] = useState(1);

  // Estado que armazena o valor Minimo a ser chutado.
  const [min, setMin] = useState(0);

  // Estado que armazena o valor Maximo a ser chutado.
  const [max, setMax] = useState(300);

  // Funcao que seta as Informacoes para iniciar o Jogo. ( Funcao Botao Iniciar)
  const iniciarJogo = () => {
    // Seta o Estado (estado) como RODANDO.
    setEstado("RODANDO");

    // Seta nos Estados (min, max, numPalpites e palpites) como os valores iniciais do jogo.
    setMin(0);
    setMax(300);
    setNumPalpites(1);
    setPalpite(150);
  };

  // Se o Estado (estado) for ENTRADA ele retorna o Menu Inicial do Jogo.
  if (estado === "ENTRADA") {
    return (
      <div className="cssEdit">
        <h1> Chutando o Numero: </h1>
        <button className="cssEdit" onClick={iniciarJogo}>
          Começar a Jogar!
        </button>
      </div>
    );
  }

  // Funcao que Diminui o Maximo possivel para ser chutado (Funcao Botao Menor).
  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);

    // Funcao que gera o proximo palpite.
    const proximoPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proximoPalpite);
  };

  // Funcao que Aumenta o Minimo possivel para ser chutado (Funcao Botao Maior).
  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setMin(palpite);

    // Funcao que gera o proximo palpite.
    const proximoPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proximoPalpite);
  };

  // Funcao que Seta o "Fim" no Estado (estado) finalizando o jogo(Funcao Botao Acertou).
  const acertou = () => {
    setEstado("FIM");
  };
  // Se o Estado (estado) for FIM ele retorna o Menu final monstrando o palpite e a quantidade de palpites até acertar.
  if (estado === "FIM") {
    return (
      <div className="cssEdit">
        <p className="cssEdit">
          Acertei o numero {palpite} com {numPalpites} chutes!
        </p>
        <button className="cssEdit" onClick={iniciarJogo}>
          {" "}
          Iniciar Novamente!
        </button>
      </div>
    );
  }

  // Retorna o Menu do Jogo em si.
  return (
    <div className="App">
      <h1> Chutando o Numero: </h1>
      <p> O Seu palpite é {palpite} ?</p>
      <p>
        Min: {min} | Max: {max}
      </p>
      <button onClick={menor}>Menor!</button>
      <button onClick={acertou}>Acertou!</button>
      <button onClick={maior}>Maior!</button>
    </div>
  );
}
