import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RentedMovies from './pages/RentedMovies';

const AppRoutes = ({ rentMovie, rentedMovies, removeMovie }) => {
  return (
    <Routes>
      <Route path="/" element={<Home rentMovie={rentMovie} />} />
      <Route 
        path="/rented-movies" 
        element={<RentedMovies rentedMovies={rentedMovies} removeMovie={removeMovie} />} 
      />
      {/* Adicione outras rotas aqui, como para a página de detalhes do filme */}
    </Routes>
  );
};

export default AppRoutes;
