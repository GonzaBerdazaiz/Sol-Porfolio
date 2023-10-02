import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { PublicationsInfo } from '../../data';

const PubliCards = () => {
  
    useEffect(() => {
      AOS.init();
    }, []);
  
    return (
      <div className='grid-three-columns'>
        {PublicationsInfo.map((item, index) =>{
            return (
                <div key={item.id}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <img src={item.image} alt='' style={{width:'180px'}} />
                    <p style={{fontSize:'16px', fontWeight:'600', margin:'0'}}>{item.title}</p>
                    <h1 style={{fontSize:'15px', margin:'0', color:'white'}}>{item.author}</h1>
                  </a>
                </div>
            )
        })}
        
        
      </div>
    )
  }
  
  export default PubliCards;