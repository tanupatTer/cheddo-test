import React from 'react'

import logo from '../images/logo.png'

import Todolist from '../components/todolist'
import Taskname from '../components/taskname'
import Activitylist from '../components/activitylist'

export default function Home() {
    return (
        <div>
            <div className="container">
                <div className="row align-items-center p-3">
                    <div className="col-4">
                        <img src={logo} className="mx-auto d-block" style={{ maxWidth: '75%' }} />
                    </div>
                    <div className="col-4">
                        <h1 className="text-center text-nowrap" style={{ fontSize: 'calc(1.5rem + 0.9vw)' }}>Front-end Developer Testting</h1>
                        <h3 className="text-center text-nowrap offset-3" style={{ fontSize: 'calc(1rem + 0.9vw)' }}>Cheddo Technogy Co.Ltd</h3>
                    </div>
                </div>
                <div className="row d-flex align-items-center">
                    <div className="col-4">
                        <Todolist />
                    </div>
                    <div className="col-4">
                        <Taskname />
                    </div>
                    <div className="col-4">
                        <Activitylist />
                    </div>
                </div>
            </div>
        </div>
    )
}
