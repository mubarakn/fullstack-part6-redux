export const changeNotification = (notification) => ({ type: 'CHANGE_NOTIFICATION', notification })

const reducer = (state = '', action) => {
    if (action.type === 'CHANGE_NOTIFICATION') {
        return action.notification
    }
    return state
}

export default reducer