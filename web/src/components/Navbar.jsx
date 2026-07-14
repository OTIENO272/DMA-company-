import { useState } from 'react';
import Logo from '../assets/logo.svg';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleAdmin = () => {
    navigate('/admin');
    closeMenu();
  };

  return (
    <div className="navbar">
      <img src={Logo} alt="DMA Logo" className="img" />

      {/* Desktop Navigation */}
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>

        <NavLink to="/products">
          <li>Products</li>
        </NavLink>

        <NavLink to="/about">
          <li>About</li>
        </NavLink>

        <NavLink to="/contact">
          <li>Contact</li>
        </NavLink>

        <NavLink to="/jobs">
          <li>Jobs</li>
        </NavLink>
      </ul>

      {/* Desktop Admin Button */}
      <button className="admin" onClick={handleAdmin}>
        Admin
      </button>

      {/* Mobile Hamburger */}
      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile Menu */}
      <ul className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/" onClick={closeMenu}>
          <li>Home</li>
        </NavLink>

        <NavLink to="/products" onClick={closeMenu}>
          <li>Products</li>
        </NavLink>

        <NavLink to="/about" onClick={closeMenu}>
          <li>About</li>
        </NavLink>

        <NavLink to="/contact" onClick={closeMenu}>
          <li>Contact</li>
        </NavLink>

        <NavLink to="/jobs" onClick={closeMenu}>
          <li>Jobs</li>
        </NavLink>

        <button className="admin" onClick={handleAdmin}>
          Admin
        </button>
      </ul>
    </div>
  );
};

export default Navbar;