import React, { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import './Traslator.css'

const Traslator = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="content">
      <div className="grid-columns-traslator">
        <div>
          <h2 data-aos="fade-left" data-aos-duration="1000">What does a literary translator do?</h2>
          <p>As a literary translator, I do not only have a high level of linguistic competences, but I also have the technical and cultural knowledge to accurately translate a text in a way that sounds natural for the target audience.</p>
          <p>At the same time, I am capable of recognizing the author’s tone and voice so that the feelings and emotions of the source text will be transmitted in the translated text.</p>
        </div>
        <div className='traslator-image'>
          <img src='https://drive.google.com/uc?export=download&id=1EInh2BIY1EG5k7uVB41OnDNhKoIG5hZn' alt='Libro1' id='libro1'/>
        </div>
        <div className='traslator-image'>
          <img src='https://drive.google.com/uc?export=download&id=19aQ5Wnr9Fr8x46jT0881BlrUHuP5F436' alt='Libro1' id='libro2'/>
        </div>
      </div>
    </div>
  )
}

export default Traslator;