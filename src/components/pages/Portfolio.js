import React from 'react';
import week1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png"
import picturesque from "../../assets/picturesque.png"

export default function Portfolio() {
  return (
    <div>
      <h1 style={{ color: '#b62075' }}>Portfolio Page</h1>
      <p>
        During my bootcamp full stack development course I completed multiple projects. This supported my knowledge, gave me experience and supported my confidence in coding. Please click the images below to view my projects.
      </p>
      <section class="box">
            <h3 style={{ color: '#b62075' }}>Group Project 1: Picturesque</h3>
            <a href="https://robyn-smith.github.io/The-Dev-Society/">
              <img class= "picturesque" alt="picturesque" src={picturesque}></img>
            </a>
            <p>
            This was a group project was a movie website, allowing users to create personal watchlists, watch trailers and search for and learn more about films including actors that star in them, plot, place of creation, genre, imbd rating and date of creation. This aplication was created using HTML 5, CSS and JavaScript and used 4 API's including GeoCode -for City/Country to Latitude/Longitude, OMDB- for Movie details, YouTube- for Movie Trailer from YouTube and Google Map- for showing Country in Google Map.
            </p>
          </section>
      <section class="box">
            <h3 style={{ color: '#b62075' }}>Group Project 2: Music Portal</h3>
            <a href="https://front-end-society-2d48b234d58b.herokuapp.com">
              <img class= "project2" alt="Music portal" src={project2}></img>
            </a>
            <p>
              This was a group project was a music streaming website, allowing users to create personal playlists, listen to songs and comment on public playlists. It was created using multiple technologies including Node.js, Express.js, Howler.js, bcrypt, Sequelize, dotenv, MySQL, Heroku, Handlebars Engine, CSS, JavaScript, SVGator and Canva.
            </p>
          </section>
          <section class="box">
            <h3 style={{ color: '#b62075' }}>My first project: Code Refactor </h3>
            <a href="https://robyn-smith.github.io/week-1-code-refactor-challenge/">
              <img class= "first-project-img" alt="Horiseon Webpage" src={week1}></img>
            </a>
            <p>
              This project is a code refactor to support a marketing agency website. The website contains information about Search Engine Optimisation, Online Reputation Management, Social Media Marketing, Lead Generation, Brand Awareness and Cost Management. It contains header, navigation, aside, section, figure, article and footer elements; which are styled in CSS. Within this code refactor I updated the title, fixed a link, replaced repetitive div tags with semantic elements, added alternative text descriptions to images and updated the CSS acordingly. As a result, this made the website more modern and suitible for HTML 5, more accessible for disabled users, improved funtionality and supported search engine optimisation.
            </p>
          </section>
          <section class="box">
            <h3 style={{ color: '#b62075' }}>My first project: Code Refactor </h3>
            <a href="https://robyn-smith.github.io/week-1-code-refactor-challenge/">
              <img class= "first-project-img" alt="Horiseon Webpage" src={week1}></img>
            </a>
            <p>
              This project is a code refactor to support a marketing agency website. The website contains information about Search Engine Optimisation, Online Reputation Management, Social Media Marketing, Lead Generation, Brand Awareness and Cost Management. It contains header, navigation, aside, section, figure, article and footer elements; which are styled in CSS. Within this code refactor I updated the title, fixed a link, replaced repetitive div tags with semantic elements, added alternative text descriptions to images and updated the CSS acordingly. As a result, this made the website more modern and suitible for HTML 5, more accessible for disabled users, improved funtionality and supported search engine optimisation.
            </p>
          </section>

    </div>
  );
}