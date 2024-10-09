import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isAdmin }) => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        {isAdmin ? (
          <li>
            <Link to="/admin">Admin Panel</Link>
          </li>
        ) : (
          <li>
            <Link to="/user">User Panel</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;