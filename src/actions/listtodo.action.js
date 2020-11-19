import jsonPlaceholder from '../api/jsonPlaceholder'

export const fetchListTodo = () => {
    return async dispatch => {
        await jsonPlaceholder.get('/tanupatTer/testTodo/db')
            .then((res) => {
                dispatch({
                    type: 'ADD_LISTTODO',
                    payload: res.data.data
                })
            })
            .catch((e) => {
                console.log(e);
            })
    }
}

export const addListTodo = (name = '', lengthId = 1) => {
    return async dispatch => {
        let id = Date.now() + lengthId.toString()
        dispatch({
            type: 'ADD_TODO',
            payload: {
                id: id,
                name: name
            },
        })
    }

}
export const updateListTodo = (name = '', id = '') => {
    return dispatch => {
        dispatch({
            type: 'UPDATE_TODO',
            payload: {
                id: id,
                name: name
            },
        })
    }
}

export const removeListTodo = (id = '') => {
    return dispatch => {
        dispatch({
            type: 'DELETE_TODO',
            payload: {
                id: id
            }
        })
    }
}