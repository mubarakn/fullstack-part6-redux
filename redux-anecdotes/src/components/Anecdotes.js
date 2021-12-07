import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { changeNotification } from '../reducers/notificationReducer'

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
    const anecdotes = useSelector(({filter, anecdotes}) => {
        return anecdotes.filter(a => a.content.includes(filter))
    })
    .sort((a, b) => b.votes - a.votes)

    const voteAnecdote = (anecdote) => {
        dispatch(vote(anecdote.id))
        dispatch(changeNotification(`you voted '${anecdote.content}'`))
    }

    return anecdotes.map(anecdote => <Anecdote key={anecdote.id} anecdote={anecdote} vote={voteAnecdote} /> )
}

export default Anecdotes