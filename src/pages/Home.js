import React, { useState, useEffect } from 'react';
import api from '../services/api';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';

const Home = ({ rentMovie }) => {
  const [movies, setMovies] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await api.get('/movie/now_playing?api_key=28fc232cc001c31e8a031f419d0a14ca&language=pt-BR');
      setMovies(response.data.results);
    } catch (error) {
      console.error('Erro ao buscar filmes:', error);
    }
  };

  const handleSearch = async (query) => {
    try {
      const response = await api.get(`/search/movie?api_key=28fc232cc001c31e8a031f419d0a14ca&language=pt-BR&query=${query}`);
      setMovies(response.data.results);
    } catch (error) {
      console.error('Erro ao buscar filmes:', error);
    }
  };

  const handleRent = (movie) => {
    rentMovie(movie);
    setMessage(`Filme "${movie.title}" adicionado ao carrinho!`);
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onRent={handleRent} />
        ))}
      </div>
      {message && <div className="rent-message">{message}</div>}
    </div>
  );
};

export default Home;
