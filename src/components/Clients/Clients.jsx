import React, { useEffect, useState } from 'react';
import './Clients.css'

const Clients = () => {

    return (
        <div className="content">
            <div>
                <h2>What my clients say about me</h2>
            </div>
            <div className='grid-four-columns'>
                <div className='cards'>
                    <h2>“</h2>
                    <p>We handed Soledad many different (and challenging) tasks: from reviewing highly technical content, to editing and proofreading blog posts, PDFs and ebooks. She was always at the top of everything, helping us deliver on time for our own customers.!</p>
                    <span style={{padding:'10px 0'}}>SANTIAGO BASULTO,</span>
                    <span >CEO at RMOTR</span>
                </div>
                <div className='cards'>
                    <h2>“</h2>
                    <p>She worked super fast and was very kind and professional.</p>
                    <span style={{padding:'10px 0'}}>MERCEDES PIGRETTI,</span>
                    <span>Creative Director </span>
                    <span>at SYUR DESIGN</span>
                </div>
                <div className='cards'>
                    <h2>“</h2>
                    <p>Maria is amazing to work with as a translator, and I cannot recommend her enough!</p>
                    <span style={{padding:'10px 0'}}>CASSIE COLE,</span>
                    <span>Self-Published Author</span>
                </div>
                <div className='cards'>
                    <h2>“</h2>
                    <p>María was wonderful to work with. She not only provided high quality editing, but also took great initiative with her work. Overall, she was very pleasant to work with. I would definitely recommend her!</p>
                    <span style={{padding:'10px 0'}}>FREE THE SLAVES,</span>
                    <span>NGO</span>
                </div>

            </div>
        </div>
    )
}

export default Clients;