import { useState } from "react"

export default function App(){

  //ESTILOS
  const cssTela={
    display:'flex',
    paddingLeft:20,
    paddingRight:20,
    justifycontent:'center',
    alignItens:'flex-start',
    backgroundColor:'#444',
    flexDirection:'column',
    window:260
  }

   const cssTelaOper={
    fontSize:25,
    color:'#fff',
    height:20
   }

    const cssTelaRes={
    fontSize:50,
    color:'#fff',
    
   }

  const [valorTela,setValorTela]=useState('')
  const [resultado,setResultado]=useState(0)
  const [acumulador,setAcumulador]=useState(0)
  const [operacao,setOperacao]=useState(false)

const Tela=(valor,res)=>{
  return(
    <div style={cssTela} >
      <span style={cssTelaOper} > 
        {valor}
      </span>
       <span style={cssTelaRes}>
        {res}
      </span>
    </div>
  )

}

  return(
    <>
    
    
    </>
  )
}