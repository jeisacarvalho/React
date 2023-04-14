import React, {useState} from "react";
import './TodoList.css';

function TodoList() {

    const [Lista, setLista] = useState([]);
    const [novoItem, setNovoItem] = useState("");

    function adicionarItem(form) {
        form.preventDafault();
        if (!novoItem) {
            return;
        }
        setLista([...lista, {text: novoItem, iscompleted:false}])
    }
    return (
        <div>
            <h1>Lista de Tarefas</h1>

            <form onSubmit={adicionarItem}>

                <input type="text" 
                value={novoItem}
                onChange={(e) => {setNovoItem(e.target.value)}}
                placeholder="Adicionar uma tarefa"/>
                <button className="add" type="submit">Add</button>

            </form>
            <div className="listaTarefa">
                <div className="item"> 
                <span>Tarefa de exemplo</span>
                <button className="del" >Deletar</button>
            </div>
            <div className="item competo">
                <span>Tarefa de exemplo</span>
                <button className="del" >Deletar</button>

            </div>
            <div>
                <button className="deletarall" >Deletar Todas</button>
            </div>
        </div>
        </div>
    )
}

export default TodoList