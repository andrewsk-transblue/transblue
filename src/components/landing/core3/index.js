import React from 'react';
import engaged from '../../../images/landing/engaged.jpg';
import './style.css';

function Core3(props) {
    return(
        <div className='container-fluid core3'>
            <div className='row'>
                <div className='col-12 col-lg-6'>
                    <img src={engaged} alt='Be Engaged' />
                </div>
                <div className='col-12 col-lg-6 my-auto'>
                    <h5 className='section-header'>BE ENGAGED</h5>
                    <p className='section-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut eros mauris. Nulla mollis lectus nisi. Sed volutpat eu est et scelerisque. Phasellus pellentesque id velit tristique euismod. Praesent finibus.</p>
                </div>
            </div>
        </div>
    )
}

export default Core3;