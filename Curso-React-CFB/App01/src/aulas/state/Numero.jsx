export default function Numero(props) {
    return (
        <p>
            <p>valor do state num em Numero: {props.num}</p>
            <button onClick={()=>props.setNum(props.num+10)}>Soma de 10</button>
        </p>

    )
}