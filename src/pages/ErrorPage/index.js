import React, {useCallback} from 'react' 
import SearchForm from "../../components/SearchForm/SearchForm"
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';
import { useLocation } from 'wouter'
import { Helmet } from 'react-helmet';

export default function ErrorPage() {
    const [path, pushLocation] = useLocation()

    const handleSubmit = useCallback(({keyword}) => {
        pushLocation(`/search/${keyword}`)
    }, [pushLocation])
  
    return (
      <>
        <Helmet>
          <title>Gif React App | Error 404</title>
        </Helmet>
        <SearchForm onSubmit={handleSubmit}/>
        <ErrorComponent />
        
      </>
    );
  }