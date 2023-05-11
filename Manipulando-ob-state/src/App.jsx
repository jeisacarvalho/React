// Manipulando objetos com State

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