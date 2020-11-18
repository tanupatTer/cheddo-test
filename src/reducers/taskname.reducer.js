const initialState = {
    name: ''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case 'SET_TASKNAME':
            return { ...state, ...payload }

        default:
            return state
    }
}