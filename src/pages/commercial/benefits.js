import React from 'react';
import clock from '../../images/commercial/clock.png';
import money from '../../images/commercial/money.png';
import curb from '../../images/commercial/curb.png';
import customers from '../../images/commercial/icons/customers.jpg';
import './style.css';

function Benefits() {
    return(
        <div className='commercial-benefits container-fluid'>
            <div className='row'>
                <div className='col-12 col-md-6'>
                    <div className='row'>
                        <div className='col-2 col-lg-2 my-auto text-center pr-0'>
                            <img src={customers} alt='' />
                        </div>
                        <div className='col-10 col-lg-10 my-auto'>
                            <h4 className='section-header'>SAVE TIME &amp; MONEY</h4>
                            <p className='section-p'>
                            Nunc pellentesque malesuada nunc in varius. Phasellus placerat magna at justo semper.
                            </p>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-2 col-lg-2 my-auto text-center pr-0'>
                            <img src={customers} alt='' />
                        </div>
                        <div className='col-10 col-lg-10 my-auto'>
                            <h4 className='section-header'>INCREASE BUSINESS VALUE</h4>
                            <p className='section-p'>
                            Nunc pellentesque malesuada nunc in varius. Phasellus placerat magna at justo semper.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6'>
                    <div className='row'>
                        <div className='col-2 col-lg-2 my-auto text-center pr-0'>
                            <img src={customers} alt='' />
                        </div>
                        <div className='col-10 col-lg-10 my-auto'>
                            <h4 className='section-header'>ENHANCE CURB APPEAL</h4>
                            <p className='section-p'>
                            Nunc pellentesque malesuada nunc in varius. Phasellus placerat magna at justo semper.
                            </p>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-2 col-lg-2 my-auto text-center pr-0'>
                            <img src={customers} alt='' />
                        </div>
                        <div className='col-10 col-lg-10 my-auto'>
                            <h4 className='section-header'>RETAIN CUSTOMERS</h4>
                            <p className='section-p'>
                            Nunc pellentesque malesuada nunc in varius. Phasellus placerat magna at justo semper.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits;