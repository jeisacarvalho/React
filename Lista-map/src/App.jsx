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