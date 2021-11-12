import React from 'react';
import turnkey from '../../images/commercial/icons/turnkey.png';
import customers from '../../images/commercial/icons/customers.jpg';
import expert from '../../images/commercial/icons/expert.jpg';
import './style.css';

function Hospitality() {
    return(
        <div className='hospitality-wrapper container-fluid'>
            <h6>NO MATTER THE PROJECT,</h6>
            <h4 className='section-header hospitality-header'>
                YOU CAN COUNT ON TRANSBLUE
            </h4>
            <p className='section-p'>We're a one-stop shop for all your commercial construction needs.</p>

            <div className='row'>
                <div className='col-12 col-md-6 col-lg-4'>
                    <img src={turnkey} alt='' />
                    <h5>FLEXIBLE TURNKEY SOLUTION</h5>
                    <p className='section-p'>Our flexible turnkey solution allows you to focus on managing your business rather than managing contractors</p>
                </div>
                <div className='col-12 col-md-6 col-lg-4'>
                    <img src={customers} alt='' />
                    <h5>CLIENT COLLABORATION</h5>
                    <p className='section-p'>We collaborate with clients to provide industry expertise that parallels the project vision, ensuring the project outcome is methodically designed and brought to completion with a World Class finish</p>
                </div>
                <div className='col-12 col-md-6 col-lg-4'>
                    <img src={expert} alt='' id='expert' />
                    <h5>INDUSTRY EXPERTS</h5>
                    <p className='section-p'>Transblue provides industry experts at each turn of the project to ensure that the delivery is as expected and is exceeded.</p>
                </div>
            </div>
        </div>
    )
}

export default Hospitality;