import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';

import { Link, Route } from "wouter"

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>Giffy App</h1>
        <Link to='/gif/phoebe'>Gifs Phoebe</Link>
        <Link to='/gif/joey'>Gifs Joey</Link>
        <Link to='/gif/chandler'>Gifs Chandler</Link>
        <Link to='/gif/monica'>Gifs Mónica</Link>
        <Link to='/gif/rachel'>Gifs Rachel</Link>
        <Link to='/gif/ross'>Gifs Ross</Link>
        <Route
          path="/gif/:keyword"
          component={ListOfGifs}
        />
      </section>
    </div>
  );
}

export default App;
