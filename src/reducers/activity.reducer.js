// let stateC
// export default addActivity = (state = [], action) => {
//     switch (action.type) {

//         case 'ADD_ATIVITY':
//             stateC = [...state]
//             stateC.push(action.msglog)
//             return stateC

//         default:
//             return state
//     }
// }

let stateC
const initialState = []
export default (state = initialState, { type, payload }) => {
    switch (type) {

        case 'ADD_ATIVITY':
            stateC = [...state]
            stateC.push(payload.msg)
            return stateC

        default:
            return state
    }
}
