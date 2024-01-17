import React from 'react';
import week1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import picturesque from "../../assets/picturesque.png";
import quiz from "../../assets/quiz.png";
import weatherdash from "../../assets/weatherdash.png";
import techblog from "../../assets/techblog.png";
import github from '../../assets/github-icon-logo-png-transparent.png';
import googledocs from '../../assets/kisspng-google-docs-google-slides-computer-icons-presentat-presentation-5ac6bf4b4c8b29.2069299915229745393135.png';
import BlissfulBeg from '../../assets/Blissful.png';
import week2 from '../../assets/week2.png';
import week3 from '../../assets/week3.png';
import workday from '../../assets/workday.png';

export default function Portfolio() {
  return (
    <div>
      <h1 style={{ color: '#b62075' }}>Portfolio Page</h1>
      <p>As a <span style={{fontWeight: 'bold'}}>Junior Web developer</span>, I have completed a number of projects and have experience with multiple technologies. After graduating the <span style={{fontWeight:'bold'}}>Full Stack Coding Bootcamp</span> in September 2023, with <span style={{fontWeight: 'bold'}}>University of Birmingham</span>, I managed to achieve an <span style={{fontWeight: 'bold'}}>A+, won 3 best UX/UI awards</span> for all 3 of my group projects and was consistently one of the <span style={{fontWeight: 'bold'}}>top 10 highest achieving students</span> in the class. During the course I undertook a number of assignments and group projects which included <span style={{fontWeight: 'bold'}}>code refactoring, front-end design, back-end development, databases</span> and web applications, using the following technologies: <span style={{fontWeight: 'bold'}}>HTML</span> and <span style={{fontWeight: 'bold'}}>CSS, Git, JavaScript</span>, Third-party APIs (<span style={{fontWeight: 'bold'}}>jQuery, Bootstrap</span>), Server-side <span style={{fontWeight: 'bold'}}>APIs, AJAX</span>, and <span style={{fontWeight:'bold'}}>JSON, Node.js</span>, Object-oriented programming (<span style={{fontWeight:'bold'}}>OOP</span>), <span style= {{fontWeight: 'bold'}}>Express.js</span> servers, <span style={{fontWeight:'bold'}}>MySQL</span>, Object-relational mapper <span style={{fontWeight: 'bold'}}>ORM</span> (<span style={{fontWeight:'bold'}}>Sequelize</span>), Model-view-controller (<span style={{fontWeight:'bold'}}>MVC</span>) framework (<span style={{fontWeight:'bold'}}>Handlebars.js</span>), Unit testing, <span style={{fontWeight:'bold'}}>Agile methodology, Heroku</span>, Computer science, <span style={{fontWeight:'bold'}}>MongoDB</span> and <span style={{fontWeight:'bold'}}>NoSQL</span>, Progressive web apps (<span style={{fontWeight:'bold'}}>PWAs</span>), <span style={{fontWeight:'bold'}}>React, MERN</span>. I have also completed continuation courses and individual studies in <span style={{fontWeight:'bold'}}>Python</span>. Additionally, I have a current <span style={{fontWeight: 'bold'}}>internship at FL1 Digital</span> where I have been working with technologies such as <span style={{fontWeight:'bold'}}>WordPress, Avada</span> (WordPress plugin), <span style={{fontWeight:'bold'}}>SASS, Gravity Forms</span> and <span style={{fontWeight:'bold'}}>Typeform</span>. I have also learnt how to work in <span style={{fontWeight:'bold'}}>agile teams, content migration</span> and attended <span style={{fontWeight:'bold'}}>meetings with clients</span> and Technical Directors.</p>
      <p>Please click the images below to open live links to view my projects.</p>
      <article style={{display:"flex", flexWrap: "wrap", justifyContent:"space-around"}}>
        
        <section class="box">
              <h3 style={{ color: '#b62075', textAlign: 'center' }}>Group Project 1: Picturesque</h3>
              <a href="https://robyn-smith.github.io/The-Dev-Society/">
                <img class= "projectpic" alt="picturesque" src={picturesque}
                onMouseOver={e => e.currentTarget.style.opacity = 0.3}
                onMouseOut={e => e.currentTarget.style.opacity = 1}></img>
              </a>
              <p>
              This group project was a movie information website, allowing users to search for films, create personal watchlists, watch trailers and learn more about films including actors that star in them, plot, place of creation, genre, imbd rating and date of creation. This aplication was created using <span style={{fontWeight: 'bold'}}>HTML 5</span>, <span style={{fontWeight: 'bold'}}>CSS</span> and <span style={{fontWeight: 'bold'}}>JavaScript</span> and used 4 <span style={{fontWeight: 'bold'}}>API</span>'s including <span style={{fontWeight: 'bold'}}>GeoCode</span> -for City/Country to Latitude/Longitude, <span style={{fontWeight: 'bold'}}>OMDB</span>- for Movie details, <span style={{fontWeight: 'bold'}}>YouTube</span>- for Movie Trailer from YouTube and <span style={{fontWeight: 'bold'}}>Google Maps</span>- for showing Country in Google Maps. </p>
              <p>This project was completed through successful <span style={{fontWeight: 'bold'}}>agile teamworking</span>. I was voted as the project <span style={{fontWeight: 'bold'}}>leader</span> by the group at the beginning of the project; I mainly worked on the initial idea of the project, <span style={{fontWeight:'bold'}}>front-end</span> design, <span style={{fontWeight: 'bold'}}>branding, wireframes, responsive CSS, organising/supporting</span> the team, <span style={{fontWeight:'bold'}}>debugging, deligating tasks, communication</span> and the <span style ={{fontWeight:'bold'}}></span>presentation. This project was publicly presented on multiple occasions (during class as well as networking events) and <span style={{fontWeight: 'bold'}}>won the award for the best UX/UI</span> in the class, at UoB. If you would like to view the accompanying presentation, please click the google docs icon below.
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
                This <span style={{fontWeight: 'bold'}}>group project</span> was a music streaming website, allowing users to create personal playlists, listen to songs and comment on public playlists. It was created using multiple technologies including <span style={{fontWeight: 'bold'}}>Node.js</span>, <span style={{fontWeight: 'bold'}}>Express.js</span>, <span style={{fontWeight: 'bold'}}>Howler.js</span>, <span style={{fontWeight: 'bold'}}>bcrypt</span>, <span style={{fontWeight: 'bold'}}>Sequelize</span>, <span style={{fontWeight: 'bold'}}>dotenv</span>, <span style={{fontWeight: 'bold'}}>MySQL</span>, <span style={{fontWeight: 'bold'}}>Heroku</span>, <span style={{fontWeight: 'bold'}}>Handlebars Engine</span>, <span style={{fontWeight: 'bold'}}>CSS</span>, <span style={{fontWeight: 'bold'}}>JavaScript</span>, <span style={{fontWeight: 'bold'}}>SVGator</span> and <span style={{fontWeight: 'bold'}}>Canva</span>. 
                The most popular feature of this website is the <span style= {{fontWeight: 'bold'}}>bubble animation </span> that was added as a fun way to display users comments. You can see this by signing up to the site creating an account, bcrypt was used to make sure your details are safe and secure. Once you have created an account you can use another exciting feature; the personalised login sound, added using Howler.js. Then click on one of the album categories to view the bubble comments, add your own bubble comments and create your own playlists.
              </p>
              <p>This project was also completed through successful <span style={{fontWeight: 'bold'}}>agile teamworking</span>. I again took a <span style={{fontWeight: 'bold'}}>leadership</span> role during this project and mainly worked on the <span style = {{fontWeight: 'bold'}}>front-end</span> design, branding, initial ideas, <span style={{fontWeight: 'bold'}}>organising/supporting</span> the team, <span style={{fontWeight: 'bold'}}>debugging</span> and the <span style={{fontWeight: 'bold'}}>presentation</span>. This project was also publicly presented on multiple occasions (during class as well as networking events) and <span style={{fontWeight: 'bold'}}>won the award for the best UX/UI</span> in the class, at UoB. If you would like to view the accompanying presentation, please click the google docs icon below.
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
              <h3 style={{ color: '#b62075', textAlign: 'center' }}>Group Project 3: Blissful Beginnings</h3>
              <a href="https://github.com/AshtonJ7/blissful-beginnings.git">
                <img class= "projectpic" alt="Blissful Beginnings" src={BlissfulBeg}
                onMouseOver={e => e.currentTarget.style.opacity = 0.3}
                onMouseOut={e => e.currentTarget.style.opacity = 1}></img>
              </a>
              <p>This group project was a shopping site specifically tailored towards parents/carers selling baby products. It was created using <span style={{fontWeight:'bold'}}>HTML, CSS, Javascript, Node.Js, React, Express.js, GraphQL, Mongoose, MongoDB, Stripe API, Open AI API, Web Manifest, dotenv, jsonwebtoken,</span> chatscope/chat-ui-kit-react, react-simple-chatbot, <span style ={{fontWeight: 'bold'}}>bcrypt, bootstrap</span>, bootstrap-icons, react-responsive-carousel, apollo-server-express and <span style={{fontWeight:'bold'}}>Easy gif</span> (Animated PNG). This site was unique with an <span style={{fontWeight:'bold'}}>ai chat box</span> reccommending specific products to users when given prompts about the child's age and what type of products they were looking for. This site also kept user's accounts and payment information safe with <span style={{fontWeight:'bold'}}>bycrpt, JSON Web Tokens</span> and <span style={{fontWeight:'bold'}}>Stripe API</span> payment. The <span style={{fontWeight:'bold'}}>database</span> stored many products, prices and information and adapted accordingly to the users activity (successfully adding or removing products from the cart). When items were purchased the user saw a success page and the order history was also updated. The entire site worked successfully with a moving carousel, item description pages, pop up cart page, correct items displaying when searched or category selected and the site was fully <span style ={{fontWeight: 'bold'}}>responsive</span>.
              </p>
              <p>This project was completed through successful <span style={{fontWeight: 'bold'}}>agile teamworking</span>. I was again voted as the <span style={{fontWeight: 'bold'}}> project lead</span> by the group at the beginning of the project; I mainly worked on the initial idea of the project, <span style={{fontWeight:'bold'}}>front-end</span> design, <span style={{fontWeight: 'bold'}}>ressolving Git Conflicts, branding, testing effciency, wireframes, database, responsive CSS, organising/supporting</span> the team, <span style={{fontWeight:'bold'}}>debugging, deligating tasks, communication</span> and the <span style ={{fontWeight:'bold'}}></span>presentation. This project was publicly presented on multiple occasions (during class as well as networking events) and <span style={{fontWeight: 'bold'}}>won the award for the best UX/UI</span> in the class, at UoB.
              </p>
              <p><span style={{fontWeight: 'bold'}}>Disclaimer:</span> Unfortunately, this project was deployed using Heroku, due to the lack of funding it has been removed, so a live link to the site is currently unavailable. However, if you are interested in seeing more information about this project, please visit the Github repository by clicking the Github icon below. If you would like to view the accompanying presentation, please click the google docs icon below.
              </p>
              <div style={{display: 'flex', flexDirection: "row", justifyContent: 'center', padding: "1%",}}>
              <a style={{ color: '#b62075' }}href="https://docs.google.com/presentation/d/11Q0NqPttEWbbikf7DgOIpo-cmoJwbGTlaLnJnTb_8OE/edit?usp=sharing"><img
              src={googledocs}
              alt="google docs"
              style={{width: 40, alignItems: "center"}}
              onMouseOver={e => e.currentTarget.style.opacity = 0.3}
              onMouseOut={e => e.currentTarget.style.opacity = 1}/></a>
              <a style={{ color: '#b62075' }}href="https://github.com/AshtonJ7/blissful-beginnings.git"><img
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
              <p>This application has been created using <span style={{fontWeight:'bold'}}>HTML, JavaScript, CSS</span> and <span style={{fontWeight:'bold'}}>API</span>s. API stands for Application Programming Interface, and allows sharing of data, in this case APIs were used to request data about the weather. The desired data was then chosen and displayed on the webpage using JavaScript. When the user types a location in the search bar and clicks the search button below, they will see the name of the city, current temperature, wind speed, humidity level and percentage of clouds in that location. An icon will also appear clearly displaying the type of weather so that it is much easier for readers to see and is more inclusive. The locations the user searches are also saved in the <span style={{fontWeight:'bold'}}>local storage</span> and then displayed in the 'Recently Searched' area of the website, when clicked the weather data for that location will be retrieved again, thus improving the user experience.
              </p>
              <p><span style={{fontWeight: 'bold'}}>Disclaimer:</span> Unfortunately, the API key used during this project is now invalid, impacting on the functionality of this project. However, if you are interested in seeing more information about this project, please visit the Git hub repository using the link below.</p>
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

            <section class="box">
              <h3 style={{ color: '#b62075', textAlign: 'center'}}>My second project: Portfolio </h3>
              <a href="https://robyn-smith.github.io/week-2-portfolio/">
                <img class= "projectpic" alt="week 2 portfolio" src={week2}
                onMouseOver={e => e.currentTarget.style.opacity = 0.3}
                onMouseOut={e => e.currentTarget.style.opacity = 1}></img>
              </a>
              <p>This project was created from scratch using <span style={{fontWeight: 'bold'}}>HTML</span> and <span style={{fontWeight:'bold'}}>CSS</span> to create a fully <span style={{fontWeight:'bold'}}>responsive</span> portfolio displaying my work to perspective employers. This project supported the creation of the porfolio you are currently viewing. The website features include a profile picture of me and an 'About Me' section (displayed in the aside), a bold heading featuring my name (displayed in the header), images of my previous work with titles, descriptions and working links to the deployed websites (displayed in the article), working navigation links that direct the readers to the corresponding sections, a list contact details (displayed in the footer), different sized images, pleasing background colours/image, a responsive webpage layout that changes according to screen size or viewport, images containing <span style={{fontWeight:'bold'}}>alternative text</span>.
              </p>
              <a style={{ color: '#b62075' }}href="https://github.com/Robyn-Smith/week-2-portfolio.git"><img
            src={github}
            alt="github"
            style={{width: 40, alignItems: "center"}}
            onMouseOver={e => e.currentTarget.style.opacity = 0.3}
            onMouseOut={e => e.currentTarget.style.opacity = 1}/></a>
            </section>
            
            <section class="box">
              <h3 style={{ color: '#b62075', textAlign: 'center'}}>My third project: Password Generator </h3>
              <a href="https://robyn-smith.github.io/week-3-password-generator/">
                <img class= "projectpic" alt="week 3 password generator" src={week3}
                onMouseOver={e => e.currentTarget.style.opacity = 0.3}
                onMouseOut={e => e.currentTarget.style.opacity = 1}></img>
              </a>
              <p>This website generates passwords according to the user's preferences. It was created using <span style={{fontWeight:'bold'}}>HTML, JavaScript</span> and <span style={{fontWeight: 'bold'}}>CSS</span>. CSS and HTML starter code was given for this project, I completed the JavaScript to add the functionality to the site. When the user clicks the generate password button a series of prompts appear on the screen. The user can input how many characters long they would like their password, with a limit that this number must be between 8 and 128 characters. If the user selects a number that is not between 8 and 128, they will be alerted and the event stops. Should the user enter non numeric characters in this prompt they will also receive the same alert stating they must use numeric characters when entering a desired password length. When the user selects a desired password length within the range, they are asked whether or not they wish to include numbers, lowercase letters, uppercase letters or special characters, this is confirmed by clicking OK or cancel. If the user selects cancel for all character types they will be alerted and told they must include at least one type of character and the event stops; the word "undefined" will appear in the 'your secure password' box. Once the user has answered all prompts, with the length being between 8-128 characters and with at least one type of character selected, they are provided with a randomised password containing only characters they chose with their desired length. If the user is not satisfied with the password generated, they can start the process again by clicking the generate password button.
              </p>
              <a style={{ color: '#b62075' }}href="https://github.com/Robyn-Smith/week-3-password-generator.git"><img
            src={github}
            alt="github"
            style={{width: 40, alignItems: "center"}}
            onMouseOver={e => e.currentTarget.style.opacity = 0.3}
            onMouseOut={e => e.currentTarget.style.opacity = 1}/></a>
            </section>

            <section class="box">
              <h3 style={{ color: '#b62075', textAlign: 'center'}}>Work Day Scheduler </h3>
              <a href="https://robyn-smith.github.io/work-day-scheduler/">
                <img class= "projectpic" alt="work day schedular" src={workday}
                onMouseOver={e => e.currentTarget.style.opacity = 0.3}
                onMouseOut={e => e.currentTarget.style.opacity = 1}></img>
              </a>
              <p>
              This project uses <span style={{fontWeight:'bold'}}>JavaScript, CSS</span> and <span style={{fontWeight:'bold'}}>HTML</span> code to create a helpful day schedule that can be used to plan and organise time. In this project <span style={{fontWeight:'bold'}}>jQuery</span> was used throughout and was especially fundamental to call the <span style={{fontWeight: 'bold'}}>dayjs API</span>; which retrieves the current date. The current date is displayed in the header so that the user is reminded what day they are planning for. The dayjs api was also used to compare the current time with the office times available for the user to plan for in order to see whether they are in the past, present or future. CSS styling was used to change the colour of each time block to indicate this. If the time of the event is in the past the block is grey with black text, if it is in present the block is red in colour with white text and if it is in the future it is displayed in green with white text. This supports user experience as they can clearly see not to plan for the past and how much time they have left in the day. The user enters their plans/events and routines into the day scheduler and if they wish to save these plans, they click the save button on the right. Once saved the user can refresh the page and their plans will still be visible as the events were saved in <span style={{fontWeight:'bold'}}>local storage</span>. If a user wishes to remove or edit their plans they can retype or remove their text in the input area and save their changes again. <span style={{fontWeight:'bold'}}>Bootstrap</span> was also used in the styling and creation of html elements. This website is also <span style={{fontWeight:'bold'}}>responsive</span>.
              </p>
              <a style={{ color: '#b62075' }}href="https://github.com/Robyn-Smith/work-day-scheduler.git"><img
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