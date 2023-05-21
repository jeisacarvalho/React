import React from "react"
export default class fcalcular extends React.Component{
  constructor(){
  super()
  this.calc=this.fcalc.bind(this)
  }
  fcalc=()=>{
    const r=this.props.p/(props.a*props.a)
    this.props.sr(r)
    //console.log(r)
  }
  render(){
  return(
    <div>
      <button onClick={this.calc}>Calcular</button>
    </div>
  )
}
}