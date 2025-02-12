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
                    <div className="project-container" id="project1">
                        <div className="project-info-container">
                            <div className="project-name-text">
                                MICROSOFT / NVIDIA VR CITY Simulation
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

                            <div className="case-study-button-container">
                                <button className="case-study-button">
                                    View Case Study
                                    <div className="icon-wrapper">
                                        <img className="white-icon"src="src/assets/Home/whitearrow.png" id="icon"></img>
                                        <img className="black-icon"src="src/assets/Home/blackarrow.png" id="icon"></img>
                                    </div>   
                                </button>
                            </div>

                        </div>

                        <div className="project-visual">
                            <img className="ipad-landscape" src="src/assets/Home/devices/ipad1.png" alt="ipad"></img>
                            <div className="radial-pattern"></div>
                        </div>
                    </div>

                    <div className="project-container" id="project2">
                        <div className="project-info-container">
                            <div className="project-name-text">
                                KNOVVA AI TASK WORKFLOW DESIGN
                            </div>
                            <div className="project-caption-pill-container">
                                <button className="inactive-pillbutton">
                                    Desktop
                                </button>
                                <button className="inactive-pillbutton">
                                    B2B
                                </button>
                                <button className="inactive-pillbutton">
                                    AI
                                </button>
                                <button className="inactive-pillbutton">
                                    Task Management/Tracking
                                </button>
                            </div>

                            <div className="project-description-para">
                                Created an intuitive platform for Knovva’s AI coworker, enabling
                                real-time task tracking, progress updates, and seamless code 
                                management tailored for enterprise clients.
                            </div>

                            <div className="case-study-button-container">
                                <button className="case-study-button">
                                    View Case Study
                                    <div className="icon-wrapper">
                                        <img className="white-icon"src="src/assets/Home/whitearrow.png" id="icon"></img>
                                        <img className="black-icon"src="src/assets/Home/blackarrow.png" id="icon"></img>
                                    </div> 
                                </button>
                            </div>
                        </div>

                        <div className="project-visual">
                            <img className="laptop" src="src/assets/Home/devices/laptop.png" alt="macbook"></img>
                            <div className="radial-pattern"></div>
                        </div>
                    </div>


                    <div className="project-container" id="project3">
                        <div className="project-info-container">
                            <div className="project-name-text">
                                Exact Sciences Report Redesign
                            </div>
                            <div className="project-caption-pill-container">
                                <button className="inactive-pillbutton">
                                    A4
                                </button>
                                <button className="inactive-pillbutton">
                                    Desktop
                                </button>
                                <button className="inactive-pillbutton">
                                   Tablet
                                </button>
                                <button className="inactive-pillbutton">
                                    B2B
                                </button>
                                <button className="inactive-pillbutton">
                                    Client-Facing
                                </button>
                                <button className="inactive-pillbutton">
                                    Healthcare UX
                                </button>
                            </div>

                            <div className="project-description-para">
                                Redesigned the Oncodetect patient report for Exact Sciences, 
                                improving readability and clarity while maintaining medical 
                                accuracy for both patients and providers
                            </div>

                            <div className="case-study-button-container">
                                <button className="case-study-button">
                                    View Case Study
                                    <div className="icon-wrapper">
                                        <img className="white-icon"src="src/assets/Home/whitearrow.png" id="icon"></img>
                                        <img className="black-icon"src="src/assets/Home/blackarrow.png" id="icon"></img>
                                    </div> 
                                </button>
                            </div>

                        </div>

                        <div className="project-visual-ipad">
                            <img className="ipad-vertical" src="src/assets/Home/devices/ipad2.png" alt="ipad"></img>
                            <div className="shadow-container">
                                <div className="radial-pattern-ipad-vertical"></div>
                            </div>
                        </div>
                    </div>

                    <div className="project-container" id="project4">
                        <div className="project-info-container">
                            <div className="project-name-text">
                                <i>Solucky</i> fashion brand Web Design
                            </div>
                            <div className="project-caption-pill-container">
                                <button className="inactive-pillbutton">
                                    Desktop
                                </button>
                                <button className="inactive-pillbutton">
                                    Tablet
                                </button>
                                <button className="inactive-pillbutton">
                                   Mobile
                                </button>
                                <button className="inactive-pillbutton">
                                    B2C
                                </button>
                                <button className="inactive-pillbutton">
                                    Fashion
                                </button>
                                <button className="inactive-pillbutton">
                                    Media
                                </button>
                                <button className="inactive-pillbutton">
                                    Visual Storytelling
                                </button>
                            </div>

                            <div className="project-description-para">
                                Crafted a modern, visually striking website for <i>Solucky</i>, a fashion
                                and media brand, blending stylish aesthetics with functionality to 
                                create a creative and engaging platform.
                            </div>

                            <div className="case-study-button-container">
                                <button className="case-study-button">
                                    View Case Study
                                    <div className="icon-wrapper">
                                        <img className="white-icon"src="src/assets/Home/whitearrow.png" id="icon"></img>
                                        <img className="black-icon"src="src/assets/Home/blackarrow.png" id="icon"></img>
                                    </div> 
                                </button>
                            </div>

                        </div>

                        <div className="project-visual-iphone">
                            <div className="iphone-shadow-div">
                                <img className="iphone-image" src="src/assets/Home/devices/iphone2.png" alt="iphone"></img>
                                <div className="iphone-shadow"></div>
                            </div>
                            
                            <div className="iphone-shadow-div2">
                                <img className="iphone-image" src="src/assets/Home/devices/iphone1.png" alt="iphone"></img>
                                <div className="iphone-shadow"></div>
                            </div>
                        </div>
                    </div>

                </div>


            </section>
        </div>
    )
}

export default Home