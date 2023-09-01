import React from 'react';
import week1 from "../../assets/project1.png";

export default function Portfolio() {
  return (
    <div>
      <h1 style={{ color: '#b62075' }}>Portfolio Page</h1>
      <p>
        During my bootcamp full stack development course I completed multiple projects. This supported my knowledge, gave me experience and supported my confidence in coding. Please click the images below to view my projects.
      </p>
      <section class="box">
            <h3 style={{ color: '#b62075' }}>My first project: Code Refactor</h3>
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