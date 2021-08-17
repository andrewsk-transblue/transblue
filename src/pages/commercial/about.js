import React, {useState, useEffect} from 'react';
import Fade from 'react-reveal/Fade';
import commercial from '../../images/commercial/commercial2.jpeg';
import './style.css';

function About() {
    return(
        <div className='container commercial-about'>
            <div className='row'>
                <div className='col-lg-6 order-lg-12'>
                    <h3 className='section-header mt-3'>BEAUTIFY YOUR BUSINESS</h3>
                    <p className='section-p'>Transblue is here to help. Whether it's installing a patio for your customers to enjoy a morning cup of coffee, installing a pool to keep your tenants cool in the heat of summer, removing snow and ice to ensure your business doors remain open all year round, or anything in between.</p>
                    <p className='section-p pb-4'>Transblue offers snow hauling, paving, and more for commercial clients, letting you put your attention where it belongs: on your customers.</p>
                </div>
                <div className='col-lg-6'>
                   <img src={commercial} alt='' />
                </div>
            </div>
        </div>
    )
}

export default About;