import React, { useCallback ,useEffect, useRef } from 'react' 
import Spinner from '../../components/Spinner/Spinner'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import useGifs from '../../hooks/useGifs'
import useNearScreen from '../../hooks/useNearScreen'
import debounce from 'just-debounce-it'

export default function SearchResults ({ params }) {
    const { keyword } = params
    const { loading, gifs, setPage } = useGifs({ keyword })
    const externalRef = useRef()
    const { isNearScreen } = useNearScreen({ externalRef: loading ? null : externalRef, once: false })
     
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
                : 
                    <>
                        <ListOfGifs gifs={gifs} />
                        <div id="visor" ref={externalRef}></div>
                    </> 
                

            }
            
        </>
    )
}
