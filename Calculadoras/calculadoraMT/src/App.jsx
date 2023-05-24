import { useState } from "react";

export default function App() {
  //ESTILOS
  const cssTela = {
    display: "flex",
    paddingLeft: 20,
    paddingRight: 20,
    justifycontent: "center",
    alignItens: "flex-start",
    backgroundColor: "#444",
    flexDirection: "column",
    window: 260,
  };

  const cssTelaOper = {
    fontSize: 25,
    color: "#fff",
    height: 20,
  };

  const cssTelaRes = {
    fontSize: 50,
    color: "#fff",
  };

  const cssBtn = {
    fontSize: 30,
    height:75,
    with:75,
    padding:20,
    backgroundColor:'#000',
    color: "#fff",
    borderColor:'#000',
    textAlign:'center',
    outline:'none'

  };

  const [valorTela, setValorTela] = useState("");
  const [resultado, setResultado] = useState(0);
  const [acumulador, setAcumulador] = useState(0);
  const [operado, setOperado] = useState(false);

  //COMPONENTES

  const Tela = (valor, res) => {
    return (
      <div style={cssTela}>
        <span style={cssTelaOper}>{valor}</span>
        <span style={cssTelaRes}>{res}</span>
      </div>
    );
  };

  const Btn=(label,onclick)=>{
    return(
      <button style={cssBtn} onclick={onclick}>{label}</button>
    )
  }

  //FUNÇÕES
  const addDigitoTela=(d)=>{
    if((d=='+' || d=='-' || d=='*' || d=='/') && operado){
      console.log("+-*/")
      setOperado(false)
      setValorTela(resultado+d)
      return
    }
    if(operado){
      setValorTela(d),
      setOperado(false)
      return
    }
    const valorDigitadoTela=valorTela+d 
    setValorTela(valorDigitadoTela)
  }

  const limparMemoria=()=>{
    setOperado(false)
    setValorTela('')
    setResultado(0)
    setAcumulador(0)
    return
  }
  const Operacao=(oper)=>{
    if(oper=='bs'){
      let vtela=valorTela
      vtela=vtela.substring(0,(vtela.length-1))
      setValorTela(vtela)
      setOperado(false)
      return
    }
    try{
      const r=eval(valorTela) //calculo
      setAcumulador(r)
      setResultado(r)
      setOperado(true)
    }catch{
      setResultado('ERRO')
    }
  }
  return <></>;
}
