// export default listTodo = (state = [], action) => {
//     let stateC
//     switch (action.type) {
//         // ADDLISTTODO

//         case 'ADD_LISTTODO':
//             stateC = [...state];
//             console.log(action.data);
//             stateC = action.data.data
//             // stateC.push(action.data);
//             return stateC

//         case 'ADD_TODO':
//             stateC = [...state];
//             stateC.push(action.data);
//             return stateC

//         case 'UPDATE_TODO':
//             return state.map((todo) => {
//                 return todo.id === action.data.id ? { ...todo, name: action.data.name } : todo
//             })

//         case 'DELETE_TODO':
//             console.log('DELETETODO', action);
//             return state.filter((todo) => todo.id !== action.id)
//         // return state

//         default:
//             return state
//     }

// }


const initialState = []
export default (state = initialState, { type, payload }) => {
    let stateC
    switch (type) {

        case 'ADD_LISTTODO':
            return [...state, ...payload]

        case 'ADD_TODO':
            stateC = [...state];
            stateC.push(payload);
            return stateC

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
