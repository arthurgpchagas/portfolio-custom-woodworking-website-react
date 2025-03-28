import React, { useState, useEffect, useRef } from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); 
  const hamburgerRef = useRef(null); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target) && 
        hamburgerRef.current && !hamburgerRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img src="logo.jpeg" alt="Logo" className="logo" />
        </div>
        <div className="hamburger-menu" onClick={toggleMenu} ref={hamburgerRef}>
          <div className={`bar ${menuOpen ? 'active' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'active' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'active' : ''}`}></div>
        </div>

        <nav className={`nav ${menuOpen ? 'nav-mobile active' : 'nav-mobile'}`} ref={menuRef}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#gallery">Galeria</a></li>
            <li><a href="#contact">Contatos</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
