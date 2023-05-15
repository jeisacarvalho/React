import { useState } from "react"

const carros=[
  {categoria:"Esporte",preço:"110000",modelo:"Golf GTI"},
  {categoria:"Esporte",preço:"120000",modelo:"Camaro"},
  {categoria:"SUV",preço:"85000",modelo:"HRV"},
  {categoria:"SUV",preço:"830000",modelo:"T-Cross"},
  {categoria:"Utilitario",preço:"125000",modelo:"Hillux"},
  {categoria:"Utilitario",preço:"90000",modelo:"Ranger"},
]

const linhas=(cat)=>{
  const li=[]
  carros.forEach(
    (carro)=>{
      if(carro.categoria.toUpperCase()==cat.toUpperCase() || cat.toUpperCase() == ''){
        li.push(
          <tr>
            <td>{carro.categoria}</td>
            <td>{carro.preço}</td>
            <td>{carro.modelo}</td>
          </tr>
        )
      }
    }
  )
  return li
}

const TabelaCarros=(cat)=>{
  return(
    <table border='1' style={{borderCollapse:'Collapse'}}>
      <thead>
        <tr>
          <th>Categoria</th><th>Preço</th><th>Modelo</th>
        </tr>
      </thead>
      <tbody>
        {linhas(cat)}
      </tbody>
    </table>
  )

}

const pesquisaCategoria=(cat,scat)=>{
  return(
    <div>
      <label>Digite uma categoria</label>
      <input type="text" value={cat} onChange={(e)=>scat(e.target.value)}/>
    </div>
  )
}

export default function App() {
  const [categoria,setCategoria]=useState('')
  return (
    <>
    {pesquisaCategoria(categoria,setCategoria)}
    <br/>
    {TabelaCarros(categoria)}
    </>
  )
}