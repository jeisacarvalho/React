import { useState } from "react"
import Nota from "./componente/Nota"
import Resultado from "./componente/Resultado"

export default function App(){

  const [nota1,setNota1]=useState(0)
  const [nota2,setNota2]=useState(0)
  const [nota3,setNota3]=useState(0)
  const [nota4,setNota4]=useState(0)



  return (
    <>
    <Nota num={1} nota={nota1} setNota={setNota1} />
    <Nota num={2} nota={nota2} setNota={setNota2} />
    <Nota num={3} nota={nota3} setNota={setNota3} />
    <Nota num={4} nota={nota4} setNota={setNota4} />
    <Resultado somaNota={parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3)+parseFloat(nota4)} />
    
    
    </>
  )
}

//Elevação de State
/*
import { useState } from "react"
import Notas from "./Notas"
import Resultado from "./Resultado"

export default function App(){

  const [notas,setNotas]=useState({"nota1":"0","nota2":"0","nota3":"0","nota4":"0"})
  const handleSetNotas=(e)=>{
    if(e.target.getAttribute('name')=='nota1'){
      setNotas({"nota1":e.target.value,"nota2":notas.nota2,"nota3":notas.nota3,"nota4":notas.nota4})

    }else if(e.target.getAttribute('name')=='nota2'){
      setNotas({"nota1":notas.nota1,"nota2":e.target.value,"nota3":notas.nota3,"nota4":notas.nota4})

    }else if(e.target.getAttribute('name')=='nota3'){
      setNotas({"nota1":notas.nota1,"nota2":notas.nota2,"nota3":e.target.value,"nota4":notas.nota4})

    }else if(e.target.getAttribute('name')=='nota4'){
      setNotas({"nota1":notas.nota1,"nota2":notas.nota2,"nota3":notas.nota3,"nota4":e.target.value})
    }


  }



  return (
    <>
    <Notas num={1} nome={'nota1'} nota={notas.nota1} setNota={handleSetNotas} />
    <Notas num={2} nome={'nota2'} nota={notas.nota2} setNota={handleSetNotas} />
    <Notas num={3} nome={'nota3'} nota={notas.nota3} setNota={handleSetNotas} />
    <Notas num={4} nome={'nota4'} nota={notas.nota4} setNota={handleSetNotas} />
    <Resultado somaNotas={parseFloat(notas.nota1)+parseFloat(notas.nota2)+parseFloat(notas.nota3)+parseFloat(notas.nota4)} />
    
    
    </>
  )
}
*/









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

