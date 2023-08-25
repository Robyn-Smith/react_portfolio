import React from "react";

function Nav({ pages, onSetPage }) {
    return (
        <nav className="nav nav-masthead justify-content-center">
            {pages.map((page) => (
                <a className="nav-link active" href="#" onClick={() => onSetPage(page)}>
                    {page}
                </a>
            ))}
        </nav>
    );
}

export default Nav;