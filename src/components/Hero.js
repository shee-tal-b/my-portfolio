import React, { useEffect, useRef } from 'react';

import Typed from 'typed.js';
import './Hero.css';

const Hero = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Hey ! ", "I am Sheetal !!"],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          <span ref={typedElement}></span>
        </h1>
        <p className="hero-subtitle">Software Developer | Problem Solver | ML Enthusiast</p>
        {/* <button className="hero-cta">Learn More</button> */}
      </div>
    </div>
  );
};

export default Hero;
