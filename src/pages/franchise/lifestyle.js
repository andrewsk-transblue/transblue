import React from 'react';
import ContactModal from '../../components/contactModal';
import residential from '../../images/franchise/residential2.jpg';
import luxury from '../../images/franchise/luxury.jpg';
import commercial from '../../images/franchise/commercial.jpg';
import './style.css';

function FranchiseLifestyle(props) {
    return(
        <div className='franchise-lifestyle-wrapper'>
            <div className=' container-fluid'>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-4'>
                        <img src={residential} alt='' />
                        <h6>CREATE THE PERFECT OUTDOOR LIVING SPACE</h6>
                        {/* <p className='section-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit.</p> */}
                        <ContactModal text='GET STARTED' location={props.location} />
                    </div>
                    <div className='col-12 col-md-6 col-lg-4'>
                        <img src={luxury} alt='' />
                        <h6>BEAUTIFY YOUR MULTIFAMILY RESIDENCE</h6>
                        {/* <p className='section-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit.</p> */}
                        <ContactModal text='GET STARTED' location={props.location} />
                    </div>
                    <div className='col-12 col-md-6 col-lg-4'>
                        <img src={commercial} alt='' />
                        <h6>BEAUTIFY YOUR COMMERCIAL BUSINESS</h6>
                        {/* <p className='section-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit.</p> */}
                        <ContactModal text='GET STARTED' location={props.location} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FranchiseLifestyle;