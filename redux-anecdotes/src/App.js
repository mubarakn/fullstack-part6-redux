import React from 'react'
import Anecdotes from './components/Anecdotes'
import FilterAnecdote from './components/FilterAnecdote'
import NewAnecdote from './components/NewAnecdote'
import Notification from './components/Notification'

const App = () => {
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