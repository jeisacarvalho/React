
import { useState } from 'react'
import LedVerde from './componentes/ledVerde.png'
import Led from './componentes/ledV.png'

export default function App(){

  const [ligado,setLigado]=useState(false)
  return (
    <>
    <img style={{width:'50px'}}src={ligado?LedVerde:Led}/>
    <button onClick={()=>setLigado(!ligado)}>{ligado?'Desligar':'Ligar'}</button>
   
    </>
  )
}