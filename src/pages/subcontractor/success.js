import React from 'react';
import leftarrow from '../../images/residential/leftarrow.png';
import success from '../../images/success.png';
import './success.css';

function Success() {
    return(
        <div className='success-wrapper'>
            <img className='success' src={success} alt='' /><br />
            <h3>THANK YOU!</h3>
            <p>Your application has successfully been submitted.</p>            
            <a href='/'><img className='arrow' src={leftarrow} alt='Back to website'></img> TRANSBLUE WEBSITE</a>
        </div>
    )
}

export default Success;