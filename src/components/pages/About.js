import React from 'react';
import profilepic from "../../assets/wedding-robyn.png";
import CV from "../../Files/PortfolioCV.pdf";

export default function About() {
  return (
    <div style={{flexDirection: 'flex', flexWrap: 'wrap',
    justifyContent: 'space-evenly',}}>
      <h1 style={{ color: '#b62075' }}>About Me</h1>
      <img class= "profilepic" alt="Robyn Smith's portrait" src={profilepic}></img>
      <a href = {CV} download={CV} Class= 'resume'>
      {/* <img class= "PDF" alt="PDF" src={PDF} style={{width: "5px"}}
                onMouseOver={e => e.currentTarget.style.opacity = 0.3}
  onMouseOut={e => e.currentTarget.style.opacity = 1}></img>*/}Resume</a>
      <div class= "aboutpage" style={{backgroundImage:'linear-gradient(60deg, rgba(241, 98, 16, 0.174), white, rgba(208, 5, 130, 0.215))', marginLeft: "5%", marginRight: "5%", borderRadius: "50px"}}>
        <p>
        Hello, my name is <span style={{fontWeight:'bold'}}>Robyn Smith</span>, I am a <span style={{fontWeight:'bold'}}>Junior full stack web developer</span> who enjoys <span style={{fontWeight:'bold'}}>Front-end design & creativity</span> and developing efficient websites/applications with pleasing user interfaces. I have recently completed the <span style={{fontWeight:'bold'}}>Full-Stack Coding Bootcamp</span>, with the University of Birmingham and I am keen to utilise the skills I have gained in a permanent career in the digital sector. I am a <span style={{fontWeight:'bold'}}>self-motivated, high achiever</span> and work well in both <span style={{fontWeight:'bold'}}>team</span> and individual settings. I am looking for a role where I can continue to learn, develop and grow my skills as a professional. I am <span style={{fontWeight:'bold'}}>dynamic, ambitious, proactive, dependable</span> and I relish challenges.
        </p>

        <p>
        I have a strong academic record, including <span style={{fontWeight:'bold'}}>10 GCSEs</span> at grade C or above (including <span style={{fontWeight:'bold'}}>3 Bs, 3 As </span>and an <span style={{fontWeight:'bold'}}>A*</span> in Art) and <span style={{fontWeight:'bold'}}>two Cache diplomas</span>, both at <span style={{fontWeight:'bold'}}>grade A</span>. My highest achievement being a <span style={{fontWeight:'bold'}}>1st class BA honours degree</span> in Integrated Working with Children and Families, I gained many hours of work experience and employment in this sector; however, I decided to change career path. As a result, I researched alternative careers and courses, decided to learn basic <span style={{fontWeight:'bold'}}>Python</span> and quickly gained an interest in coding. I then completed the <span style={{fontWeight:'bold'}}>Full-Stack Coding Bootcamp</span> and achieved an <span style={{fontWeight:'bold'}}>A+</span>. After completing the Bootcamp, I started an <span style={{fontWeight:'bold'}}>internship at FL1 Digital</span> to gain work experience and further develop my knowledge in web development. In working and learning environments I am <span style={{fontWeight:'bold'}}>attentive</span> and <span style={{fontWeight:'bold'}}>enthusiastic</span>. I am keen to excel at coding and utilise my other strengths to bring more than just technical competence into my future role. <span style={{fontWeight:'bold'}}>Dedication</span> and <span style={{fontWeight:'bold'}}>commitment</span> to learning are key to my success.
        </p>

        <p>
        Many of the skills I have learned to date will be beneficial to my future role in the technology sector. These include a <strong>proficient knowledge</strong> and <strong>understanding of code</strong> and web development, including (but not limited to) <strong>HTML, CSS</strong> and <strong>JavaScript</strong> <i>[please see the <strong>My Portfolio</strong> page to view other technology I have experience with]</i>. Good governance surrounding <strong>design, development, content migration</strong> and <strong>client liaison</strong> in website builds. Excellent <strong>social skills</strong>, experience and success with <strong>agile teamworking, organisational skills</strong> and <strong>leadership skills</strong>. Although agile teamworking does not have a set leader or manager, I was voted to be the project lead during all group projects in the Bootcamp relaying the groups position/journey to the rest of the class, <strong>presenting</strong> our work, <strong>advocating</strong> for the team, <strong>supporting</strong> the team with any issues or decision making and <strong>resolving conflicts</strong>. All of the teams and tutors often said I was a good leader due to my <strong>social confidence, pragmatic approach, compassion</strong> and <strong>empathy</strong>.</p>

        <p>
          I am keen to apply my diverse skillset into coding and pursue a career in the tech industry. I am a <strong>committed, conscientious</strong> and a <strong>determined</strong> professional. I complete work to a very high standard and achieve excellent results. I also receive <strong>excellent feedback</strong> from teachers, peers, tutors and lecturers as well as employers. Given these attributes, I know that I can embark on a successful career in technology.
        </p>
      </div>
    </div>
  );
}