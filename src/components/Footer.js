import React from 'react';
import github from '../assets/github-icon-logo-png-transparent.png';
import linkedin from '../assets/linkedin-icon-logo-png-transparent.png';

function Footer() {
    return (
        <footer style={{display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        background: '#b6207562',}}>
            <div style={{display: 'flex', flexDirection: "row", justifyContent: 'center', padding: "1%",}}>
                <a href="https://github.com/Robyn-Smith?tab=repositories"><img
                    src={github}
                    alt="github"
                    style={{width: 40, paddingLeft: '5%', paddingRight: '5%'}}
                    onMouseOver={e => e.currentTarget.style.opacity = 0.3}
                    onMouseOut={e => e.currentTarget.style.opacity = 1}
                /></a>
                <a href="https://www.linkedin.com/in/robyn-smith-084a7725a/"><img
                    src={linkedin}
                    alt="linkedin"
                    style={{width: 40, paddingLeft: '5%', paddingRight: '5%'}}
                    onMouseOver={e => e.currentTarget.style.opacity = 0.2}
                    onMouseOut={e => e.currentTarget.style.opacity = 1}
                /></a>
            </div>
            <span style={{ color: 'white',}}>© Robyn Smith 2023</span>
        </footer>
    );
}

export default Footer;