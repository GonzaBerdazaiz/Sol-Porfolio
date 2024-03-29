import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import './Aboutme.css'

const About = () => {

    useEffect(() => {
        AOS.init();
    }, []); 

    return (
        <div className="content">
            <div className="grid-two-columns about-content" id='About'>
                <div className="about-image">
                    <img src='/assets/About1.jpg' width='100%' height='100%' alt='About1' />
                </div>
                <div>
                    <h2 data-aos="fade-right" data-aos-duration="1000">About me</h2>
                    <p>My name is María Soledad and I’m a translator. I am passionate about my work. I’m highly reliable and well-organized.</p>
                    <div className='about-text-image'>
                        <p>When it comes to literary translation, I understand the difficulty behind entrusting your book for its translation. That is why my main goal is to live up to expectations by assuring you I will do the most professional work.</p>
                        <img src='/assets/About2.jpg' alt='About2' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;