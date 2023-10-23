import React, { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import PubliCards from './PubliCards';
import './Publications.css'

const Publications = () => {
  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="content public-cont">
      <div className="grid-publication-columns" id='Publications'>
        <div className='publications-cont'>
          <h2 data-aos="fade-left" data-aos-duration="1000">Publications</h2>
          <p style={{fontStyle: 'italic', width:'70%', padding:'20px'}}>“Maria is amazing to work with as a translator, and I cannot recommend her enough!”</p>
          <p style={{display:'flex', width:'70%', padding:'0 20px', justifyContent:'end'}}>CASSIE COLE</p>
        </div>
        <div className='publicationsCard-cont'>
          <PubliCards />
        </div>
      </div>
    </div>
  )
}

export default Publications;