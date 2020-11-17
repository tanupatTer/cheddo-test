export const settaskname = (name = '') => ({
    type: 'SET_TASKNAME',
    payload: {
        name: name
    }
})