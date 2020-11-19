export const changeMode = (isModeChange = false, id = '', name = '') => {
    return dispatch => {
        dispatch({
            type: 'CHANGE_MODESELECTER',
            payload: {
                isModeChange: isModeChange,
                id: isModeChange ? id : '',
                name: isModeChange ? name : ''
            }
        })
    }
}