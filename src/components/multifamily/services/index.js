import React from 'react';
import parkinglot from '../../../images/multifamily/parkinglot.jpeg';
import './style.css';

function ServiceList() {
    return(
        <div className='servicelist-wrapper container-fluid'>
            <div className='row'>
                <div className='col-12 col-lg-6'>
                    <img src={parkinglot} alt='' />
                </div>
                <div className='col-12 col-lg-6'>
                    <h4 className='section-header'>WE OFFER A VARIETY OF SERVICES</h4>
                    <p className='asterisk'><span>*</span> Snow and Ice Management</p>
                    <p className='asterisk'><span>*</span> Swimming Pool construction and resurfacing</p>
                    <p className='asterisk'><span>*</span> Asphalt Paving</p>
                    <p className='asterisk'><span>*</span> Large Landscape installs</p>
                    <p className='asterisk'><span>*</span> Roofing</p>
                    <p className='asterisk'><span>*</span> Siding</p>
                    <p className='asterisk'><span>*</span> Painting</p>
                    <p className='asterisk'><span>*</span> Remodels and refreshes</p>
                    <p className='asterisk'><span>*</span> Concrete work</p>
                    <p className='asterisk'><span>*</span> Drainage Systems</p>
                    <p className='asterisk'><span>*</span> Decking, fencing and railing systems. </p>
                    <p className='asterisk'><span>*</span> Electric Vehicle Charging Systems, Solar Power</p>
                    <p className='asterisk'><span>*</span> ESG Service Offerings</p>
                    <p className='section-p'>Give our professionals a call today to discuss your project needs</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceList;