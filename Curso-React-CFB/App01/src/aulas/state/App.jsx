import { useState } from "react"
import Numero from "./Numero"

export default function App(){
    const [num,setNum]=useState(10)



    return(
        <>
          <p>Valor do state: {num}</p>
          <Numero num={num} setNum={setNum}/>
        </>
    )
    
}