import Dados from "./Dados";

export default function Corpo() {
    // passando como função
    const cnl=()=>{
        return 'CFB cursos'
    }
    const yt='youtube.com/cfbcursos'
    const crs='React.js'

    const somar=(v1,v2)=>{
        return v1+v2
    }
    return(
        <section>
            <h2>Curso de React</h2>
            <Dados
            canal={cnl}
            youtube={yt}
            curso={crs}
            somar={somar}
            />

        </section>
    )
}