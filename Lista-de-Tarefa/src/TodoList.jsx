import React, {useState} from "react";
import './TodoList.css'
import Icone from './assets/foto.webp';

function TodoList() {

    const [lista, setLista] = useState([]);
    const [novoItem, setNovoItem] = useState("");

    function adicionarItem(form) {
        form.preventDefault();
        if (!novoItem) {
            return;
        }
        setLista([...lista,{text: novoItem, iscompleted: false}]);
        setNovoItem("");
        document.getElementById('input-entrada').focus();
    }

    function clicou(index) {
        const listaAux = [...lista];
        listaAux[index].iscomplete = !listaAux[index].iscomplete;
        setLista(listaAux);
    }

    function deleta(index) {
        const listaAux = [...lista];
        listaAux.splice(index,1);
        setLista(listaAux);
    }
    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <form onSubmit={adicionarItem} >
                <input id="input-entrada" type="text" 
                value={novoItem}
                onChange={(e)=>{setNovoItem(e.target.value)}}

                placeholder="Adicionar Tarefas" />
                <button className="add" type="submit">Add</button>
            </form>
            <div className="ListaTarefa">
                <div style={{textAlign:'center'}} >
                {
                    lista.length < 1
                    ?
                    <img className="icone-central" src={Icone} />
                    :
                    lista.map((item, index)=> (

                    <div
                    key={index}
                      className={item.iscompleted ? "item completo" : "item"}>

                        <span onClick={() => {clicou(index)}}>{item.text}</span>

                        <button onClick={() => {deleta(index)}} className="del" >Deletar</button>

                </div>
            ))
                }
            
                
                <button className="deletaall" > Deletar Todas</button>

            </div>
        </div>
        </div>
    
    )
}

export default TodoList