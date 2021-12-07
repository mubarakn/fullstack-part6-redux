const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

export const initializeAnecdotes = anecdotes => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes
  }
}

export const createAnecdote = anecdote => ({ type: 'NEW_ANECDOTE', data: { anecdote } })

export const vote = id => ({ type: 'VOTE', data: { id } })

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_ANECDOTES':
      return action.data
    case 'VOTE':
      return state.map(anecdote => {
        if (anecdote.id !== action.data.id) {
          return anecdote
        }
        return { ...anecdote, ...{ votes: anecdote.votes + 1 } }
      })
    case 'NEW_ANECDOTE':
      return [...state, asObject(action.data.anecdote)]
    default:
      return state
  }
}

export default reducer