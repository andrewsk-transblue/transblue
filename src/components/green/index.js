import React from 'react';
import solar from '../../images/government/govtsolarCropped.jpeg';
import ev from '../../images/government/evCropped.jpeg';
import porous from '../../images/multifamily/porous.jpg';
import './style.css';

function Green() {
    return(
        <div className='container-fluid green-solns'>
        <div className='row'>
            <div className='col-lg-12'>
                <h4 className='section-header mb-3'>LOWER YOUR ENERGY BILL AND ENVIRONMENTAL IMPACT</h4>
                <hr />
                {/* <h3>LOWER YOUR ENERGY BILL AND ENVIRONMENTAL IMPACT WITH GREEN SOLUTIONS</h3> */}
            </div>
        </div>
        <div className='row'>
        <div className='col-lg-4 col-md-6'>
                <img src={solar} alt='Government Solar Roof' />
                <p>SOLAR PANELS</p>
                <p className='section-p mb-4'>Decrease your energy bill by installing solar roofs to create your own energy</p>
            </div>
            <div className='col-lg-4 col-md-6'>
                <img src={ev} alt='Government EV Charger' />
                <p>ELECTRIC VEHICLE CHARGERS</p>
                <p className='section-p mb-4'>Provide green solutions for your employees and contribute to creating a greener world</p>
            </div>
            <div className='col-lg-4 col-md-6'>
                <img src={porous} alt='Porous Asphalt' />
                <p>POROUS ASPHALT</p>
                <p className='section-p mb-4'>Provide green solutions for your employees and contribute to creating a greener world</p>
            </div>
        </div>
    </div>
    )
}

export default Green;