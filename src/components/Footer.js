// import React from "react";

// function Footer() {
//     return <div>Copyright JSON 2023 &copy;</div>;
// }


// <footer id="Contact" class="Contact">
//         <h4>
//           Contact Information
//         </h4>
//         <ul>
//           <li>📩 Email: robynsmith@hotmail.co.uk</li>
//           <li>📱 Mobile: 07777777774</li>
//           <li>☎️ Landline: 01334 123454</li>
//         </ul>
//       </footer>

// export default Footer;
//import '../styles/Header.css';

import React from 'react';
import github from '../assets/github-icon-logo-png-transparent.png';
import linkedin from '../assets/linkedin-icon-logo-png-transparent.png';
import facebook from '../assets/facebook-3-logo-png-transparent.png';

const styles = {
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2%',
    background: '#b6207562',
};

const socialStyle = {
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'center',
    padding: "1%",
}

const imgStyle = {
    width: 32,
}

function Footer() {
    return (
        <footer style={styles}>
            <div style={socialStyle}>
                <a href="https://github.com/Robyn-Smith?tab=repositories"><img
                    src={github}
                    alt="github"
                    style={imgStyle}
                    onMouseOver={e => e.currentTarget.style.opacity = 0.6}
                    onMouseOut={e => e.currentTarget.style.opacity = 1}
                /></a>
                <a href="https://www.linkedin.com"><img
                    src={linkedin}
                    alt="linkedin"
                    style={imgStyle}
                    onMouseOver={e => e.currentTarget.style.opacity = 0.6}
                    onMouseOut={e => e.currentTarget.style.opacity = 1}
                /></a>
                <a href="https://www.facebook.com"><img
                    src={facebook}
                    alt="facebook"
                    style={imgStyle}
                    onMouseOver={e => e.currentTarget.style.opacity = 0.6}
                    onMouseOut={e => e.currentTarget.style.opacity = 1}
                /></a>
            </div>
            <span style={{ color: 'white',}}>© Robyn Smith</span>
        </footer>
    );
}

export default Footer;