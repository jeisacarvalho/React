import { useState } from "react"
function Titulo({cor}) {
    const [texto,setTexto] = useState("Um titulo do estado inicial")
    
    return (
    <div>
         <h1 style={{color:cor}}>{texto}</h1> 
         <button onClick={() => {setTexto("Mudei via botão")}}>mudei</button>
    </div>
    )
}

export default Titulo