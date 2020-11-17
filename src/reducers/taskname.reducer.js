const initialState = {
    name: ''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case 'SET_TASKNAME':
            // console.log(name);
            return { ...state, ...payload }

        default:
            return state
    }
}