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
                <div className='col-12 col-lg-6 left-text'>
                    <h4 className='section-header'>TRANSBLUE AND FIRST RESPONDERS</h4>
                    <p className='section-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum mauris sit amet est aliquet lobortis. Sed vel convallis mi. Aliquam laoreet nulla at ante sagittis, ut iaculis quam rhoncus. Maecenas elementum commodo dictum. Sed elementum diam ut orci consequat aliquam. Donec tincidunt semper libero at tempus.</p>
                    <p className='section-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum mauris sit amet est aliquet lobortis. Sed vel convallis mi. Aliquam laoreet nulla at ante sagittis, ut iaculis quam rhoncus. Maecenas elementum commodo dictum. Sed elementum diam ut orci consequat aliquam. Donec tincidunt semper libero at tempus.</p>
                </div>
            </div>
        </div>
    )
}

export default FirstResponders;