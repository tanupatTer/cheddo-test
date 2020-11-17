import './taskname.css'
import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { addtodo, deletetodo, updatetodo, settaskname, changemode, addActivityCreate, addActivityDelete, addActivityUpdate } from '../../actions/index'

function Taskname() {
    const dispatch = useDispatch()
    const modeselector = useSelector(state => state.modeselector)
    const listtodo = useSelector(state => state.listtodo)
    const taskname = useSelector(state => state.taskname.name)

    function handleChangeName(e) {
        dispatch(settaskname(e.target.value))
    }

    function addandchange() {
        if (modeselector.isModeChange) {
            dispatch(updatetodo(taskname, modeselector.id))
            dispatch(addActivityUpdate(taskname, modeselector.name))
        } else if (!modeselector.isModeChange) {
            dispatch(addtodo(taskname, listtodo.length))
            dispatch(addActivityCreate(taskname))
            dispatch(settaskname(''))
        }
        dispatch(changemode(false))
        dispatch(settaskname(''))
    }

    function deleteTodo() {
        if (modeselector.isModeChange) {
            dispatch(deletetodo(modeselector.id))
            dispatch(addActivityDelete(taskname))
        }
        dispatch(changemode(false))
        dispatch(settaskname(''))
    }

    return (
        <div className="align-self-center">
            <p className="text-center font-weight-bolder" style={{ fontSize: "1.8rem", color: 'white' }}>Task Name</p>
            <input type="text" className="form-control input-text" value={taskname} onChange={handleChangeName} aria-describedby="...." />
            <p className="pl-2" style={{ color: '#d4b248', height: '1rem' }}>{taskname != '' && 'Typing.....'}</p>
            <div className="row justify-content-center">
                <button type="button" onClick={addandchange} style={{ width: '40%' }} className="btn btn-success m-2" disabled={taskname == ''}>Button</button>
            </div>
            <div className="row justify-content-center">
                <button type="button" onClick={deleteTodo} style={{ width: '40%' }} className={`${taskname != '' && modeselector.isModeChange ? 'btn-delete' : ''} btn btn-text-color m-2`} disabled={taskname == '' || !modeselector.isModeChange}>Delete</button>
            </div>
        </div >
    )
}

export default Taskname