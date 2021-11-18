import React from 'react';
import './style.css';

function Growing(props) {
    return(
        <div className='growing-bg'>
            <div className='overlay'></div>
            <div className='growing-wrapper'>
                <h1>GROWING TOGETHER</h1>
                <p>We will grow with you as you grow, expanding the business portfolio you handle for us</p>
                <button className='cta ml-0' onClick={props.scrollToApply}>APPLY NOW</button>
            </div>
        </div>
    )
}

export default Growing;