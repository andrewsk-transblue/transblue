import React from 'react';
import asphalt from '../../images/multifamily/asphalt.jpg';
import './style.css';

function Marriott() {
    return(
        <div className='marriott-wrapper container-fluid'>
            <div className='row'>
                <div className='col-lg-7 col-12'>
                    <img src={asphalt} alt='Marriott Asphalt' />
                </div>
                <div className='col-lg-5 col-12'>
                    <h4 className='section-header'>THE MARRIOTT PROJECT</h4>
                    <p className='section-p'>Asphalt maintenence is essential in commercial properties. Applying a seal coat overlay to the existing asphalt keeps the parking lot looking fresh and sharp.</p>
                    <p className='section-p'>When working with a worldwide hospitality client such as Marriott, it is crucial to be on time, on budget, and have minimal impact on guests.</p>
                    <p className='section-p pb-4'>The service was delivered with WorldClass efficiency and established Transblue as a reliable partner for Marriott's future needs.</p>
                </div>

            </div>
        </div>
    )
}

export default Marriott;