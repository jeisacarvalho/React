import { useState } from "react";
import Globais from "./componente/Globais";
import Info from "./componente/Info";

export default function App(){
  const [resumo,setResumo]=useState(Globais.resumo)

  const gravarResumo=()=>{
    Globais.resumo=resumo;
  }

  const verResumo=()=> {
    alert(Globais.resumo)
  }

  return (
    <>
    <Info/>
    <hr/>
    <p>{'Canal:' + Globais.canal}</p>
    <p>{'Curso:' + Globais.curso}</p>
    <p>{'Ano:' + Globais.ano}</p>
    <hr/>
    <input type="text" size='100' value={resumo} onChange={(e)=>setResumo(e.target.value)}/>
    
    <button onClick={()=>gravarResumo()}>Gravar Resumo</button>

    <button onClick={()=>verResumo()}>Ver Resumo</button>
    
    
    </>
  )
}

/*
Vamos criar um componente que vai chamar globais e dentro desse componentee nós vamos criar variáveis com o modificador static.

componentes com modificador static eles vão ter o mesmo endereço de memória para todo os aplicativos então qualquer componente que utilizar globais  as variáveis vai está acessando exatamente a mesma variável
*/