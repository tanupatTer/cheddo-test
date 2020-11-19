import React from 'react'
import { useSelector } from 'react-redux'


export default function Activitylist() {
    const activitys = useSelector(state => state.activitys)

    let divlog = activitys.map((activitys, i) =>
        (<div className="p-1 bd-highlight" style={(i % 2 === 0) ? { backgroundColor: '#ffffff11' } : { backgroundColor: '#ffffff08' }} key={i} ><span>{activitys}</span></div>)
    )
    return (
        <div>
            <p className="text-center font-weight-bolder" style={{ fontSize: "1.8rem", color: "#8a85ff" }}>Activity List</p>
            <div className="d-flex flex-column text-left bd-highlight mb-3 overflow-auto border border-dark" style={{ backgroundColor: "#1c2025", height: "250px", borderRadius: '.4rem' }}>
                {divlog}
            </div>
        </div >
    )
}
