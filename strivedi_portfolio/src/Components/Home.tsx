import React from "react";
import './Home.css';
import Navbar from './Navbar';

function Home(){
    return(
        <div>
            <div className="paralax-section">
                <div className="main-image-div">
                    <img className="solo-pic" src="src/assets/Home/mainpagepic.png" alt="solo-pic"></img>
                </div>
                <div className="main-content-section">
                    <div className="hero-div">
                        <div className="intro-text-div">
                            <div className="hero-header hero-main-text">
                                hi, im <span className="header-nametag">shayna</span> ;
                            </div>
                            <div className="hero-para hero-main-text">
                                a UI/UX designer who merges creativity 
                                and technology to create seamless, intuitive 
                                user experiences.
                            </div>
                        </div>
                        <div className="location-text">
                            📍 currently based in DTX
                        </div>
                        <div className="brands-worked-with">
                            <div className="italic-caption-text">
                                (Who I’ve worked with)
                            </div>

                            <div className="trusted-by-header">
                                TRUSTED BY
                            </div>

                            <div className="company-logo-container">
                                <div className="logo-row">
                                    <img className="logo-image" src="src/assets/Home/logos/microsoftlogo.svg" alt="microsoft">
                                    </img>
                                    <img className="logo-image" src="src/assets/Home/logos/runelogo.svg" alt="rune">
                                    </img>                              
                                </div>

                                <div className="logo-row">
                                    <img className="logo-image" src="src/assets/Home/logos/provokelogo.svg" alt="provoke">
                                    </img>
                                    <img className="logo-image" src="src/assets/Home/logos/exactscienceslogo.svg" alt="exact sciences">
                                    </img>                                       
                                </div>

                                <div className="logo-row">
                                    <img className="logo-image" src="src/assets/Home/logos/bridgewestlogo.svg" alt="bridgewest group">
                                    </img>                         
                                </div>
                                
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home