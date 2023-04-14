import React, {useState} from "react";
import './TodoList.css'
import Icone from './assets/icone.webp';

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
    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <form onSubmit={adicionarItem} >
                <input type="text" 
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
                    lista.map((item,index)=> (
                        <div className="item" >
                    <span>{item.text}</span>
                    <button className="del" >Deletar</button>

                </div>
                        

                    ))
                }
                <div className="item" >
                    <span>Tarefa de Exemplo</span>
                    <button className="del" >Deletar</button>

                </div>
                <div className="item completo">
                    <span>Tarefa de Exemplo</span>
                    <button className="del" >Deletar</button>

                </div>
                <button className="deletaall" > Deletar Todas</button>

            </div>
        </div>
        </div>
    )
}

export default TodoList