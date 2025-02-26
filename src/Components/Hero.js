import React , {Components} from 'react';
import './Hero.css';

function Hero (props) {
    return (
        <>
          <div className={props.cName}>
             <img src={props.heroImg} alt='heroImage'/>
             
             <div className='hero-text'>
              <h1>{props.title}</h1>
              <p>{props.text}</p>
              <a href={props.url} className={props.btnClass}>{props.bottonText}</a>
             </div>
          </div>  
        </>
    )
}
export default Hero;