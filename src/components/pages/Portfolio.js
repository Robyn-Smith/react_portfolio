import React from 'react';
import week1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import picturesque from "../../assets/picturesque.png";
import quiz from "../../assets/quiz.png";
import weatherdash from "../../assets/weatherdash.png";
import techblog from "../../assets/techblog.png";
import github from '../../assets/github-icon-logo-png-transparent.png';
import googledocs from '../../assets/kisspng-google-docs-google-slides-computer-icons-presentat-presentation-5ac6bf4b4c8b29.2069299915229745393135.png'

export default function Portfolio() {
  return (
    <div>
      <h1 style={{ color: '#b62075' }}>Portfolio Page</h1>
      <p>I have just completed the Full Stack Coding Bootcamp course, with University of Birmingham. We undertook a number of assignments and group projects which included code refactoring, front end design, back-end development, databases and web applications, using the following technologies: <span style ={{fontWeight: "bold"}}>HTML</span> and <span style ={{fontWeight: "bold"}}>CSS</span>, <span style ={{fontWeight: "bold"}}>Git</span>, <span style ={{fontWeight: "bold"}}>JavaScript</span>, Third-party APIs (jQuery, Bootstrap), Server-side APIs, AJAX, and JSON, Node.js, Object-oriented programming (OOP), Express.js servers, MySQL, Object-relational mapper, or ORM (Sequelize), Model-view-controller (MVC) framework (Handlebars.js), Unit testing, Agile methodology, Heroku, Computer science, MongoDB and NoSQL, Progressive web apps (PWAs), React, MERN, Portfolios. Please click the images below to view my projects.
      </p>
      <article style={{display:"flex", flexWrap: "wrap", justifyContent:"space-around"}}>
        
        <section class="box">
              <h3 style={{ color: '#b62075', textAlign: 'center' }}>Group Project 1: Picturesque</h3>
              <a href="https://robyn-smith.github.io/The-Dev-Society/">
                <img class= "projectpic" alt="picturesque" src={picturesque}
                onMouseOver={e => e.currentTarget.style.opacity = 0.3}
                onMouseOut={e => e.currentTarget.style.opacity = 1}></img>
              </a>
              <p>
              This was a group project was a movie information website, allowing users to search for films, create personal watchlists, watch trailers and learn more about films including actors that star in them, plot, place of creation, genre, imbd rating and date of creation. This aplication was created using <span style={{fontWeight: 'bold'}}>HTML 5</span>, <span style={{fontWeight: 'bold'}}>CSS</span> and <span style={{fontWeight: 'bold'}}>JavaScript</span> and used 4 <span style={{fontWeight: 'bold'}}>API</span>'s including <span style={{fontWeight: 'bold'}}>GeoCode</span> -for City/Country to Latitude/Longitude, <span style={{fontWeight: 'bold'}}>OMDB</span>- for Movie details, <span style={{fontWeight: 'bold'}}>YouTube</span>- for Movie Trailer from YouTube and <span style={{fontWeight: 'bold'}}>Google Maps</span>- for showing Country in Google Maps. </p>
              <p>I was voted as the <span style={{fontWeight: 'bold'}}>leader</span> by the group at the beggining of the project; I mainly worked on the initial idea of the project, <span style={{fontWeight:'bold'}}>front-end</span> design, <span style={{fontWeight: 'bold'}}>branding, wireframes, responsive CSS, organising/supporting</span> the team, <span style={{fontWeight:'bold'}}>debugging, deligating tasks, communication</span> and the <span style ={{fontWeight:'bold'}}></span>presentation. This project was publicly presented on multiple occasions (during class as well as networking events) and <span style={{fontWeight: 'bold'}}>won the award for the best UX/UI</span> in the class, at UoB. If you would like to view the accompanying presentation, please click the google docs icon below.
              </p>
              <div style={{display: 'flex', flexDirection: "row", justifyContent: 'center', padding: "1%",}}>
              <a style={{ color: '#b62075' }}href="https://docs.google.com/presentation/d/11XLxTB6EjL1nEJOjQwag1xBMJpIakJwKihd1UHzP_pw/edit?usp=sharing"><img
              src={googledocs}
              alt="google docs"
              style={{width: 40, alignItems: "center"}}
              onMouseOver={e => e.currentTarget.style.opacity = 0.3}
              onMouseOut={e => e.currentTarget.style.opacity = 1}/></a>
              <a style={{ color: '#b62075' }}href="https://github.com/Robyn-Smith/The-Dev-Society"><img
            src={github}
            alt="github"
            style={{width: 40, alignItems: "center"}}
            onMouseOver={e => e.currentTarget.style.opacity = 0.3}
            onMouseOut={e => e.currentTarget.style.opacity = 1}/></a>
              </div>
            </section>

        <section class="box">
              <h3 style={{ color: '#b62075', textAlign: 'center'}}>Group Project 2: Music Portal</h3>
              <a href="https://front-end-society-2d48b234d58b.herokuapp.com">
                <img class= "projectpic" alt="Music portal" src={project2}
                onMouseOver={e => e.currentTarget.style.opacity = 0.3}
                onMouseOut={e => e.currentTarget.style.opacity = 1}></img>
              </a>
              <p>
                This was a <span style={{fontWeight: 'bold'}}>group project</span> was a music streaming website, allowing users to create personal playlists, listen to songs and comment on public playlists. It was created using multiple technologies including <span style={{fontWeight: 'bold'}}>Node.js</span>, <span style={{fontWeight: 'bold'}}>Express.js</span>, <span style={{fontWeight: 'bold'}}>Howler.js</span>, <span style={{fontWeight: 'bold'}}>bcrypt</span>, <span style={{fontWeight: 'bold'}}>Sequelize</span>, <span style={{fontWeight: 'bold'}}>dotenv</span>, <span style={{fontWeight: 'bold'}}>MySQL</span>, <span style={{fontWeight: 'bold'}}>Heroku</span>, <span style={{fontWeight: 'bold'}}>Handlebars Engine</span>, <span style={{fontWeight: 'bold'}}>CSS</span>, <span style={{fontWeight: 'bold'}}>JavaScript</span>, <span style={{fontWeight: 'bold'}}>SVGator</span> and <span style={{fontWeight: 'bold'}}>Canva</span>. 
                The most popular feature of this website is the <span style= {{fontWeight: 'bold'}}>bubble animation </span> that was added as a fun way to display users comments. You can see this by signing up to the site creating an account, bcrypt was used to make sure your details are safe and secure. Once you have created an account you can use another exciting feature; the personalised login sound, added using Howler.js. Then click on one of the album categories to view the bubble comments, add your own bubble comments and create your own playlists.
              </p>
              <p>I took a <span style={{fontWeight: 'bold'}}>leadership</span> role during this project and mainly worked on the <span style = {{fontWeight: 'bold'}}>front-end</span> design, branding, initial ideas, <span style={{fontWeight: 'bold'}}>organising/supporting</span> the team, <span style={{fontWeight: 'bold'}}>debugging</span> and the <span style={{fontWeight: 'bold'}}>presentation</span>. This project was also publicly presented on multiple occasions (during class as well as networking events) and <span style={{fontWeight: 'bold'}}>won the award for the best UX/UI</span> in the class, at UoB. If you would like to view the accompanying presentation, please click the google docs icon below.
              </p>
              <div style={{display: 'flex', flexDirection: "row", justifyContent: 'center', padding: "1%",}}>
              <a style={{ color: '#b62075' }}href="https://docs.google.com/presentation/d/14AXvSrRKnfqGTVTqSC00aIbhOJxCQrDxcoHi6fWudSM/edit?usp=sharing"><img
              src={googledocs}
              alt="google docs"
              style={{width: 40, alignItems: "center"}}
              onMouseOver={e => e.currentTarget.style.opacity = 0.3}
              onMouseOut={e => e.currentTarget.style.opacity = 1}/></a>
              <a style={{ color: '#b62075' }}href="https://github.com/percivalho/Front-End-Society"><img
              src={github}
              alt="github"
              style={{width: 40, alignItems: "center"}}
              onMouseOver={e => e.currentTarget.style.opacity = 0.3}
              onMouseOut={e => e.currentTarget.style.opacity = 1}/></a>
              </div>
            </section>

            <section class="box">
                  <h3 style={{ color: '#b62075' }}>Web API: Quiz</h3>
                  <a href="https://robyn-smith.github.io/week-4-Web-API-Quiz/">
                    <img class= "projectpic" alt="web API quiz" src={quiz}
                    onMouseOver={e => e.currentTarget.style.opacity = 0.3}
                    onMouseOut={e => e.currentTarget.style.opacity = 1}></img>
                  </a>
                  <p>
                    This project used <span style ={{fontWeight: "bold"}}>HTML</span>, <span style ={{fontWeight: "bold"}}>CSS</span> and <span style={{fontWeight: 'bold'}}>JavaScript</span> to create a web <span style={{fontWeight: 'bold'}}>API</span> quiz. The quiz supports the users knowlege of coding by challenging the user to answer the multiple choice options correctly. The quiz uses <span style={{fontWeight: 'bold'}}>audio</span> files and messages to tell the user if they have answers right or wrong. The timer counts down at the top of the page limiting the users time to answer the question, when the user answers wrong the timer decrements even quicker. Finally, the quiz uses <span style={{fontWeight: 'bold'}}>local storage</span> to remember usernames and their highscores in the quiz.
                  </p>
                  <a href="https://github.com/Robyn-Smith/week-4-Web-API-Quiz"><img
                    src={github}
                    alt="github"
                    style={{width: 40, alignItems: "center"}}
                    onMouseOver={e => e.currentTarget.style.opacity = 0.3}
                    onMouseOut={e => e.currentTarget.style.opacity = 1}/>
                    </a>
              </section>

            <section class="box">
              <h3 style={{ color: '#b62075', textAlign: 'center'}}>My first project: Code Refactor </h3>
              <a href="https://robyn-smith.github.io/week-1-code-refactor-challenge/">
                <img class= "projectpic" alt="Horiseon Webpage" src={week1}
                onMouseOver={e => e.currentTarget.style.opacity = 0.3}
                onMouseOut={e => e.currentTarget.style.opacity = 1}></img>
              </a>
              <p>
                This project is a <span style={{fontWeight: 'bold'}}>code refactor</span> to support a marketing agency website. The website contains information about Search Engine Optimisation, Online Reputation Management, Social Media Marketing, Lead Generation, Brand Awareness and Cost Management. It contains header, navigation, aside, section, figure, article and footer elements; which are styled in <span style={{fontWeight: 'bold'}}>CSS</span>. Within this code refactor I updated the title, fixed a link, replaced repetitive div tags with semantic elements, added alternative text descriptions to images and updated the CSS acordingly. As a result, this made the website more modern and suitible for <span style={{fontWeight: 'bold'}}>HTML 5</span>, more accessible for disabled users, improved funtionality and supported search engine optimisation.
              </p>
              <a style={{ color: '#b62075' }}href="https://github.com/Robyn-Smith/week-1-code-refactor-challenge"><img
            src={github}
            alt="github"
            style={{width: 40, alignItems: "center"}}
            onMouseOver={e => e.currentTarget.style.opacity = 0.3}
            onMouseOut={e => e.currentTarget.style.opacity = 1}/></a>
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
              <p><span style={{fontWeight: 'bold'}}>Disclaimer:</span> Unfortunately, the API key used during this project is now invalid, impacting on the functionality of this project. However, if you are interested in seeing more information about this project please visit the Git hub repository using the link below.</p>
              <a style={{ color: '#b62075' }}href="https://github.com/Robyn-Smith/Server-Side-APIs-Weather-Dashboard"><img
            src={github}
            alt="github"
            style={{width: 40, alignItems: "center"}}
            onMouseOver={e => e.currentTarget.style.opacity = 0.3}
            onMouseOut={e => e.currentTarget.style.opacity = 1}/></a>
            </section>

            <section class="box">
              <h3 style={{ color: '#b62075', textAlign: 'center' }}>MVC: Tech Blog </h3>
              <a href="https://github.com/Robyn-Smith/MVCTech-Blog">
                <img class= "projectpic" alt="Tech blog" src={techblog}
                      onMouseOver={e => e.currentTarget.style.opacity = 0.3}
                      onMouseOut={e => e.currentTarget.style.opacity = 1}></img>
              </a>
              <p>
              This project was to build a <span style={{fontWeight: 'bold'}}>CMS-style</span> blog site similar to a Wordpress site, where developers can publish, edit, update and delete their own blog posts; as well as read and comment on other developer's posts. This site has been built from scratch and deployed to <span style={{fontWeight: 'bold'}}>Heroku</span>. This app follows the <span style={{fontWeight: 'bold'}}>MVC paradigm</span> in its architectural structure, using <span style={{fontWeight: 'bold'}}>Handlebars.js</span> as the templating language, <span style={{fontWeight: 'bold'}}>Sequelize</span> as the <span style={{fontWeight: 'bold'}}>ORM</span>, and the <span style={{fontWeight: 'bold'}}>express-session npm</span> package for authentication.
              </p>
              <p><span style={{fontWeight: 'bold'}}>Disclaimer:</span> Unfortunately, this project was deployed using Heroku, due to the lack of funding it has been removed, so a live link to the site is currently unavailable. However, if you are interested in seeing more information about this project please visit the Git hub repository using the link below.</p>
              <a style={{ color: '#b62075' }}href="https://github.com/Robyn-Smith/MVCTech-Blog"><img
              src={github}
              alt="github"
              style={{width: 40, alignItems: "center"}}
              onMouseOver={e => e.currentTarget.style.opacity = 0.3}
              onMouseOut={e => e.currentTarget.style.opacity = 1}/></a>
            </section>
          </article>
    </div>
  );
}