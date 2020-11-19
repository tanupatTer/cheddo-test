const initialState = []
const listtodo = (state = initialState, { type, payload }) => {
    switch (type) {

        case 'ADD_LISTTODO':
            return [...state, ...payload]

        case 'ADD_TODO':
            return [...state].concat([payload])

        case 'UPDATE_TODO':
            return state.map((todo) => {
                return todo.id === payload.id ? { ...todo, name: payload.name } : todo
            })

        case 'DELETE_TODO':
            return state.filter((todo) => todo.id !== payload.id)

        default:
            return state
    }
}
export default listtodo;