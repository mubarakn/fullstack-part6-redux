import React, { useEffect } from 'react'
import Anecdotes from './components/Anecdotes'
import FilterAnecdote from './components/FilterAnecdote'
import NewAnecdote from './components/NewAnecdote'
import Notification from './components/Notification'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])
  
  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <FilterAnecdote />
      <Anecdotes />
      <NewAnecdote />
    </div>
  )
}

export default App