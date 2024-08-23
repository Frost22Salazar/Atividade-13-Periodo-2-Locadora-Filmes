import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Header.css'; // Certifique-se de ter o CSS correspondente

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="header-link">
          <HomeIcon fontSize="large" />
        </Link>
        <Link to="/rented-movies" className="header-link">
          <ShoppingCartIcon fontSize="large" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
