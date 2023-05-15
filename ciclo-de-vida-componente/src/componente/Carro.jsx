import React from "react"

export default class carro extends React.Component{
    constructor(props){
        super(props)
        this.modelo='HRV'
        this.state={
            ligado:false,
            velAtual:0,
        }

        this.ld=this.ligarDesligar.bind(this)
    }

    
    ligarDesligar(){
        //this.state.ligado=true
        this.setState({ligado:!this.state.ligado})
        
        //this.setState(
            //(state)=>(
            //{ligado:!state.ligado}
            //)
        //)
    }

    // Forma mais indicada
    acelerar(){
        this.setState(
            (state,props)=>(
            {velAtual:state.velAtual + props.fator}
            )
        )
    }

    /*

    acelerar(){
        this.setState(
            {velAtual:this.state.velAtual + this.props.fator}
            )
        
    }
    */

// ele e chamdado automaticamente
    componentDidMount(){
        console.log('O carro foi criador')

    }

    //ele e chamado toda vez que o componente e atualizado
     componentDidUpdate(){
        console.log('O carro foi atualizado')

    }

    // ele vai ser automaticamente chamado toda vez que o componente for retirado do DOM
     componentWillUnmount(){
        console.log('O carro foi removido')

    }






render(){
    return(
        <div>
        <h1>Meu carro</h1>
        <p>Modelo: {this.modelo}</p>
        <p>Ligado: {this.state.ligado ? "sim" : "Não"}</p>
        <p>vel.Atual: {this.state.velAtual}</p>
        <button onClick={this.ld}>{this.state.ligado ? 'Desligar Carro' : 'Ligar Carro'}</button>

        <button onClick={()=>this.acelerar()}>
            Acerelar
        </button>

        
        </div>

    )
}
}