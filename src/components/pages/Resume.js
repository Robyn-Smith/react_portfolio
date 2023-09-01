import React from 'react';
import { jsPDF } from 'jspdf';

function Resume() {
  const handleDownload = () => {
    const doc = new jsPDF();
    doc.text('HTML, CSS, Git, JavaScript, Third-party APIs (jQuery, Bootstrap), Server-side APIs, AJAX, and JSONNode.js, Object-oriented programming (OOP), Express.js servers, MySQL, Object-relational mapper or ORM (Sequelize), Model-view-controller (MVC) framework (Handlebars.js), Unit testing, Agile methodology, HerokuComputer science, MongoDB and NoSQL, Progressive web apps (PWAs), React, MERN, Portfolios', 10, 10);
    doc.save('your_resume.pdf');
  };

  return (
    <div>
      <h1 style={{ color: '#b62075' }}>Resume Page</h1>
      <button onClick={handleDownload}>Download Resume</button>
      <ul>
        <li>HTML and CSS</li>
        <li>Git</li>
        <li>JavaScript</li>
        <li>Third-party APIs (jQuery, Bootstrap)</li>
        <li>Server-side APIs, AJAX, and JSON</li>
        <li>Node.js</li>
        <li>Object-oriented programming (OOP)</li>
        <li>Express.js servers</li>
        <li>MySQL</li>
        <li>Object-relational mapper, or ORM (Sequelize)</li>
        <li>Model-view-controller (MVC) framework (Handlebars.js)</li>
        <li>Unit testing</li>
        <li>Agile methodology</li>
        <li>Heroku</li>
        <li>Computer science</li>
        <li>MongoDB and NoSQL</li>
        <li>Progressive web apps (PWAs)</li>
        <li>React</li>
        <li>MERN</li>
        <li>Portfolios</li>
      </ul>
      
    </div>
  );
};

export default Resume;