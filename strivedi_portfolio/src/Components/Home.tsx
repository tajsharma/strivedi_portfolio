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
                    <Navbar/>
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

            <section className="projects-section">
                <div className="projects-section-header">
                    <div className="italic-caption-text">
                        (Discover my work)
                    </div>

                    <div className="projects-header-text">
                        PROJECTS
                    </div>
                </div>

                <div className="project-section">
                    <div className="project-container">
                        <div className="project-info">
                            <div className="project-name-text">
                                Microsoft / NVIDIA VR CITY Simulation
                            </div>
                            <div className="project-caption-pill-container">
                                <button className="inactive-pillbutton">
                                    VR
                                </button>
                                <button className="inactive-pillbutton">
                                    Tablet
                                </button>
                                <button className="inactive-pillbutton">
                                    Desktop
                                </button>
                                <button className="inactive-pillbutton">
                                    B2B
                                </button>
                                <button className="inactive-pillbutton">
                                    Digital Twins
                                </button>
                                <button className="inactive-pillbutton">
                                    3D Simulations
                                </button>
                            </div>

                            <div className="project-description-para">
                                Designed a user experience for the NVIDIA-powered Omniverse platform,
                                showcasing how digital twin technology transforms industries through
                                real-time 2D and 3D simulations.
                            </div>

                        </div>

                        <div className="project-visual">
                            <img src="src/assets/Home/devices/ipad.png" alt="ipad"></img>
                        </div>
                    </div>
                </div>


            </section>
        </div>
    )
}

export default Home