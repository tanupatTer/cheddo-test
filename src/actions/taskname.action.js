export const setTuskName = (name = '') => {
    return dispatch => {
        dispatch({
            type: 'SET_TASKNAME',
            payload: {
                name: name
            }
        })
    }
}