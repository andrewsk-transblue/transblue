import React from 'react';
import solar from '../../images/commercial/solar2.jpg';
import ev from '../../images/commercial/ev2.jpg';
import livingroof from '../../images/commercial/livingroof.jpg';
import './style.css';

function Green(props) {
    return(
        <div className='container-fluid green-solns'>
        <div className='row'>
            <div className='col-lg-12 title'>
                <h4 className='section-header'>LOWER YOUR ENERGY BILL AND ENVIRONMENTAL IMPACT</h4>
                <p className='section-p'>With one of our {props.page} green solutions. For more information and full list of green services, visit our <a href='' target="_blank" rel="noreferer">green solutions website</a></p>
                {/* <h3>LOWER YOUR ENERGY BILL AND ENVIRONMENTAL IMPACT WITH GREEN SOLUTIONS</h3> */}
            </div>
        </div>
        <div className='row'>
        <div className='col-lg-4 col-md-6'>
                <img src={solar} alt='Government Solar Roof' />
                <p className='subtitle'>SOLAR PANELS</p>
                <p className='section-p mb-4'>Reduce overhead and save on utility bills with solar panels</p>
            </div>
            <div className='col-lg-4 col-md-6'>
                <img src={ev} alt='Government EV Charger' />
                <p className='subtitle'>ELECTRIC VEHICLE CHARGERS</p>
                <p className='section-p mb-4'>Increase customer retention and time in your business with EV Chargers</p>
            </div>
            <div className='col-lg-4 col-md-6'>
                <img src={livingroof} alt='Commercial Living Roof' />
                <p className='subtitle'>LIVING ROOFS</p>
                <p className='section-p mb-4'>Diversify marketing and conserve energy with a living roof</p>
            </div>
        </div>
    </div>
    )
}

export default Green;