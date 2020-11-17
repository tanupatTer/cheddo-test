export const addActivityCreate = (name = '') => ({
    type: 'ADD_ATIVITY',
    payload: {
        msg: 'Created name ' + name
    }
})
export const addActivityDelete = (name = '') => ({
    type: 'ADD_ATIVITY',
    payload: {
        msg: 'Deleted name ' + name
    }
})
export const addActivityUpdate = (namenew = '', nameold = '') => ({
    type: 'ADD_ATIVITY',
    payload: {
        msg: 'Update name ' + nameold + ' to ' + namenew
    }
})
