import { useEffect } from 'react';
import pccoffe from '/assets/pccoffe.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
import './Hero.css'

const Hero = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="content">
            <div className="grid-two-columns">
                <div className="hero-image">
                    <img src={pccoffe} alt='pccoffe' width= '100%' height='100%'/>
                </div>

                <div className='paneo' >
                    <h2 data-aos="fade-right" data-aos-duration="1000">Literary Translations</h2>
                    <p>I’m a professional English-to-Spanish Literary Translator, with over ten years of experience working for publishing houses and independent, self-published authors.</p>
                    <p>With In Other Words, you can expand your audience to reach the second-most-spoken language in the world. Imagine the possibilities!</p>
                </div>
            </div>
        </div>
    )
}

export default Hero;