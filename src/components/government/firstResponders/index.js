import React from 'react';
import firstresponder from '../../../images/government/firstresponder.jpg';
import './style.css';


function FirstResponders() {
    return(
        <div className='first-wrapper container-fluid'>
            <div className='row'>
                <div className='col-12 col-lg-6'>
                    <img src={firstresponder} alt='Northwest Incident' />
                </div>
                <div className='col-12 col-lg-6'>
                    
                </div>
            </div>
        </div>
    )
}

export default FirstResponders;