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
                    <p className='section-p'>Hope Unlimited, one of our mBridge partners, provides critical support to both our first responders and the families of Snohomish County that are in crisis. They provide comfort, support and training during crisis events in our county.</p>
                    <p className='section-p'>Hope Unlimited serves 13 different first responder agencies and 1 hospital each of the following counties: Snohomish, Island, and South Skagit Counties. They had 363 calls for service in 2020 – this means that a chaplain was requested by the fire, police or hospital for assistance in a critical incident.</p>
                    <p className='section-p'>They are adding a new resiliency training programs for first responders to help them cope with challenges of their jobs. team members.</p>
                </div>
            </div>
        </div>
    )
}

export default FirstResponders;