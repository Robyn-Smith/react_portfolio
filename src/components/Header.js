import React from "react";

const styles = {
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    // padding: '2%',
    background: '#b6207562',
    // 
};

function Header({ currentPage }) {
    return (
        <header style={styles}>
        <h1 style={{ color: 'white', textAlign: 'center'}}>Hi I'm Robyn Smith and this is my Portfolio</h1>
        <p>
          I am a hardworking, conscientious first class graduate looking for a career in coding.
        </p>
      </header>
    );
}

export default Header;