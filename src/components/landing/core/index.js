import React from 'react';
import core from '../../../images/landing/core.png';
import './style.css';

function Core() {
    return(
        <div className='core-wrapper container-fluid d-none d-lg-block'>
            <div className='row'>
                <div className='col-12 col-md-6 col-lg-6 text-center my-auto'>
                    <img src={core} alt='Core Values' />
                </div>
                <div className='col-12 col-md-6 col-lg-6 my-auto pl-5'>
                    <h4 className='section-header'>HAVE GRIT</h4>
                    <p className='section-p'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque malesuada nunc in varius. Phasellus placerat magna at justo semper.
                    </p>
                    <h4 className='section-header'>BE ENGAGED</h4>
                    <p className='section-p'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque malesuada nunc in varius. Phasellus placerat magna at justo semper.
                    </p>
                    <h4 className='section-header'>SEE IT THROUGH</h4>
                    <p className='section-p'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque malesuada nunc in varius. Phasellus placerat magna at justo semper.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Core;