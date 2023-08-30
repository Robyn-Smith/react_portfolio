import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Header from './Header';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <header>
        <h1>Hi I'm Robyn Smith and this is my Portfolio</h1>
        <p>
          I am a hardworking, conscientious first class graduate looking for a career in coding.
        </p>
      </header>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <footer id="Contact" class="Contact">
        <h4>
          Contact Information
        </h4>
        <ul>
          <li>📩 Email: robynsmith@hotmail.co.uk</li>
          <li>📱 Mobile: 07777777774</li>
          <li>☎️ Landline: 01334 123454</li>
        </ul>
      </footer>
    </div>
    
  );
}