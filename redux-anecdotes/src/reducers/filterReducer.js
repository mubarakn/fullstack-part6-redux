
export const filter = query => ({ type: 'FILTER', filter: query })

const filterReducer = (state = '', action) => {
    if (action.type === 'FILTER') {
        return action.filter
    }
    return state
}

export default filterReducer