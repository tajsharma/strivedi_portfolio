import React from "react";
import './Footer.css';

function Footer(){
    return(
        <div className="footer">
            <div className="footer-wrapper">
                <div className="footer-top">
                    <div className="top-footer-wrapper-left">
                        <button className="footer-nav-links-text">
                            Home 
                        </button>
                        <p className="footer-nav-links-text">|</p>
                        <button className="footer-nav-links-text">
                            About 
                        </button>
                        <p className="footer-nav-links-text">|</p>
                        <button className="footer-nav-links-text">
                            Contact 
                        </button>
                        <p className="footer-nav-links-text">|</p>
                        <button className="footer-linkedin-logo">
                            <img src="src/assets/Home/logos/linkedinicon.png"></img>
                        </button>
                    </div>
                </div>

                <div className="footer-bottom">
                    
                </div>

            </div>
        </div>
    )
}

export default Footer;