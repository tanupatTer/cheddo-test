export const changemode = (isModeChange = false, id = '', name = '') => ({
    type: 'CHANGE_MODESELECTER',
    payload: {
        isModeChange: isModeChange,
        id: isModeChange ? id : '',
        name: isModeChange ? name : ''
    }
})