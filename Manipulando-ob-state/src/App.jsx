//Elevação de State

import { useState } from "react"
import Notas from "./Notas"
import Resultado from "./Resultado"

export default function App(){

  const [nota1,setNota1]=useState(0)
  const [nota2,setNota2]=useState(0)
  const [nota3,setNota3]=useState(0)
  const [nota4,setNota4]=useState(0)



  return (
    <>
    <Notas num={1} nota={nota1} setNota={setNota1} />
    <Notas num={2} nota={nota2} setNota={setNota2} />
    <Notas num={3} nota={nota3} setNota={setNota3} />
    <Notas num={4} nota={nota4} setNota={setNota4} />
    <Resultado somaNotas={parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3)+parseFloat(nota4)} />
    
    
    </>
  )
}













// Manipulando objetos com State


/*
import { useState } from "react";

export default function App() {
  const [form,setForm]=useState({"nome":"","curso":"","ano":""})

  const hallformchange=(e)=>{
    if(e.target.getAttribute('name')=='fnome'){
      setForm({"nome":e.target.value,"curso":form.curso,"ano":form.ano})

    }else if(e.target.getAttribute('name')=='fcurso'){
      setForm({"nome":form.name,"curso":e.target.value,"ano":form.ano})

    }else if(e.target.getAttribute('name')=='fano'){
      setForm({"nome":form.name,"curso":form.curso,"ano":e.target.value})
      }
    }

  

  return (
    <>
    <label>Nome</label>
    <input type="text" name="fnome" value={form.nome} onChange={(e)=>hallformchange(e)}/><br/>

    <label>Curso</label>
    <input type="text" name="fcurso" value={form.curso} onChange={(e)=>hallformchange(e)}/><br/>

<label>Ano</label>
    <input type="text" name="fano" value={form.ano} onChange={(e)=>hallformchange(e)}/><br/>


    <p>Nome Digitado: {form.nome}</p>
    <p>Curso Digitado: {form.curso}</p>
    <p>Ano Digitado: {form.ano}</p>
    
    </>
  )
}
*/

