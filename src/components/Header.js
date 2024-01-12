import React from "react";
// import backgroundImage from "../assets/5597757.jpg"

function Header({ currentPage }) {
    return (
        <header style={{display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        background: '#b6207562',}}>
        <h1 style={{ color: 'white'}}>Robyn Smith</h1>
        <p>
          I am a hardworking, conscientious first class graduate looking for a career in coding.
        </p>
      </header>
    );
}

export default Header;