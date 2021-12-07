import React from 'react'
import { useDispatch } from 'react-redux'
import { filter } from '../reducers/filterReducer'

const FilterAnecdote = () => {
    const dispatch = useDispatch()
    
    const handleFilter = ({ target }) => {
        dispatch(filter(target.value))
    }

    return (
        <div>
            <label>filter</label>
            <input type="text" onChange={handleFilter} />
        </div>
    )
}

export default FilterAnecdote