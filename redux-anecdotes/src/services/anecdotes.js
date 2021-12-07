import axios from 'axios'

const base_url = 'http://localhost:3001'

const getAll = async () => {
    const response = await axios.get(`${base_url}/anecdotes`)
    return response.data
}

const addAnecdote = async (content) => {
    const anecdote = { id: Math.floor(Math.random() * 1000000), content, votes: 0 }
    await axios.post(`${base_url}/anecdotes`, anecdote)
    return anecdote
}

const output = { getAll, addAnecdote }

export default output