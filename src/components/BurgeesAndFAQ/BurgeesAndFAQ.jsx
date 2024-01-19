import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './BurgeesAndFAQ.css'
import { questionsAndAnswers } from '../../data'

const BurgeesAndFAQ = () => {

    useEffect(() => {
        AOS.init();
    }, []);
    
    const [isOpen, setIsOpen] = useState(Array(questionsAndAnswers.length).fill(false));
    
    const toggleAnswer = (index) => {
        const newIsOpen = [...isOpen];
        newIsOpen[index] = !newIsOpen[index];
        setIsOpen(newIsOpen);
    };
    
    return (
        <>
        <div className="Burgees-content">
            <div className="contenedor-fijo">
                <div className="Burgees-image" data-aos="zoom-in" data-aos-duration="3000">
                    <img src='src\assets\Libro.jpeg' alt='Libro' />
                </div>
            </div>
            <div className='Burgees-text'>
                <p style={{fontStyle:'italic', color:'white'}} data-aos="zoom-in" data-aos-duration="3000">“Translation is not a matter of words only: it is a matter of making intelligible a whole culture.“ </p>
                <p style={{display:'flex', justifyContent:'flex-end', color:'white'}} data-aos="zoom-in" data-aos-duration="3000">- Anthony Burgess</p>
            </div>
        </div>
        <div className="grid-FAQ-columns qa-container" >
            <div style={{padding:'40px 20px'}}>
                <h2 style={{color: '#5E5343', textAlign:'center'}}>FAQ</h2>
                <p style={{fontSize:'15px'}}>Here are some of the most common concerns about the translation of a book. However, if you still have questions, don’t hesitate to contact me!</p>
            </div>
            <div className='question-section' style={{padding:'10px 20px'}}>
                {questionsAndAnswers?.map((qa, index) => (
                    <div key={index} className="qa-item">
                        <div className="question" style={{display:'flex', paddingTop:'30px', alignItems: 'center', paddingLeft: '20px', paddingRight: '50px'}} onClick={() => toggleAnswer(index)}>
                            <p style={{ color: '#EFE9E4', marginRight: '10px' }}>{qa.question}</p>
                            <p className={isOpen[index] ? "minus-icon" : "plus-icon"} style={{color:'white', marginTop:'0', marginLeft: 'auto'}}></p>
                        </div>
                    {isOpen[index] && <h4 className="answer" style={{marginTop:'0',fontSize:'16px', padding:'0 40px'}}>{qa.answer}</h4>}
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default BurgeesAndFAQ;