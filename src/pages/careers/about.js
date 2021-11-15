import React from 'react';
import logo from '../../images/careers/logo.png';
import './style.css';

function About(props) {
    return(
        <div className='about-wrapper'>
            <img src={logo} alt='Transblue Logo' />
            <h2>JOIN OUR TRANSBLUE FAMILY</h2>
            <p className='section-p'>Do you want to become part of something bigger than yourself? At Transblue, we believe in  Pellentesque maximus est in quam sodales, at imperdiet risus bibendum. Nulla varius, leo sit amet vestibulum ornare, magna lorem eleifend tortor, in tincidunt risus diam id nunc. Suspendisse varius arcu non diam lacinia, sed pharetra mauris dapibus.</p>
            <p className='section-p'></p>
            <button className='cta' onClick={props.scroll}>APPLY NOW</button>
        </div>
    )
}

export default About;