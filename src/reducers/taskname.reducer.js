const initialState = {
    name: ''
}

const tuskname = (state = initialState, { type, payload }) => {
    switch (type) {

        case 'SET_TASKNAME':
            return { ...state, ...payload }

        default:
            return state
    }
}
export default tuskname;