import React, { useState } from 'react';
import './MovieCard.css';

const MovieCard = ({ movie, onRent }) => {
  const [message, setMessage] = useState('');

  const handleRent = () => {
    onRent(movie);
    setMessage('Filme adicionado ao carrinho!');
    setTimeout(() => setMessage(''), 3000); // Limpar a mensagem após 3 segundos
  };

  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
      <h3>{movie.title}</h3>
      <button onClick={handleRent}>Alugar</button>
      <button>Mais Informações</button>
      {message && <div className="rent-message">{message}</div>}
    </div>
  );
};

export default MovieCard;
