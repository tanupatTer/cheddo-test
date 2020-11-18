const initialState = {
    isModeChange: false,
    id: '',
    name: ''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case 'CHANGE_MODESELECTER':
            return { ...state, ...payload }

        default:
            return state
    }
}
