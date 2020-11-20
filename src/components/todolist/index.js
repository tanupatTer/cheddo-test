import './todolist.css'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


// import { changeMode, setTuskName } from '../../actions/index'
import * as action from '../../actions/index'

export default function Todolist() {
    const dispatch = useDispatch()
    const listtodo = useSelector(state => state.listtodo)
    const modeselector = useSelector(state => state.modeselector)

    const handleClickItem = (todo) => () => {
        dispatch(action.setTuskName(todo.name));
        dispatch(action.changeMode(true, todo.id, todo.name));
        document.getElementById('tuskname').focus();
    }

    let divlisttodo = listtodo.map((todo, i) =>
        (<div className={`${todo.id === modeselector.id && 'select-item'} bd-highlight item-name pl-2`} key={i} onClick={handleClickItem(todo)} >{todo.name}</div>)
    )

    return (
        <div>
            <p className="text-center font-weight-bolder" style={{ fontSize: "1.8rem", color: "#8a85ff" }}>Todo List</p>
            <div className="d-flex flex-column bd-highlight mb-3 overflow-auto border border-dark" style={{ backgroundColor: "#1c2025", height: "250px", borderRadius: '.4rem' }}>
                {divlisttodo}
            </div>
        </div>
    )
}
