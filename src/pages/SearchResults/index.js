import React, { useCallback ,useEffect, useRef } from 'react' 
import Spinner from '../../components/Spinner/Spinner'
import SearchForm from '../../components/SearchForm/SearchForm'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import useGifs from '../../hooks/useGifs'
import useNearScreen from '../../hooks/useNearScreen'
import debounce from 'just-debounce-it'
import useSEO from '../../hooks/useSEO'

export default function SearchResults ({ params }) {
    const { keyword, rating = 'g' } = params
    const { loading, gifs, setPage } = useGifs({ keyword, rating })
    const externalRef = useRef()
    const { isNearScreen } = useNearScreen({ externalRef: loading ? null : externalRef, once: false })
    
    const title = gifs ? `${gifs.length} results of ${keyword}` : ''
    useSEO({title})

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debounceHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1), 200
    ), [setPage])
    
    useEffect(function () {
        if(isNearScreen) debounceHandleNextPage()
    }, [debounceHandleNextPage, isNearScreen])
    
    return (
        <>
            {loading
                ? <Spinner />
                : <>
                    <SearchForm initialKeyword={keyword} initialRating={rating}/>
                    <ListOfGifs gifs={gifs} />
                    <div id="visor" ref={externalRef}></div>
                </> 
            }
            
        </>
    )
}
