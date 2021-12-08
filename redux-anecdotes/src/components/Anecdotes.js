import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, vote }) => {
    return (
        <div key={anecdote.id}>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote)}>vote</button>
            </div>
        </div>
    )
}

const Anecdotes = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(({filter, anecdotes}) => anecdotes.filter(a => a.content.includes(filter)))
    .sort((a, b) => b.votes - a.votes)

    const voteAnecdote = (anecdote) => {
        dispatch(vote(anecdote))
        dispatch(setNotification(`you voted '${anecdote.content}'`, 5))
    }

    return anecdotes.map(anecdote => <Anecdote key={anecdote.id} anecdote={anecdote} vote={voteAnecdote} /> )
}

export default Anecdotes