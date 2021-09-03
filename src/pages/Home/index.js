import React from 'react'
import TrendingSearches from '../../components/TrendingSearches/TrendingSearches'
import SearchForm from '../../components/SearchForm/SearchForm'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import useGifs from '../../hooks/useGifs'
import { Helmet } from 'react-helmet'
import '../../App.css'

export default function Home () {
    const {loading, gifs} = useGifs()

    return (
        <>
            <Helmet>
                <title>Gif React App | Home</title>
            </Helmet>
            <TrendingSearches />
            <SearchForm />
            <h3 className="App-title">Last search</h3>
            <ListOfGifs gifs={gifs} />
        </>
    )
}