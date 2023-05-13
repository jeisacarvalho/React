import { useEffect,useState } from "react";

export default function App() {

  const [contagem,setContagem]=useState(0)

  useEffect(
    ()=>console.log("pagina carregada")
    
  )



  return (
    <>
    <p>Contagem: {contagem}</p>
    <button onClick={()=>setContagem(contagem+1)} >Contar</button>
    </>
  )
}

// toda vez que a pagina e atualizada ele chama o useEffect