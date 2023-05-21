
import { useState } from "react";
import TabelaIMC from "./componentes/TabelaIMC";
import Fpeso from "./componentes/Fpeso";
import Faltura from "./componentes/Faltura";
import Fcalcular from "./componentes/Fcalcular";
import Fresultado from "./componentes/Fresultado";


export default function App(){


   const [peso,setPeso]=useState(0)
   const [altura,setAltura]=useState(0)
   const [resultado,setResultado]=useState(0)
   
   
  
  return(
    <div>
    

    <Fpeso p={peso} sp={setPeso}/>
    <Faltura a={altura} sa={setAltura}/>
    <Fcalcular p={peso} a={altura} sr={setResultado}/>
    <Fresultado r={resultado}/>
    <TabelaIMC/>
    
    </div>
  )
}