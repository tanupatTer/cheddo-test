// const modeDefault = {
//     isModeChange: false,
//     id: '',
//     name: ''
// }

// export default modeSelecter = (state = modeDefault, action) => {
//     switch (action.type) {
//         case 'CHANGE_MODESELECTER':
//             return action.data

//         default:
//             return state
//     }
// }


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
