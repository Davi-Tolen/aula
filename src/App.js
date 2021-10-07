import React, {useState} from "react";


function App() {

  const [nome, setNome] = useState();
  const [cargo, setCargo] = useState();

  return (
    <div>
      <h1>Novo Membro</h1>
      <input type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value)}/>
      <br></br>
      <input id="GS" type="radio" name="cargo" value="Gerente Scrum" onChange={(e) => setCargo(e.target.value)}/>
      <label htmlFor="GS">Gerente Scrum</label>
      <br></br>
      <input id="GP" type="radio" name="cargo" value="Gerente de Produtos" onChange={(e) => setCargo(e.target.value)}/>
      <label htmlFor="GP">Gerente de Produtos</label>
      <p>Nome do Membro:{nome}</p>
      <p>Cargo do Membro: {cargo}</p>
    </div>
  );
}

export default App;
