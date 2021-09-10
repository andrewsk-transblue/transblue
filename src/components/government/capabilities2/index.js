import React from 'react';
import capabilities from '../../../images/government/capabilities.png';
import capabilities2 from '../../../images/government/capabilities2.png';
import './style.css';

function Capabilities2() {
    return(
        <div className='capabilities-wrapper container-fluid'>
            <div className='row'>
                <div className='col-lg-6 px-0 page-1'>
                    <img src={capabilities} className='capabilities-1' alt='Government Capabilities Statement' />
                </div>
                <div className='col-lg-6 px-0 page-2'>
                    <img src={capabilities2} className='capabilities-2' alt='Government Capabilities Statement' />
                </div>
            </div>
        </div>
    )
}

export default Capabilities2;