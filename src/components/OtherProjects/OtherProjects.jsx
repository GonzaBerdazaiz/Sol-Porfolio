import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import './OtherProjects.css'

const Publications = () => {
    
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="content other-content" > 
            <div className="grid-other-columns" >
                <div className='text-other'>
                    <p data-aos="zoom-in" data-aos-duration="1000" style={{padding:'80px 0', fontSize:'16px'}}>Some other samples of my work include the translation of poetry and the publication of my own writings in magazines.</p>
                </div>
                <div className='others-images'>
                    <a href="https://memoria.fahce.unlp.edu.ar/libros/pm.301/pm.301.pdf" target="_blank" rel="noopener noreferrer">
                        <img src='src\assets\Others1.jpg' alt='Others1'/>
                    </a >
                    <span style={{fontFamily: 'Hatton Light', paddingBottom:'50px'}}>Translation of one word sonnets by Seymour Mayne, published by FaHCE in 2013.</span>
                </div>
                <div className='others-images'>
                    <img src='src\assets\Others2.webp'alt='Others2'/>
                    <span style={{fontFamily: 'Hatton Light', paddingBottom:'60px'}}>Short story Caminando, published in La Cucaracha de Legrand in February 2023.</span>
                </div>
            </div>
        </div>
    )
}

export default Publications;