import React, { useState } from 'react' 
import './SearchForm.css'

function SearchForm ({ onSubmit }) {
    const [keyword, setKeyword] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        onSubmit({keyword})
    }

    const handleChange = e => {
        setKeyword(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="App-search-box"
                onChange={handleChange} 
                placeholder="search a gif here..." 
                type='text' 
                value={keyword} 
            />
        </form>
    )
}

export default React.memo(SearchForm)