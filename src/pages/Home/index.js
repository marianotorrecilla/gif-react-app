import React, {useState} from 'react'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import TrendingSearches from '../../components/TrendingSearches/TrendingSearches'
import { useLocation } from 'wouter'
import useGifs from '../../hooks/useGifs'
import '../../App.css'

export default function Home () {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    const {loading, gifs} = useGifs()

    const handleSubmit = e => {
        e.preventDefault()
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = e => {
        setKeyword(e.target.value)
    }

    return (
        <>
            <TrendingSearches />
            <form onSubmit={handleSubmit}>
                <input
                    className="App-search-box"
                    onChange={handleChange} 
                    placeholder="search a gif here..." 
                    type='text' 
                    value={keyword} 
                />
            </form>
            <h3 className="App-title">Last search</h3>
            <ListOfGifs gifs={gifs} />
        </>
    )
}