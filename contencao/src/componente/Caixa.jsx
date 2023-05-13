export default function Caixa(props) {
    return (
        <>
        <p>{props.site}</p>
        {props.children[0]}
        </>

    )
}

// Children ele vai retorna todos os elementos filhos de caixa

// elemento especifico => [0]