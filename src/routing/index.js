import React from 'react'
import { Switch, Route } from 'react-router-dom'

import home from '../pages/home'
import page404 from '../pages/page404'

export default function Routing() {
    return (
        <Switch>
            <Route exact path="/" component={home} ></Route>
            <Route component={page404} ></Route>
        </Switch>
    )
}
