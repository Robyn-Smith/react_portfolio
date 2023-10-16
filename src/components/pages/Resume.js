import React from 'react';
// import { jsPDF } from 'jspdf';
import CV from "../../Files/discord cv.pdf";

function Resume() {
//   const handleDownload = () => {
//     const doc = new jsPDF();
//     doc.text('My Resume to be added to when complete...', 10, 10);
//     doc.save('my_resume.pdf');
//   };

  return (
    <div>
      <h1 style={{ color: '#b62075' }}>Resume Page</h1>
      <a href = {CV} download={CV}>Resume</a>
      {/* <button onClick={handleDownload}style={{ background: '#b62075', border: 'none',}}
                    onMouseOver={e => e.currentTarget.style.opacity = 0.7}
                    onMouseOut={e => e.currentTarget.style.opacity = 1} type="submit" className="btn btn-primary mb-2">Download Resume</button> */}
      <ul style={{ color: '#b62075' }}>
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