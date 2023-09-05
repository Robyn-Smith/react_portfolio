import React from 'react';
import github from '../assets/github-icon-logo-png-transparent.png';
import linkedin from '../assets/linkedin-icon-logo-png-transparent.png';
import facebook from '../assets/facebook-3-logo-png-transparent.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';

function Footer() {
    return (
        <footer style={{display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        background: '#b6207562',}}>
            <div style={{display: 'flex', flexDirection: "row", justifyContent: 'center', padding: "1%",}}>
            <a href="https://instagram.com"><img
                    src={instagram}
                    alt="instagram"
                    style={{width: 40, paddingRight: '5%'}}
                    onMouseOver={e => e.currentTarget.style.opacity = 0.3}
                    onMouseOut={e => e.currentTarget.style.opacity = 1}
                /></a> 
            <a href="https://twitter.com"><img
                    src={twitter}
                    alt="twitter"
                    style={{width: 40, paddingLeft: '5%', paddingRight: '5%'}}
                    onMouseOver={e => e.currentTarget.style.opacity = 0.3}
                    onMouseOut={e => e.currentTarget.style.opacity = 1}
                /></a>
                <a href="https://github.com/Robyn-Smith?tab=repositories"><img
                    src={github}
                    alt="github"
                    style={{width: 40, paddingLeft: '5%', paddingRight: '5%'}}
                    onMouseOver={e => e.currentTarget.style.opacity = 0.3}
                    onMouseOut={e => e.currentTarget.style.opacity = 1}
                /></a>
                <a href="https://www.linkedin.com"><img
                    src={linkedin}
                    alt="linkedin"
                    style={{width: 40, paddingLeft: '5%', paddingRight: '5%'}}
                    onMouseOver={e => e.currentTarget.style.opacity = 0.2}
                    onMouseOut={e => e.currentTarget.style.opacity = 1}
                /></a>
                <a href="https://www.facebook.com"><img
                    src={facebook}
                    alt="facebook"
                    style={{width: 40, paddingLeft: '5%'}}
                    onMouseOver={e => e.currentTarget.style.opacity = 0.3}
                    onMouseOut={e => e.currentTarget.style.opacity = 1}
                /></a>
            </div>
            <span style={{ color: 'white',}}>© Robyn Smith 2023</span>
        </footer>
    );
}

export default Footer;