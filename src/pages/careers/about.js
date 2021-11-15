import React from 'react';
import logo from '../../images/careers/logo.png';
import './style.css';

function About() {
    return(
        <div className='about-wrapper'>
            <img src={logo} alt='Transblue Logo' />
            <h2>JOIN OUR TRANSBLUE FAMILY</h2>
            <p className='section-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus est in quam sodales, at imperdiet risus bibendum. Nulla varius, leo sit amet vestibulum ornare, magna lorem eleifend tortor, in tincidunt risus diam id nunc. Suspendisse varius arcu non diam lacinia, sed pharetra mauris dapibus.</p>
            <button className='cta'>APPLY NOW</button>
        </div>
    )
}

export default About;