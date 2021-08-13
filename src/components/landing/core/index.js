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
            </div>
        </div>
    )
}

export default Core;