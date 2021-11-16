import React from 'react';
import map from '../../images/subcontractor/map100.png';
import phone from '../../images/subcontractor/phone.png';
import './style.css';

function Tools() {
    return(
        <div className='tools-bg'>
            <h6>WE PROVIDE YOU WITH THE</h6>
            <h1>TOOLS TO SUCCEED</h1>
            <div className='tools-wrapper row'>
                <div className='col-lg-4 px-5'>
                    <img src={phone} alt='' />
                    <p>Our easy-to-use online vendor portal which will assist you in work order scheduling, invoicing, and prompt payment</p>
                </div>
                <div className='col-lg-4 px-5'>
                    <img src={map} alt='' />
                    <p>Accurate site maps and scopes of work so you can succeed at your partnered services</p>
                </div>
                <div className='col-lg-4 px-5'>
                    <img src={phone} alt='' />
                    <p>Our easy-to-use online vendor portal which will assist you in work order scheduling, invoicing, and prompt payment</p>
                </div>
            </div>
        </div>
    )
}

export default Tools;