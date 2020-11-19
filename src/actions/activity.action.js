export const addActivityCreate = (name = '') => {
    return dispatch => {
        dispatch({
            type: 'ADD_ATIVITY',
            payload: {
                msg: 'Created name ' + name
            }
        })
    }
}
export const addActivityDelete = (name = '') => {
    return dispatch => {
        dispatch({
            type: 'ADD_ATIVITY',
            payload: {
                msg: 'Deleted name ' + name
            }
        })
    }
}
export const addActivityUpdate = (namenew = '', nameold = '') => {
    return dispatch => {
        dispatch({
            type: 'ADD_ATIVITY',
            payload: {
                msg: 'Update name ' + nameold + ' to ' + namenew
            }
        })
    }
}
