export default function Resultado(props) {
    return (
        <div>
            <p>Soma das notas: {props.somaNota}</p>
            <p>{props.somaNota >= 60 ? "Aprovado" : "reprovado"}</p>
        </div>
    )
}