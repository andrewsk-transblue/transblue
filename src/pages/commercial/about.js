import React from 'react';
import commercial from '../../images/commercial/commercial2.jpeg';
import './style.css';

function About() {
    return(
        <div className='container commercial-about'>
            <div className='row'>
                <div className='col-lg-6 order-lg-12 left-text'>
                    <h3 className='section-header mt-3'>BEAUTIFY YOUR BUSINESS</h3>
                    <p className='section-p'>Transblue provides exceptional commercial capital projects. We understand that time, quality and budget are keys to ensuring a World Class Delivery. </p>
                    <p className='section-p'>When working with Transblue, you can experience a company focused on the customer experience. We strive to provide a World Class experience for both you and your customer, ensuring that they don’t lose faith in your brand is a mission critical concentration when fulling the project deliverables.</p>
                    {/* <p className='section-p'>Transblue is here to help. Whether it's installing a patio for your customers to enjoy a morning cup of coffee, installing a pool to keep your tenants cool in the heat of summer, removing snow and ice to ensure your business doors remain open all year round, or anything in between.</p>
                    <p className='section-p pb-4'>Transblue offers snow hauling, paving, and more for commercial clients, letting you put your attention where it belongs: on your customers.</p> */}
                </div>
                <div className='col-lg-6'>
                   <img src={commercial} alt='Commercial Landscaping' />
                </div>
            </div>
        </div>
    )
}

export default About;