import React from 'react';
import './RentedMovies.css';

const RentedMovies = ({ rentedMovies, removeMovie }) => {
  return (
    <div className="rented-movies-container">
      <h2>Filmes Alugados</h2>
      <ul className="rented-movies-list">
        {rentedMovies.length > 0 ? (
          rentedMovies.map((movie) => (
            <li key={movie.id} className="rented-movie-item">
              {movie.title} - Alugado em: {movie.rentalDate} {movie.rentalTime}
              <button onClick={() => removeMovie(movie.id)} className="remove-button">X</button>
            </li>
          ))
        ) : (
          <p>Você não alugou nenhum filme ainda.</p>
        )}
      </ul>
    </div>
  );
};

export default RentedMovies;
