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
                <div className=' col-md-4 col-lg-4 pl-lg-5'>
                    <div className='row'>
                        <div className='col-3 col-sm-2 col-md-12 col-sm-2 col-lg-12'>
                            <img src={phone} alt='' />
                        </div>
                        <div className='col-9 col-sm-10 col-md-12 col-sm-10 col-lg-12'>
                            <p>Our easy-to-use online vendor portal which will assist you in work order scheduling, invoicing, and prompt payment</p>
                        </div>
                    </div>
                </div>

                <div className='col-md-4 col-lg-4 pl-lg-5'>
                    <div className='row'>
                        <div className='col-3 col-sm-2 col-md-12 col-sm-2 col-lg-12'>
                            <img src={map} alt='' />
                        </div>
                        <div className='col-9 col-sm-10 col-md-12 col-sm-10 col-lg-12'>
                            <p>Accurate site maps and scopes of work so you can succeed at your partnered services</p>
                        </div>
                    </div>
                </div>
                
                <div className=' col-md-4 col-lg-4 pl-lg-5'>
                    <div className='row'>
                        <div className='col-3 col-sm-2 col-md-12 col-sm-2 col-lg-12'>
                            <img src={phone} alt='' />
                        </div>
                        <div className='col-9 col-sm-10 col-md-12 col-sm-10 col-lg-12'>
                            <p>Our easy-to-use online vendor portal which will assist you in work order scheduling, invoicing, and prompt payment</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tools;