import { useContext, useEffect, useState} from 'react' 
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

export default function useGifs ({ keyword } = {keyword: null}) {
    const [loading, setLoading] = useState(false)
    const {gifs, setGifs} = useContext(GifsContext)

    useEffect(function () {
        setLoading(true)

        /**
         * keywordToUse constant to retrieve the keyword of localStorage
         */

        const keywordToUse = keyword ? keyword : localStorage.getItem('lastKeyword') || 'random'

        getGifs({ keyword: keywordToUse })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)

                /**
                 * save keyword in localStorage
                 */

                localStorage.setItem('lastKeyword', keyword)
            })    
    }, [keyword, setGifs])

    return {loading, gifs}
}