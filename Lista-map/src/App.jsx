// Manipulando elememtos de formulário com React
import { useState } from "react"

export default function App() {

  const [nome,setNome]=useState('')
  const [carro,setCarro]=useState('')
  return (
    <>
    <label>Digite seu Nome</label>
    <input type="text" name="fnome"  
    value={nome}
    onChange={(e)=>setNome(e.target.value)}
    
    />
    <p>Nome digitado: {nome}</p>

    <label>Selecione um carro</label>
    <select value={carro} onChange={(e)=>setCarro(e.target.value)}>
      <option value="HRV>">HRV</option>
      <option value="Golf>">Golf</option>
      <option value="Cruze>">Cruze</option>
      <option value="Argo>">Argo</option>
    </select>
    <p>Carro selecionado {carro}</p>
    </>
  )
}





// Trabalhando com Lista em React usando a função MAP

/*
export default function App() {

  const carros=['HRV','Golf','Focus','Cruze','Argo']
  const listaCarros=carros.map(
    (c,i)=> 
    <li key={i} >{c}</li>
    

  )

  return (
    <>
    <h1>CFG cursos</h1>
    <ul>{listaCarros}</ul>
    </>
  )
}
*/