import React from "react";

function App() {
  const frase = "Hello World!!";
  const numero = 40;

  function clicou(exibicao){
      alert(exibicao * 10)
  }

  return (
    <div>
      <h1>{frase + ":)"}{numero + 1}</h1>
      <button onClick={() => clicou(20)}

    >
      20
      </button>

      <button onClick={() => clicou(100)}

    >
      100
      </button>
    </div>
  );
}

export default App;
