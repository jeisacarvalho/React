export default function Dados(props) {

    let n1=10
    let n2=5
    return(
        // passando canal e soma como função
        <section>
            
            <p>Canal: {props.canal()}</p>
            
             <p>youtube: {props.youtube}</p>
              <p>Curso: {props.curso}</p>
              
              <p>{'A soma de ' + n1 + 'com' + n2 'é igual ' + props.somar(n1,n2)}</p>

        </section>
    )
}