import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import UNLP from '../../assets/UNLP.png'
import UEA from '../../assets/UEA.png'
import FIILE from '../../assets/FIILE.png'
import UPC from '../../assets/UPC.png'
import './WhyTraslator.css'

const WhyTraslator = () => {

    useEffect(() => {
        AOS.init();
    }, []);
    
    return (
        <div className="content why-content">
            <div className="hero grid-two-columns" id='WhyTraslator'>
                <div className="hero-image">
                    <img src='https://drive.google.com/uc?export=download&id=1xDaStooit5DsfREROcaMca0iJFk-sRXz' width='100%' height='410px' alt='Why' />
                </div>
                <div>
                    <h2 data-aos="fade-right" data-aos-duration="1000">Why a professional translator?</h2>
                    <ul>
                        <li>I have over ten years of experience in translation with <strong>specialization in literary texts.</strong> </li>
                        <li>I am <strong>passionate</strong> about translation & writing.</li>
                        <li>Translating is not merely rendering a message or text into a different language; rather, it’s understanding the cultural differences. That is what distinguishes a good literary translator.</li>
                        <li>My work is always carried out in a meticulous manner, <strong>meeting deadlines</strong> and commitments.</li>
                        <li>I have the ability to carry out market research and help you <strong>localize</strong> your book to make it relevant to the new audience.</li>
                    </ul>
                </div>
            </div>
            <div className="studies" >
                <div>
                    <h2 style={{color: '#5E5343', fontSize:'30px'}}>
                        I have studied in
                    </h2>
                </div>
                <div className='studies-logos'>
                    <img src={UNLP} alt="unlp" id='unlp' />                    
                    <img src={UEA} alt="uea" id='uea'/>                    
                    <img src={FIILE} alt="fiile" id='uea'/>                    
                    <img src={UPC} alt="upc" id='unlp'/>                    
                </div>
            </div>
        </div>
    )
}

export default WhyTraslator;