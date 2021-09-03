import React from 'react' 
import { useLocation } from 'wouter'
import useForm from './hook'
import './SearchForm.css'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

function SearchForm ({ initialKeyword = '', initialRating = 'g'}) {
    const {keyword, rating, updateKeyword, updateRating} = useForm({ initialKeyword, initialRating })

    const [path, pushLocation] = useLocation()

    const handleSubmit = e => {
        e.preventDefault()
        pushLocation(`/search/${keyword}/${rating}`)
    }

    const handleChange = e => {
        updateKeyword(e.target.value)
    }

    const handleChangeRating = e => {
        updateRating(e.target.value)
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
            <select className="App-search-box" onChange={handleChangeRating} value={rating}>
                <option disabled >Rating type</option>
                {RATINGS.map(rating => <option key={rating}>{rating}</option>)}
            </select>
        </form>
    )
}

export default React.memo(SearchForm)