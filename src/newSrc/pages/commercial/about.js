import React from 'react';
import commercial from '../../images/commercial/commercial2.jpg';
import './style.css';

function About() {
    return(
        <div className='container commercial-about'>
            <div className='row'>
                <div className='col-lg-6 order-lg-12 left-text'>
                    <h3 className='section-header mt-3'>BEAUTIFY YOUR BUSINESS</h3>
                    <p className='section-p'> At Transblue, we are engaged with our customers as we design and build their capital projects. We understand that time, quality, and budget are keys to ensuring a World Class Delivery.</p>
                    <p className='section-p'>When working with Transblue, you can experience a company focused on the customer experience. We strive to provide a World Class experience for both you and your customer. When fulfilling project deliverables, our primary objective is ensuring your customers don't lose faith in your brand.</p>
                </div>
                <div className='col-lg-6'>
                   <img src={commercial} alt='Commercial Landscaping' />
                </div>
            </div>
        </div>
    )
}

export default About;