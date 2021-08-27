import React, {Suspense} from 'react' 
import useNearScreen from '../../hooks/useNearScreen'
import Spinner from '../Spinner/Spinner'

/**
 * dinamic import of component TrandingSearches when we need to use
 */

const TrendingSearches = React.lazy(
    () => import('./TrendingSearches')
)

export default function LazyTrending () {
    const {isNearScreen, fromRef } = useNearScreen({ distance: '200px' })

    return (
        <div ref={fromRef}>
            <Suspense fallback={<Spinner />}>
                {isNearScreen ? <TrendingSearches /> : <Spinner /> }
            </Suspense>
        </div>
    )
}