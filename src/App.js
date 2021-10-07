import React, {useState} from "react";


function App() {

  const [membro, setMembro] = useState();

  function handleInputChanges(e){
    const key = e.target.name;

    const newMembro = {...membro}
    newMembro[key] = e.target.value;

    setMembro(newMembro)
    console.log(newMembro)
  }

  return (
    <div>
      <h1>Novo Membro</h1>
      <input 
        type="text" 
        placeholder="Nome" 
        name = "nome"
        onChange={handleInputChanges}/>
      <br></br>
      <input 
        id="GS" 
        type="radio" 
        name="cargo" 
        value="Gerente Scrum" 
        onChange={handleInputChanges}/>
      <label htmlFor="GS">Gerente Scrum</label>
      <br></br>
      <input 
        id="GP" 
        type="radio" 
        name="cargo"
        value="Gerente de Produtos" 
        onChange={handleInputChanges}/>
      <label htmlFor="GP">Gerente de Produtos</label>
      <br></br>
      <input 
        type="Number" 
        placeholder="Idade" 
        name = "idade"
        onChange={handleInputChanges}/>
      <br></br>
      <input 
        type="text" 
        placeholder="Estado" 
        name = "Estado"
        onChange={handleInputChanges}/>
      <br></br>
      <input 
        type="text" 
        placeholder="Cidade" 
        name = "cidade"
        onChange={handleInputChanges}/>
      <br></br>
      <input 
        type="text" 
        placeholder="Curso" 
        name = "curso"
        onChange={handleInputChanges}/>
      <input 
        id="di" 
        type="radio" 
        name="turno"
        value="Diurno" 
        onChange={handleInputChanges}/>
      <label htmlFor="di">Diurno</label>
      <input 
        id="nt" 
        type="radio" 
        name="turno"
        value="Noturno" 
        onChange={handleInputChanges}/>
      <label htmlFor="nt">Noturno</label>
      
    </div>
  );
}

export default App;
