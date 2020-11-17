import { combineReducers } from 'redux'

import listtodo from './listtodo.reducer'
import taskname from './taskname.reducer'
import modeselector from './modeselector.reducer'
import activity from './activity.reducer'


export default combineReducers({
    listtodo,
    taskname,
    modeselector,
    activity
})