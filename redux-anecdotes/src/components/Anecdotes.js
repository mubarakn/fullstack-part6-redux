import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'

const Anecdote = ({ anecdote, vote }) => {
    return (
        <div key={anecdote.id}>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
        </div>
    )
}

const Anecdotes = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state).sort((a, b) => b.votes - a.votes)

    const voteAnecdote = (id) => {
        dispatch(vote(id))
    }

    return (
        <>
            <h2>Anecdotes</h2>
            {anecdotes.map(anecdote => <Anecdote anecdote={anecdote} vote={voteAnecdote} /> )}
        </>
    )
}

export default Anecdotes