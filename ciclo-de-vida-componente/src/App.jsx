import { useState } from "react"
import Carro from "./componente/Carro"

export default function App(){
  const [carro,setCarro]=useState(true)
  const removerCarro=()=>{
    setCarro(!carro)
  }
  return (
    <>
    <h1>componentes de clases</h1>
    {carro ?<Carro fator={10}/> : ''}

    <button onClick={()=>removerCarro()}>
    ocultar</button>
    </>
  )
}

/*

Na montagem, quando uma instancia do componente está sendo criada no DOM

1- constructor()
2-static getDerivedStateFromProps()
3-render()
4-componenteDidMount()

Na atualização do componente, por alterações causadas em props ou state, quando o componente está sendo renderizado.

1- Static getDerivedStateFromProps()
2-ShouldComponenteUpdate()
3-render()
4-getSnapshotBeforeUpdate()
5-componentDidUpdate()

Na desmontagem, quando o componente está sendo removido do DOM

1-componentWillUnmount()

Em tratamento de erros, quando existir algum erro em momento no componente.

1-static getDerivedStateFromError()
2-componentDidCatch()
*/