const initialState = []
const activity = (state = initialState, { type, payload }) => {
    switch (type) {

        case 'ADD_ATIVITY':
            return [...state].concat([payload.msg])

        default:
            return state
    }
}
export default activity