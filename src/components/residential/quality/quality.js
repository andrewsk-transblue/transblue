import React from 'react';
import quality from '../../../images/residential/quality2.jpeg';
import './style.css';

function Quality() {
    return(
        <div className='container-fluid quality'>
            <div className='row mx-0'>
                <div className='col-lg-6 order-lg-12 left-text'>
                    {/* <h6 className='text-secondary text-right mr-4'>create the perfect outdoor space</h6> */}
                    <h3 className='section-header'>QUALITY TIME MATTERS</h3>
                    {/* <p className='section-p mt-2'>Friends and family are everything to us here at Transblue. We understand that free time is not always easy to come by, and just how important it is to spend it with the people we love most.</p>
                    <p className='section-p mt-3'>Let us free up some of your time and take one less worry off your mind by creating the perfect outdoor living space for you to enjoy with your loved ones.</p>
                    <p className='section-p mt-3 pb-4'>At the next family BBQ, graduation celebration, anniversary, or birthday party, you can really focus on making the most of the people who matter the most to you. </p> */}

                    <p className='section-p'>
                    What do you do when your project is complete? When your dream project has the final touches laced into position?</p>

                    <span>
                    <div className='inline'>SIT.</div>
                    <div className='inline'>RELAX.</div>
                    <div className='inline'>ENJOY.</div>
                    </span>

                    <p className='section-p'>This is the place you watch your children grow up, the place where you laugh, the place you long to be after a long day at the office.</p>
                    <p className='section-p'>This is your <i>escape</i>, where the world makes sense again, where you recharge.</p>
                    <p className='section-p'>This is Transblue.</p> 
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