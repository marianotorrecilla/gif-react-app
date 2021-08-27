import React from 'react';
import './App.css';
import Home from './pages/Home/index'
import SearchResults from './pages/SearchResults/index'
import Detail from './pages/Detail/index'
import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';

import { Link, Route } from "wouter"

function App() {
  return (
    <StaticContext.Provider value={{ name:'marianotorrecilla' }}>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <h1 style={{cursor: 'pointer'}}>Gif React App</h1>
          </Link>
          <GifsContextProvider>
            <Route 
              component={Home}
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
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
