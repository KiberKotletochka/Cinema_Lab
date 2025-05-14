import React, { useState } from 'react';
import MovieList from './components/MovieList';
import moviesData from './data/movies';
import './index.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMovies = moviesData.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div class="logo-container">
        <img src = "logo.png" alt="MovieOn Logo" className="logo" />
        <h1>MovieOn</h1>
      </div>
      <input
        type="text"
        placeholder="Пошук за назвою фільму..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;