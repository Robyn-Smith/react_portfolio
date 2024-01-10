import React from 'react';
import week1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import picturesque from "../../assets/picturesque.png";
import quiz from "../../assets/quiz.png";
import weatherdash from "../../assets/weatherdash.png";
import techblog from "../../assets/techblog.png"

export default function Portfolio() {
  return (
    <div>
      <h1 style={{ color: '#b62075' }}>Portfolio Page</h1>
      <p>I have just completed the Full Stack Coding Bootcamp course, with University of Birmingham. We undertook a number of assignments and group projects which included code refactoring, front end design, back-end development, databases and web applications, using the following technologies:
HTML and CSS
Git
JavaScript
Third-party APIs (jQuery, Bootstrap)
Server-side APIs, AJAX, and JSON
Node.js
Object-oriented programming (OOP)
Express.js servers
MySQL
Object-relational mapper, or ORM (Sequelize)
Model-view-controller (MVC) framework (Handlebars.js)
Unit testing
Agile methodology
Heroku
Computer science
MongoDB and NoSQL
Progressive web apps (PWAs)
React
MERN
Portfolios. 
Please click the images below to view my projects.
      </p>
      <article style={{display:"flex", flexWrap: "wrap", justifyContent:"space-around"}}>
        <section class="box">
              <h3 style={{ color: '#b62075' }}>Web API: Quiz</h3>
              <a href="https://robyn-smith.github.io/week-4-Web-API-Quiz/">
                <img class= "projectpic" alt="web API quiz" src={quiz}
                onMouseOver={e => e.currentTarget.style.opacity = 0.3}
                onMouseOut={e => e.currentTarget.style.opacity = 1}></img>
              </a>
              <p>
                This project used HTML, CSS and JavaScript to create a web API quiz. The quiz supports the users knowlege of coding by challenging the user to answer the multiple choice options correctly. The quiz uses audio files and messages to tell the user if they have answers right or wrong. The timer counts down at the top of the page limiting the users time to answer the question, when the user answers wrong the timer decrements even quicker. Finally, the quiz uses local storage to remmeber usernames and their highscores in the quiz.
              </p>
              <a style={{ color: '#b62075' }}href="https://github.com/Robyn-Smith/week-4-Web-API-Quiz"
            onMouseOver={e => e.currentTarget.style.opacity = 0.3}
            onMouseOut={e => e.currentTarget.style.opacity = 1} >Github Repo</a>
            </section>

        <section class="box">
              <h3 style={{ color: '#b62075', textAlign: 'center' }}>Group Project 1: Picturesque</h3>
              <a href="https://robyn-smith.github.io/The-Dev-Society/">
                <img class= "projectpic" alt="picturesque" src={picturesque}
                onMouseOver={e => e.currentTarget.style.opacity = 0.3}
                onMouseOut={e => e.currentTarget.style.opacity = 1}></img>
              </a>
              <p>
              This was a group project was a movie website, allowing users to create personal watchlists, watch trailers and search for and learn more about films including actors that star in them, plot, place of creation, genre, imbd rating and date of creation. This aplication was created using HTML 5, CSS and JavaScript and used 4 API's including GeoCode -for City/Country to Latitude/Longitude, OMDB- for Movie details, YouTube- for Movie Trailer from YouTube and Google Map- for showing Country in Google Map.
              </p>
              <a style={{ color: '#b62075' }}href="https://github.com/Robyn-Smith/The-Dev-Society"
            onMouseOver={e => e.currentTarget.style.opacity = 0.3}
            onMouseOut={e => e.currentTarget.style.opacity = 1} >Github Repo</a>
            </section>

        <section class="box">
              <h3 style={{ color: '#b62075', textAlign: 'center'}}>Group Project 2: Music Portal</h3>
              <a href="https://front-end-society-2d48b234d58b.herokuapp.com">
                <img class= "projectpic" alt="Music portal" src={project2}
                onMouseOver={e => e.currentTarget.style.opacity = 0.3}
                onMouseOut={e => e.currentTarget.style.opacity = 1}></img>
              </a>
              <p>
                This was a group project was a music streaming website, allowing users to create personal playlists, listen to songs and comment on public playlists. It was created using multiple technologies including Node.js, Express.js, Howler.js, bcrypt, Sequelize, dotenv, MySQL, Heroku, Handlebars Engine, CSS, JavaScript, SVGator and Canva.
              </p>
              <a style={{ color: '#b62075' }}href="https://github.com/percivalho/Front-End-Society"
              onMouseOver={e => e.currentTarget.style.opacity = 0.3}
              onMouseOut={e => e.currentTarget.style.opacity = 1}>Github Repo</a>
            </section>
        
            <section class="box">
              <h3 style={{ color: '#b62075', textAlign: 'center'}}>My first project: Code Refactor </h3>
              <a href="https://robyn-smith.github.io/week-1-code-refactor-challenge/">
                <img class= "projectpic" alt="Horiseon Webpage" src={week1}
                onMouseOver={e => e.currentTarget.style.opacity = 0.3}
                onMouseOut={e => e.currentTarget.style.opacity = 1}></img>
              </a>
              <p>
                This project is a code refactor to support a marketing agency website. The website contains information about Search Engine Optimisation, Online Reputation Management, Social Media Marketing, Lead Generation, Brand Awareness and Cost Management. It contains header, navigation, aside, section, figure, article and footer elements; which are styled in CSS. Within this code refactor I updated the title, fixed a link, replaced repetitive div tags with semantic elements, added alternative text descriptions to images and updated the CSS acordingly. As a result, this made the website more modern and suitible for HTML 5, more accessible for disabled users, improved funtionality and supported search engine optimisation.
              </p>
              <a style={{ color: '#b62075' }}href="https://github.com/Robyn-Smith/week-1-code-refactor-challenge"
            onMouseOver={e => e.currentTarget.style.opacity = 0.3}
            onMouseOut={e => e.currentTarget.style.opacity = 1} >Github Repo</a>
            </section>

            <section class="box">
              <h3 style={{ color: '#b62075', textAlign: 'center' }}>Server side APIs: Weather Dashboard </h3>
              <a href="https://robyn-smith.github.io/Server-Side-APIs-Weather-Dashboard/">
                <img class= "projectpic" alt="Weather Dashboard" src={weatherdash}
                onMouseOver={e => e.currentTarget.style.opacity = 0.3}
                onMouseOut={e => e.currentTarget.style.opacity = 1}></img>
              </a>
              <p>
              The Weather Dashboard webpage has been created to support traveler's effectively plan their trips. This application has been created using html, JavaScript, CSS and API's. API stands for Application Programming Interface, and allows sharing of data, in this case api's were used to request data about the weather. The desired data was then chosen and displayed on the webpage using JavaScript. They will also see place holder text. When the user types a location in the search bar and clicks the search button below, they will see the name of the city, current temperature, wind speed, humidity level and percentage of clouds in that location. An icon will also appear clearly displaying the type of weather so that it is much easier for readers to see and is more inclusive for those who struggle with reading. All of this data is retrived using a weather API.
              </p>
              <a style={{ color: '#b62075' }}href="https://github.com/Robyn-Smith/Server-Side-APIs-Weather-Dashboard"
            onMouseOver={e => e.currentTarget.style.opacity = 0.3}
            onMouseOut={e => e.currentTarget.style.opacity = 1} >Github Repo</a>
            </section>

            <section class="box">
              <h3 style={{ color: '#b62075', textAlign: 'center' }}>MVC: Tech Blog </h3>
              <a href="https://robynsmith-techblog-ce4774308a7e.herokuapp.com/">
                <img class= "projectpic" alt="Tech blog" src={techblog}
                      onMouseOver={e => e.currentTarget.style.opacity = 0.3}
                      onMouseOut={e => e.currentTarget.style.opacity = 1}></img>
              </a>
              <p>
              Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels! This project was to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This site has been built from scratch and deployed to Heroku. This app will follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.
              </p>
              <a style={{ color: '#b62075' }}href="https://github.com/Robyn-Smith/MVCTech-Blog"
              onMouseOver={e => e.currentTarget.style.opacity = 0.3}
              onMouseOut={e => e.currentTarget.style.opacity = 1}>Github Repo</a>
            </section>
          </article>
    </div>
  );
}