import jsonPlaceholder from '../api/jsonPlaceholder'

export const fetchData = () => {
    return async dispatch => {
        const response = await jsonPlaceholder.get('/tanupatTer/testTodo/db')
        dispatch({
            type: 'ADD_LISTTODO',
            payload: response.data.data
        })
    }
}