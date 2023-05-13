import React from "react"

export default class Classe extends React.Component{
    constructor(props){
        super(props)
    }
render(){
    return(
        <div>
        <h1>Primeiro Componente de classe</h1>
        <p>Canal: {this.props.canal}</p>
        </div>

    )
}
}






// extends- herança quando um objeto herda uma classe, objeto de uma classe herda outra classe 