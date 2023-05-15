export default class BaseClasse extends React.Component{
    constructor(props){
        //para permitir o uso de props
        super(props)

        //state
        this.State={
            canal: 'CFB Cursos', 
            curso:'React',
            ativo:true,
            nome:this.props.nomeAluno
        }
        this.status=this.props.status
        
        //bindagem
        let ad=ativarDesativar.bind(this)
        // Instruções de construtor
    }

}
//Função para manipilar state
ativarDesativar(){

    this.setState(
        state=>({
            ativo=!state.ativo
        })
    )
}

componentDidMount(){
    console.log('O componente foi criado')
}

componentDidUpdate(){
    console.log('O componente foi atualizado')
}

componentDidUnmount(){
    console.log('O componente foi removido')
}

render(){
    return(
        <>
        <h1>Componente de Classe</h1>
        <button onClick={this.ad}>Ativar Desativar</button>

        <button onClick={()=>this.ativarDesativar}>Ativar Desativar</button>
        </>
    )
}