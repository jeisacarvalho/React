
import Carro from "./componente/Carro"

export default function App(){
  return (
    <>
    <h1>componentes de clases</h1>
    <Carro fator={10}/>
    </>
  )
}






/*
BIND é uma ligação quando o componente usa o BIND está estabelecendo uma ligação, ele basicamente vai permitir a gente mudar o conceito do THIS de um determinado elemento, então ele vai criar uma função nova e quando essa função for chamada ela vai ter o THIS redifinido apontando para outro elemento
*/