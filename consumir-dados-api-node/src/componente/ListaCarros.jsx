import axios from 'axios'
import React from 'react'

export default class ListaCarros extends React.Component{
    state={
        carros:[]
    }

    componentDidMount(){
        axios.get('https://cursos-exemplo1--jeisacarvalho.repl.co/')
        .then(res=>{
            const dadosCarros=res.data
            this.setState({carros:dadosCarros})
        })
    }
render(){
    return(
        <div>
            {this.state.carros.map(
                carro=> <div key={carro.id}>{carro.id} - {carro.marca} - {carro.modelo}</div>
            )}
        </div>

    )
}
}