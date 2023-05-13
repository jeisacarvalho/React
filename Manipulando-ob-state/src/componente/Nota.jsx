
export default function Nota(props){
    return (
        <div>
            <legend>Informe a nota:</legend>
            <input type="text" value={props.nota} onChange={(e)=>props.setNota(e.target.value)} />
        </div>
    )
}