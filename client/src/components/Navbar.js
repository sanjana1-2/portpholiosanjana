import React from 'react';
import Logo from './Logo';

function Navbar() {
  return (
    <nav className="navbar-elegant">
      <div className="container">
        <div className="nav-brand-elegant">
          <Logo />
          <span className="navbar-logo">SB</span>
        </div>
        <ul className="nav-links-elegant">
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#achievements">ACHIEVEMENTS</a></li>
          <li><a href="#certificates">CERTIFICATES</a></li>
          <li><a href="#cv">CV</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
