const initialState = {
    isModeChange: false,
    id: '',
    name: ''
}

const mode = (state = initialState, { type, payload }) => {
    switch (type) {

        case 'CHANGE_MODESELECTER':
            return { ...state, ...payload }

        default:
            return state
    }
}
export default mode;