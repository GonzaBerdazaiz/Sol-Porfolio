import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Email from '../../assets/Email.png'
import Linkedin from '../../assets/Linkedin.png'
import Proz from '../../assets/Proz.png'
import './Contact.css'

const Contact = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="content">
            <div className="grid-contact-columns">
                <div>
                    <h2 style={{color: '#5E5343'}}>Contact me</h2>
                    <div className='Icons'>

                        <img src={Email} alt='Email'></img>
                        <a href="https://www.linkedin.com/in/mar%C3%ADa-soledad-berdazaiz-23021845/"><img src={Linkedin} alt='Linkedin'></img></a>
                        <a href="https://www.proz.com/profile/744568"><img src={Proz} alt='Proz'></img></a>
                        
                    </div>
                    <h2 style={{color: '#5E5343', fontSize: '15px', fontWeight:'600'}} data-aos="zoom-in" data-aos-duration="1000">Have you written a book in English and now you are looking to expand your market?
                    Translating it into Spanish, the second most-spoken language in the world, is a great way to do so!</h2>
                    <h2 style={{color: '#5E5343', fontSize: '15px', fontWeight:'600'}} data-aos="zoom-in" data-aos-duration="1000">Get your <strong>FREE QUOTE</strong> now! I will get back to you within fourty-eight hours.</h2>
                </div>
                <div className='contact-form'>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdYsCAirRK90TZQ_sYQLAUTv9uqNvx_d2woURi7581whRQ_aw/viewform?embedded=true" >Cargando…</iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact;