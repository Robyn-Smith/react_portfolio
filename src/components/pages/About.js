import React from 'react';
import profilepic from "../../assets/wedding-robyn.png";
import CV from "../../Files/PortfolioCV.pdf";

export default function About() {
  return (
    <div style={{flexDirection: 'flex', flexWrap: 'wrap',
    justifyContent: 'space-evenly',}}>
      <h1 style={{ color: '#b62075' }}>About Me</h1>
      <img class= "profilepic" alt="Picture of Robyn" src={profilepic}></img>
      <a href = {CV} download={CV} Class= 'resume'>
      {/* <img class= "PDF" alt="PDF" src={PDF} style={{width: "5px"}}
                onMouseOver={e => e.currentTarget.style.opacity = 0.3}
  onMouseOut={e => e.currentTarget.style.opacity = 1}></img>*/}Resume</a>
      <div class= "aboutpage" style={{backgroundImage:'linear-gradient(60deg, rgba(241, 98, 16, 0.174), white, rgba(208, 5, 130, 0.215))', marginLeft: "5%", marginRight: "5%", borderRadius: "50px"}}>
        <p>
        Hello, my name is Robyn Smith, I am a Junior full stack web developer who enjoys Front-end design & creativity and developing efficient websites/applications with pleasing user interfaces. I have recently completed the Full-Stack Coding Bootcamp, with the University of Birmingham and I am keen to utilise the skills I have gained in a permanent career in the digital sector. I am a self-motivated, high achiever and work well in both team and individual settings. I am looking for a role where I can continue to learn, develop and grow my skills as a professional. [I am dynamic, ambitious, proactive, dependable and I relish challenges.]
        </p>

        <p>
        I have a strong academic record, including 10 GCSEs at grade C or above (including 3 Bs, 3 As and an A*) and two Cache diplomas, both at grade A. My highest achievement being a 1st class BA honours degree in Integrated Working with Children and Families, I gained many hours of work experience and employment in this sector; however, I decided to change career path. As a result, I researched alternative careers and courses, decided to learn basic Python and quickly gained an interest in coding. I then completed the Full-Stack Coding Bootcamp and achieved an A+. After completing the Bootcamp, I started an internship at FL1 Digital to gain work experience and further develop my knowledge in web development. [In working and learning environments I am attentive and enthusiastic. I am keen to excel at coding and utilise my other strengths to bring more than just technical competence into my future role. Dedication and commitment to learning are key to my success.]
        </p>

        <p>
        Many of the skills I have learned to date will be beneficial to my future role in the technology sector. These include a proficient knowledge and understanding of code and web development including (but not limited to) HTML, CSS and JavaScript. Good governance surrounding design, development, content migration and client liaison in website builds. Excellent social skills, experience and success with agile teamworking, organisational skills and leadership skills. [Although agile teamworking does not have a set leader or manager, I was voted to be the project lead during all group projects in the Bootcamp relaying the groups position/journey to the rest of the class, presenting our work, advocating for the team, supporting the team with any issues or decision making and resolving conflicts. All of the teams and tutors often said I was a good leader due to my social confidence, pragmatic approach, compassion and empathy.]
        </p>

        <p>
        I am keen to apply my diverse skillset into coding and pursue a career in the tech industry. I am a committed, conscientious and a determined professional. I complete work to a very high standard and achieve excellent results. I also receive excellent feedback from teachers, tutors and lecturers as well as employers. Given these attributes, I know that I can embark on a successful career in technology.
        </p>
      </div>
    </div>
  );
}