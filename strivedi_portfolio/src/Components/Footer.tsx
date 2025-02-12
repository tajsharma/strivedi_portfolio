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
                            <img src="src/assets/Home/logos/linkedinicon.png" alt="in"></img>
                        </button>
                    </div>
                    <div className="top-footer-wrapper-mid">
                        <img src="src/assets/Home/logos/logoblack.png" alt="ST"></img>
                    </div>
                    <div className="top-footer-wrapper-right">
                        <p className="footer-nav-links-text">
                            © All Rights Reserved.
                        </p>
                    </div>
                </div>

                <div className="footer-bottom-wrapper">
                    <button className="footer-nav-links-text-smaller">
                        Back to Top
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Footer;