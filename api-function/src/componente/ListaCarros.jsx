import axios from 'axios'
import  {useState,useEffect} from 'react'

export default function ListaCarros(){

    const[carros,setCarros]=useState([])

    useEffect(()=>{
        axios.get('https://cursos-exemplo1--jeisacarvalho.repl.co/')
        .then(res=>{
            const dadosCarros=res.data
            setCarros(dadosCarros)
        })
    }
    )

    return(
        <div>
            {carros.map(
                carro=> <div key={carro.id}>{carro.id} - {carro.marca} - {carro.modelo}</div>
            )}
        </div>

    )
}
