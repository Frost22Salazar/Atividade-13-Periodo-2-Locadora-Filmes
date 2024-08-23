import React, { useState } from 'react';
import AppRoutes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [rentedMovies, setRentedMovies] = useState([]);

  const rentMovie = (movie) => {
    const rentalDate = new Date();
    const formattedDate = rentalDate.toLocaleDateString('pt-BR');
    const formattedTime = rentalDate.toLocaleTimeString('pt-BR');

    const rentedMovie = {
      id: movie.id,
      title: movie.title,
      rentalDate: formattedDate,
      rentalTime: formattedTime,
    };

    setRentedMovies((prevMovies) => [...prevMovies, rentedMovie]);
  };

  const removeMovie = (id) => {
    setRentedMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <div className="content" style={{ paddingTop: '80px', paddingBottom: '60px' }}>
        <AppRoutes 
          rentMovie={rentMovie} 
          rentedMovies={rentedMovies} 
          removeMovie={removeMovie} 
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
