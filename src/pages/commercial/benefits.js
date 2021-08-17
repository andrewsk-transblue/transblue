import React from 'react';
import clock from '../../images/commercial/clock.png';
import money from '../../images/commercial/money.png';
import curb from '../../images/commercial/curb.png';
import './style.css';

function Benefits() {
    return(
        <div className='bg-light commercial-benefits container-fluid'>
            <div className='row'>
                <div className='col'>
                    
                </div>
            </div>
            {/* <div className='container'>
                <div className='row  text-center'>
                    <div className='col col-lg-4'>
                        <img src={clock} alt='' />
                        <h4>SAVE TIME &amp; MONEY</h4>
                        <p className='px-3 text-secondary'>Let Transblue maintain your commercial landscape so you can focus on business related tasks</p>
                    </div>
                    <div className='col-lg-4'>
                        <img src={money} alt='' />
                        <h4>INCREASE BUSINESS VALUE</h4>
                        <p className='px-3 text-secondary'>A positive enhancement to your external property translates to an enhanced worth or value of the property</p>
                    </div>
                    <div className='col-lg-4'>
                        <img src={curb} alt='' />
                        <h4>ENHANCE CURB APPEAL</h4>
                        <p className='px-3 text-secondary'>A quality business exterior attracts and retains more customers.</p>
                    </div>
                </div>
                <div className='row'>
                    <a className='cta' href='/locations'>FIND A LOCATION</a>
                </div>
            </div> */}
        </div>
    )
}

export default Benefits;