import './todolist.css'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { settaskname, changemode, fetchData } from '../../actions/index'

export default function Todolist() {
    const dispatch = useDispatch()

    const listtodo = useSelector(state => state.listtodo)
    const modeselector = useSelector(state => state.modeselector)

    // Get Data Todo List
    useEffect(() => {
        dispatch(fetchData())
    }, [])

    let divlisttodo = listtodo.map((todo, i) =>
        (<div className={`${todo.id === modeselector.id && 'select-item'} bd-highlight item-name pl-2`} key={i} onClick={() => { dispatch(settaskname(todo.name)); dispatch(changemode(true, todo.id, todo.name)); }} >{todo.name}</div>)
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
