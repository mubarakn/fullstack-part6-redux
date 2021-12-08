let timerId = null

export const setNotification = (notification, seconds) => {
    return dispatch => {
        dispatch({ type: 'SET_NOTIFICATION', data: notification })

        if (timerId) {
            clearTimeout(timerId)
        }

        timerId = setTimeout(() => {
            dispatch({ type: 'CLEAR_NOTIFICATION' })
        }, seconds * 1000);
    }
}

const reducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION':
            return action.data
        case 'CLEAR_NOTIFICATION':
            return ''    
        default:
            return state
    }
}

export default reducer