export default function fcalcular(props){
   const calc=()=>{
    props.sr(props.p/(props.a*props.a))
  }
  return(
    <div>
      <button onClick={calc}>Calcular</button>
    </div>
  )
}