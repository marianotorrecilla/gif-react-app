import React, { Suspense } from 'react';
import './App.css';
import SearchResults from './pages/SearchResults/index'
import Detail from './pages/Detail/index'
import ErrorPage from './pages/ErrorPage';
import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';

import { Link, Route } from "wouter"

const HomePage = React.lazy(() => import('./pages/Home'))

function App() {
  return (
    <StaticContext.Provider value={{ name:'marianotorrecilla' }}>
      <div className="App">
        <Suspense fallback={null} >
          <section className="App-content">
            <Link to="/">
              <h1 style={{cursor: 'pointer'}}>Gif React App</h1>
            </Link>
            <GifsContextProvider>
              <Route 
                component={HomePage}
                path="/"
              />
              <Route
                component={SearchResults}
                path="/search/:keyword"
              />
              <Route
                component={Detail}
                path="/gif/:id"
              />
              <Route
                component={ErrorPage}
                path="/404"
              />
            </GifsContextProvider>
          </section>
        </Suspense>
        
      </div>
    </StaticContext.Provider>
  );
}

export default App;
