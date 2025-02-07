import React from "react";
import './Navbar.css';

function Navbar({}){
    return(
        <nav className="navbar">
            <div className="navbar-container">
                <a href="logo.com">
                    <button className="logo poppins-semibold-nav-links"> Logo </button>
                </a>

                <div className="nav-links-container">
                    <ul className="nav-list">
                        <li>
                            <a href="/home">
                                <button className="nav-item poppins-semibold-nav-links">Home</button>
                            </a>
                        </li>
                        <li>
                            <a href="/about">
                                <button className="nav-item poppins-semibold-nav-links">About</button>
                            </a>
                        </li>
                        <li>
                            <a href="/contact">
                                <button className="nav-item poppins-semibold-nav-links">Get in Touch</button>
                            </a>
                        </li>
                    </ul>
                </div>
                
            </div>
        </nav>
    )
}

export default Navbar