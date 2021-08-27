import React from 'react' 
import Spinner from '../../components/Spinner/Spinner'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import useGifs from '../../hooks/useGifs'

export default function SearchResults ({ params }) {
    const { keyword } = params
    const { loading, gifs, setPage } = useGifs({ keyword })

    const handleNextPage = () => setPage(prevPage => prevPage + 1)
    
    return (
        <>
            {loading
                ? <Spinner />
                : <ListOfGifs gifs={gifs} />
            }
            <button className="NextPage-button" onClick={handleNextPage}>Get next page</button>
        </>
    )
}