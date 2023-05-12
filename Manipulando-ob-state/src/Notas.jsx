export default function Notas(props){
    return (
        <div>
            <legend>Informe a nota:</legend>
            <input type="text" value={props.notas} onChange={(e)=>props.setNota(e.target.value)}></input>
        </div>
    )
}