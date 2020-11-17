export const addtodo = (name = '', lengthId = 1) => ({
    type: 'ADD_TODO',
    payload: {
        id: Date.now() + lengthId.toString(),
        name: name
    },
})
export const updatetodo = (name = '', id = '') => ({
    type: 'UPDATE_TODO',
    payload: {
        id: id,
        name: name
    },
})
export const deletetodo = (id = '') => ({
    type: 'DELETE_TODO',
    payload: {
        id: id
    }
})