import axios from 'axios'

const base_url = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(base_url)
    return response.data
}

const createNew = async (content) => {
    const anecdote = { id: Math.floor(Math.random() * 1000000), content, votes: 0 }
    await axios.post(base_url, anecdote)
    return anecdote
}

const vote = async anecodte => {
    const newAnecdote = {...anecodte, ...{votes: anecodte.votes + 1} }
    await axios.put(`${base_url}/${anecodte.id}`, newAnecdote)
    return newAnecdote
}

const output = { getAll, createNew, vote }

export default output