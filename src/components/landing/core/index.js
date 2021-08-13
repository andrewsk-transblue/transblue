import React from 'react';
import core from '../../../images/landing/core.png';
import './style.css';

function Core() {
    return(
        <div className='core-wrapper container-fluid'>
            <div className='row'>
                <div className='col-lg-5'>
                    <img src={core} alt='Core Values' />
                </div>
                <div className='col-lg-7 my-auto pl-5'>
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