import React, { useEffect, useState }  from "react";

function Selecionados({selecionados}){
    const [ingredientes, setIngredientes] = useState(selecionados)
    const [showWarning, setshowWarning] = useState(false)

    useEffect(()=> {
        const newIngredientes = []

        for (let i = 0; i < selecionados.length && i < 3; i++){
            const element = selecionados[i];
            newIngredientes.push(element);
        }

        setIngredientes(newIngredientes);
        setshowWarning(selecionados.length >= 3);


    },  [selecionados]);


    return(
        <div>
            <h3>Selecionados:</h3>
            <u1>
                {ingredientes.map((ingrediente, index) => {
                    return <li key={index}> {ingrediente}</li>;
                })}
            </u1>
            {showWarning && <h4>Número máximo de ingredientes atingido</h4>}
        </div>
    );
}

export default Selecionados;
