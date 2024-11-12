import React from 'react';
import './Hero.css'; 

const HeroSection = () => {
    return (
        <section className="hero-section dark-mode">
            <div className="hero-container">
                <div className="hero-layout">
                <div>
                       <h2>Hello,</h2>
                       <h1>I'm <span>Arun Kapil</span></h1>
                        <p className="hero-text">
                             a versatile UI/UX designer and full-stack web developer with a focus on crafting seamless, user-centric digital experiences
                            <br className="hidden md:inline lg:hidden" />
                            turpis pulvinar, est scelerisque ligula sem
                        </p>
                        <button>Contact Me</button>
                    </div>
                    <img src="assets/svg/Business_SVG.svg" alt="Protfolio Image" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
