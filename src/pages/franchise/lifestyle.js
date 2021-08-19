import React from 'react';
import residential from '../../images/franchise/residential2.jpg';
import luxury from '../../images/franchise/luxury.jpg';
import commercial from '../../images/franchise/commercial.jpg';
import './style.css';

function FranchiseLifestyle() {

    return(
        <div className='franchise-lifestyle-wrapper'>
            <div className=' container-fluid'>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-4'>
                        <img src={residential} alt='' />
                        <h6>CREATE THE PERFECT OUTDOOR LIVING SPACE</h6>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4'>
                        <img src={luxury} alt='' />
                        <h6>BEAUTIFY YOUR MULTIFAMILY RESIDENCE</h6>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4'>
                        <img src={commercial} alt='' />
                        <h6>BEAUTIFY YOUR COMMERCIAL BUSINESS</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FranchiseLifestyle;