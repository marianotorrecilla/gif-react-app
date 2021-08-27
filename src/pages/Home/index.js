import React, {useState} from 'react'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import { Link, useLocation } from 'wouter'
import useGifs from '../../hooks/useGifs'
import '../../App.css'

const POPULAR_GIFS = ["Joey", "Phoebe", "Chandler", "Mónica", "Ross", "Rachel"]

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
            <h3 className="App-title">The most popular gifs</h3>
            <ul className="App-ul">
                {POPULAR_GIFS.map((popularGif) => (
                    <li className="App-li" key={popularGif}>
                        <Link to={`/search/${popularGif}`}>
                            {popularGif} gifs
                        </Link>
                    </li>
                ))}
            </ul>
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