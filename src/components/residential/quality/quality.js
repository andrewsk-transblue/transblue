import React from 'react';
import quality from '../../../images/residential/quality2.jpeg';
import './style.css';

function Quality() {
    return(
        <div className='container-fluid quality'>
            <div className='row mx-0'>
                <div className='col-lg-6 order-lg-12 left-text'>
                    <h3 className='section-header'>QUALITY TIME MATTERS</h3>

                    <p className='section-p'>
                        What do you do when your project is complete? When your dream project has the final touches laced into position?
                    </p>

                    <span>
                        <div className='inline'>SIT.</div>
                        <div className='inline'>RELAX.</div>
                        <div className='inline'>ENJOY.</div>
                    </span>

                    <p className='section-p'>This is the place you watch your children grow up, the place where you laugh, the place you long to be after a long day at the office.
                    This is your <i>escape</i>, where the world makes sense again, where you recharge. This is Transblue.</p>
                    {/* <p>THIS IS TRANSBLUE.</p>  */}
                    {/* <h6>THIS IS TRANSBLUE.</h6> */}
                </div>
                <div className='col-lg-6'>
                    <img src={quality} alt='Family BBQ' />
                </div>
            </div>
        </div>
    )
}

export default Quality;