import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-darkslate text-white p-4 flex justify-between items-center">
    <h1 className="text-xl font-bold">The Gentleman's Cut</h1>
    <nav className="space-x-4">
      <Link to="/">Home</Link>
      <Link to="/services">Services</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
);

export default Header;
