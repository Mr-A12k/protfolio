import React from 'react';
import './Hero.css';
import Kabix from '../assests/Kabix.png';
//import { Button, Box, Typography, Container } from '@mui/material';
import Button from '../assests/Button/Button1';


const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="content-container">
                    <div className="content">
                        <h1 className="title">
                            <div className="hello-text">
                            Hello,
                            </div>
                            <br />
                            <span className="highlight">I'm<span className='name-highlight'>Arun Kapil</span></span> Designer/Developer</h1>
                        <p className="description">Passionate about creating seamless and impactful user experiences,
                            I am a UI/UX designer and developer with a keen eye for detail and innovation.
                            My journey spans diverse projects, from designing intuitive interfaces to building responsive web applications.
                        </p>
                    </div>
                    <div className="button-group">
                        {/* <button variant="contained"><a href="#" className="btn-primary">Book a Call</a></button>
                        <button><a href="#" className="btn-secondary">Download Resume</a></button> */}
                        <Button></Button>
                    </div>
                </div>
                <div className="image-container">
                    <img src={Kabix} alt="Profile Image" className="hero-image" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
