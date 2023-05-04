
import Logo from './componentes/imgs/logo.png'

export default function App(){
    const canal=()=> {
        return('CFB cursos')
    }

    function curso() {
        return 'curso de React'
    }

    return(
        <section>
            <header>
                <p>{'canal: ' + canal()}</p>
                <p>{curso()}</p>
            </header>
        <section>
        <img src={Logo}/>
        <img src='/img/eu.png'/>
        </section>
        </section>
    )
}