import React from "react";
// import backgroundImage from "../assets/5597757.jpg"

function Header({ currentPage }) {
    return (
        <header style={{display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        background: '#b6207562',}}>
        <h1 style={{ color: 'white',}}>Hi I'm <span style={{ color: '#b62075',
        paddingLeft: '6px',
        paddingRight: '6px',
        }} class="name">Robyn Smith</span> and this is my Portfolio</h1>
        <p>
          I am a hardworking, conscientious first class graduate looking for a career in coding.
        </p>
      </header>
    );
}

export default Header;