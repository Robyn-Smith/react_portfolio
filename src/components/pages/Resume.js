import React from 'react';
// import { jsPDF } from 'jspdf';
import CV from "../../Files/PortfolioCV.pdf";
import PDF from "../../assets/file.png";

function Resume() {
//   const handleDownload = () => {
//     const doc = new jsPDF();
//     doc.text('My Resume to be added to when complete...', 10, 10);
//     doc.save('my_resume.pdf');
//   };

  return (
    <div>
      <h1 style={{ color: '#b62075' }}>Resume Page</h1>
      <a href = {CV} download={CV}>
      {/* <img class= "PDF" alt="PDF" src={PDF} style={{width: "5px"}}
                onMouseOver={e => e.currentTarget.style.opacity = 0.3}
  onMouseOut={e => e.currentTarget.style.opacity = 1}></img>*/}Resume</a>
      {/* <button onClick={handleDownload}style={{ background: '#b62075', border: 'none',}}
                    onMouseOver={e => e.currentTarget.style.opacity = 0.7}
                    onMouseOut={e => e.currentTarget.style.opacity = 1} type="submit" className="btn btn-primary mb-2">Download Resume</button> */}
      <p>I have just completed the Full Stack Coding Bootcamp course, with University of Birmingham. We undertook a number of assignments and group projects which included code refactoring, front end design, back-end development, databases and web applications, using the following technologies:</p>
      <ul style={{ color: '#b62075', display:'grid', gridTemplateColumns:'50% 50%', justifyContent:'center', alignItems:'center', justifyItems:'center'}}>
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