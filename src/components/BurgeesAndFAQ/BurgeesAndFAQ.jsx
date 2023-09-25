import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './BurgeesAndFAQ.css'

const BurgeesAndFAQ = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    const questionsAndAnswers = [
        {
          question: "How much does a translation cost?",
          answer:
            "Translation prices are based on source word count, although other factors like the complexity of the subject matter (a technical manual, for instance) may lead to a variation in the rates. I do, however, offer first-time clients discounts and special prizes. Contact me & get a free quote!",
        },
        {
          question: "How long will it take for my book to be ready?",
          answer:
            "The time it takes me to translate a book will also be connected to the type of book. But to give you a general idea, a novel 70,000 words long and moderate difficulty would take me 3 months to complete and the final product will always be a “ready-to-publish” translation.",
        },
        {
          question: "How do I get a quote?",
          answer:
            "It’s not necessary for you to send me your entire book in order to get a quote. All I need are the first three chapters and the total amount of words. Contact me and I will get back to you within 48 hours!",
        },
        {
          question: "What else can a translator do?",
          answer:
            "Apart from translating your book, I will edit & proof-read it so that you will have a ready-to-publish version of your book in Spanish. Also, I can translate any marketing material connected to the promotion of your translation.",
        },
        {
          question: "What is the translation process like?",
          answer:
            "In the first stage of the translation process, I will carefully read your text. I will write down all potential translation challenges while also becoming acquainted with the tone & voice of your novel. Later, comes the translation itself. In this stage, I might contact you to clarify any ambiguities and to give you follow-ups on the translation. Once the translation is over, I will focus on the proof-reading, during which I will check the translation against the original making sure both texts align and that the translation is accurate and faithful. Finally, I will edit the translation as a new text on its own: here is when I will be checking for spelling, punctuation, grammar, etc. The deadline set by both translator and author, covers this entire process, so your translation will be delivered as scheduled!",
        },
    ];
    
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
                    <img src='https://drive.google.com/uc?export=download&id=1bajxu3ZAFyxYCNZppCd9ge0iSVT5y9pq' alt='Libro1' />
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
            <div className='question-section' style={{padding:'40px 20px'}}>
                {questionsAndAnswers?.map((qa, index) => (
                    <div key={index} className="qa-item">
                        <div className="question" style={{display:'flex', paddingTop:'30px', alignItems: 'center', paddingLeft: '20px', paddingRight: '50px'}} onClick={() => toggleAnswer(index)}>
                            <p style={{ color: '#EFE9E4', marginRight: '10px' }}>{qa.question}</p>
                            <p className={isOpen[index] ? "minus-icon" : "plus-icon"} style={{color:'white', marginTop:'0', marginLeft: 'auto'}}></p>
                        </div>
                    {isOpen[index] && <h4 className="answer" style={{marginTop:'0'}}>{qa.answer}</h4>}
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default BurgeesAndFAQ;