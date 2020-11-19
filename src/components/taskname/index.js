import './taskname.css'
import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

// import { addActivityCreate, addActivityUpdate, addActivityDelete, addListTodo, changeMode, fetchListTodo, removeListTodo, setTuskName, updateListTodo } from '../../actions/index'
import * as action from '../../actions/index'

function Taskname() {
    const dispatch = useDispatch()
    const modeselector = useSelector(state => state.modeselector)
    const listtodo = useSelector(state => state.listtodo)
    const taskname = useSelector(state => state.taskname.name)

    function handleChangeName(e) {
        dispatch(action.setTuskName(e.target.value))
    }

    function addandchange() {
        if (modeselector.isModeChange) {
            dispatch(action.updateListTodo(taskname, modeselector.id))
            dispatch(action.addActivityUpdate(taskname, modeselector.name))
        } else if (!modeselector.isModeChange) {
            dispatch(action.addListTodo(taskname, listtodo.length))
            dispatch(action.addActivityCreate(taskname))
        }
        dispatch(action.changeMode(false))
        dispatch(action.setTuskName(''))
    }

    function deleteTodo() {
        if (modeselector.isModeChange) {
            dispatch(action.removeListTodo(modeselector.id))
            dispatch(action.addActivityDelete(taskname))
        }
        dispatch(action.changeMode(false))
        dispatch(action.setTuskName(''))
    }

    return (
        <div className="align-self-center">
            <p className="text-center font-weight-bolder" style={{ fontSize: "1.8rem", color: 'white' }}>Task Name</p>
            <input type="text" className="form-control input-text" value={taskname} onChange={handleChangeName} aria-describedby="...." />
            <p className="pl-2" style={{ color: '#d4b248', height: '1rem' }}>{taskname !== '' && 'Typing.....'}</p>
            <div className="row justify-content-center">
                <button type="button" onClick={addandchange} style={{ width: '40%' }} className="btn btn-success m-2" disabled={taskname === ''}>Button</button>
            </div>
            <div className="row justify-content-center">
                <button type="button" onClick={deleteTodo} style={{ width: '40%' }} className={`${taskname !== '' && modeselector.isModeChange ? 'btn-delete' : ''} btn btn-text-color m-2`} disabled={taskname === '' || !modeselector.isModeChange}>Delete</button>
            </div>
        </div >
    )
}

export default Taskname