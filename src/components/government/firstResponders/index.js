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
                    <p className='section-p'>First responders are a top priority for us at here at Transblue. We recently resurfaced the asphalt at the Snohomish Fire Department in Washington to support them and show our appreciation for the incredible work they do for the community.</p>
                    <p className='section-p'>Additionally, several other projects over the years have allowed us to donate to Hope Unlimited, a charity that sends a Chaplain with first responders to provide comfort and support to those in crisis situations.</p>
                    {/* <p className='section-p'>Hope Unlimited provides critical support to both our first responders and the families of Snohomish County that are in crisis. They provide comfort, support and training during crisis events in our county.</p>
                    <p className='section-p'>Hope Unlimited serves 13 different first responder agencies and 1 hospital each of the following counties: Snohomish, Island, and South Skagit Counties. They had 363 calls for service in 2020 – this means that a chaplain was requested by the fire, police or hospital for assistance in a critical incident.</p> */}
                    {/* <p className='section-p'>They are adding a new resiliency training programs for first responders to help them cope with challenges of their jobs. team members.</p> */}
                    <a href='/givesback/hope' className='cta'>LEARN MORE</a>

                    {/* https://www.youtube.com/watch?v=ddYhFI8NU3w */}
                </div>
            </div>
        </div>
    )
}

export default FirstResponders;