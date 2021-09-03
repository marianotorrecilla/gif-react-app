import React from 'react' 
import SearchForm from "../../components/SearchForm/SearchForm"
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';
import { Helmet } from 'react-helmet';

export default function ErrorPage() {

    return (
      <>
        <Helmet>
          <title>Gif React App | Error 404</title>
        </Helmet>
        <SearchForm />
        <ErrorComponent />
        
      </>
    );
  }