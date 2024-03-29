import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
  return (
  <div>
    <ul style={{ backgroundImage: 'linear-gradient(60deg, rgba(208, 5, 130, 0.215), white, rgba(241, 98, 16, 0.174))'}} className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          style={{ color: '#b62075' }}>
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          style={{ color: '#b62075' }}>
          My Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          style={{ color: '#b62075' }}>
          Contact Me
        </a>
      </li>
    </ul>
  </div>
  );
}

export default Navigation;