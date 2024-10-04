import React from 'react'
import { useState } from 'react';
import "./styles/HeroSection.css"
const HeroSection = () => {
    const content = [
        { title: "A Legacy of Quality", text: "One stop Solution for Training needs." },
        { title: "Excellence in Education", text: "Providing top-notch courses and resources." },
        { title: "Empower Your Future", text: "Unlock your potential with our programs." }
      ];
    
      const [index, setIndex] = useState(0);
    
      const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % content.length);
      };
    
      const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex - 1 + content.length) % content.length);
      };

    return (
    <div className='hero'>
        <div className='hero-page'></div>
        <div className='overlay'></div>
        <div className='box'>
            <h1 className='content-title'>{content[index].title}</h1>
            <p className='content-text'>{content[index].text}</p>
            <div className="navigation">
                <button className="nav-button prev" onClick={handlePrev}>&larr; Prev</button>
                <button className="nav-button next" onClick={handleNext}>Next &rarr;</button>
            </div>
        </div>
    </div>
  )
}

export default HeroSection
