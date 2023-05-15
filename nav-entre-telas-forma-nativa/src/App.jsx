import {useState, useEffect} from 'react'
import Pagina1 from "./componente/Pagina1"
import Pagina2 from "./componente/Pagina2"

export default function App(){

  const [pagina,setPagina]=useState(0)

  useEffect(
    ()=>{
      const url=window.location.href
      const res=url.split('?')
      setPagina(res[1])
    }
  )

  const LinksPaginas=(p)=>{
    if(p==1){
      window.open('http://localhost:5173?1','_self')
    }else if(p==2){
       window.open('http://localhost:5173?2','_self')
    }
  }

  const retonarPagina=()=>{
    if(pagina==1){
      return <Pagina1/>
    }else if (pagina==2){
      return <Pagina2/>
    }else{
      return <div>
               <button onClick={()=>LinksPaginas(1)}>Página 1</button>
               <button onClick={()=>LinksPaginas(2)}>Página 2</button>
             </div>
    }
  }
  return (
    <>
   { retonarPagina()}
    </>
  )
}