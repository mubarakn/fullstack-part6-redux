import anecdoteService from '../services/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export const createAnecdote = anecdote => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(anecdote)
    dispatch({ type: 'NEW_ANECDOTE', data: newAnecdote })
  }
}

export const vote = anecdote => {
  return async dispatch => {
    const modifiedAnecdote = await anecdoteService.vote(anecdote)
    dispatch({ type: 'VOTE', data: modifiedAnecdote })
  }
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_ANECDOTES':
      return action.data
    case 'VOTE':
      return state.map(anecdote => {
        if (anecdote.id !== action.data.id) {
          return anecdote
        }
        return action.data
      })
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    default:
      return state
  }
}

export default reducer