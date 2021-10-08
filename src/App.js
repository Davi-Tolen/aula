import React, {useState} from "react";
import Selecionados from "./Components/Selecionados";

function App() {

  const [ingredientes, setIngredientes] = useState([]);

  function handleInputChanges(e){
    const value = e.target.value;

    const newIngredientes = [...ingredientes]
    const index = ingredientes.indexOf(value)

    if (index === -1) newIngredientes.push(value);
    else newIngredientes.splice(index, 1);

    setIngredientes(newIngredientes);
  }

  return (
    <div>
      <h1>Ingredientes</h1>
      <input 
        id="pepperonni"
        type="checkbox"
        value="pepperonni"
        onChange={handleInputChanges}
        />
      <label htmlFor="pepperonni">pepperonni</label>
      <br></br>
      <input 
        id="queijo"
        type="checkbox"
        value="queijo"
        onChange={handleInputChanges}
        />
      <label htmlFor="queijo">queijo</label>
      <br></br>
      <input 
        id="frango"
        type="checkbox"
        value="frango"
        onChange={handleInputChanges}
        />
      <label htmlFor="frango">frango</label>
      <br></br>
      <input 
        id="catupiry"
        type="checkbox"
        value="catupiry"
        onChange={handleInputChanges}
        />
      <label htmlFor="catupiry">catupiry</label>
      <br></br>
      <input 
        id="molho de tomate"
        type="checkbox"
        value="molho de tomate"
        onChange={handleInputChanges}
        />
      <label htmlFor="molho de tomate">molho de tomate</label>
      <br></br>
      <Selecionados selecionados={ingredientes}/>
    </div>
  );
}

export default App;
