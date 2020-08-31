import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './banner.css'
import './App.css';
import MovieSearch from './MovieSearch'

function App() {
 
  return (
      <div id="banner">
        <div id="cloud-scroll">
          <div className="container my-5">
          <h1>Search Movies/TV Shows</h1>
          <MovieSearch/>
          </div>
        </div>
      </div>
  );
}

export default App;
