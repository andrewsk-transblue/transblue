import React from 'react';
import ContactModal from '../../contactModal';
import services from '../../../images/multifamily/services.jpeg';
import './style.css';

function ServiceList() {
    return(
        <div className='servicelist-wrapper container-fluid'>
            <div className='row'>
                <div className='col-12 col-lg-6'>
                    <img src={services} alt='' />
                </div>
                <div className='col-12 col-lg-6 left-text'>
                    <h4 className='section-header'>MULTIFAMILY SERVICES</h4>
                    <p className='asterisk section-p'><span>*</span> Snow and Ice Management</p>
                    <p className='asterisk section-p'><span>*</span> Swimming Pool construction and resurfacing</p>
                    <p className='asterisk section-p'><span>*</span> Asphalt Paving</p>
                    <p className='asterisk section-p'><span>*</span> Large Landscape installs</p>
                    <p className='asterisk section-p'><span>*</span> Roofing</p>
                    <p className='asterisk section-p'><span>*</span> Siding</p>
                    <p className='asterisk section-p'><span>*</span> Painting</p>
                    <p className='asterisk section-p'><span>*</span> Remodels and refreshes</p>
                    <p className='asterisk section-p'><span>*</span> Concrete work</p>
                    <p className='asterisk section-p'><span>*</span> Drainage Systems</p>
                    <p className='asterisk section-p'><span>*</span> Decking, fencing and railing systems. </p>
                    <p className='asterisk section-p'><span>*</span> Electric Vehicle Charging Systems, Solar Power</p>
                    <p className='asterisk section-p'><span>*</span> ESG Service Offerings</p>
                    {/* <p className='section-p'>Give our professionals a call today to discuss your project needs</p> */}
                    <a className='cta' href='/locations'>LOCATIONS</a>
                    <ContactModal />
                </div>
            </div>
        </div>
    )
}

export default ServiceList;