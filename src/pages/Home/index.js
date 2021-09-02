import React, { useCallback } from 'react'
import TrendingSearches from '../../components/TrendingSearches/TrendingSearches'
import SearchForm from '../../components/SearchForm/SearchForm'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import { useLocation } from 'wouter'
import useGifs from '../../hooks/useGifs'
import { Helmet } from 'react-helmet'
import '../../App.css'


export default function Home () {
    const [path, pushLocation] = useLocation()
    const {loading, gifs} = useGifs()

    const handleSubmit = useCallback(({keyword}) => {
        pushLocation(`/search/${keyword}`)
    }, [pushLocation])

    return (
        <>
            <Helmet>
                <title>Gif React App | Home</title>
            </Helmet>
            <TrendingSearches />
            <SearchForm onSubmit={handleSubmit}/>
            <h3 className="App-title">Last search</h3>
            <ListOfGifs gifs={gifs} />
        </>
    )
}