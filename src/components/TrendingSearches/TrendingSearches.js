import React, { useEffect, useState } from 'react' 
import getTrendingTerms from '../../services/getTrendingTermsService'
import Category from '../Category/Category'

export default function TrendingSearches () {
    const [trends, setTrends] = useState([])

    useEffect(function () {
        getTrendingTerms().then(setTrends)
    }, [])

    return <Category name='The most popular gifs' options={trends}/>
}