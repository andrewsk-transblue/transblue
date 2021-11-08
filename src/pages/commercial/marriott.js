import React from 'react';
import ContactModal from '../../components/contactModal';
import asphalt from '../../images/commercial/asphalt.jpg';
import './style.css';

function Marriott() {
    return(
        <div className='marriott-wrapper container-fluid'>
            <div className='row'>
                <div className='col-lg-7 col-12'>
                    <img src={asphalt} alt='Marriott Asphalt' />
                </div>
                <div className='col-lg-5 col-12 left-text'>
                    <h4 className='section-header'>THE MARRIOTT PROJECT</h4>
                    <p className='section-p'>Asphalt maintenance is essential in commercial properties. Applying a seal coat overlay to the existing asphalt keeps the parking lot looking fresh and sharp.</p>
                    <p className='section-p'>When working with a worldwide hospitality client such as Marriott, it is crucial to be on time, on budget, and have minimal impact on guests.</p>
                    <p className='section-p'>The service was delivered with World Class efficiency and established Transblue as a reliable partner for Marriott's future needs.</p>
                    <a className='cta' href='/locations'>LOCATIONS</a>
                    <ContactModal />

                    {/* https://www.youtube.com/watch?v=TaMI1-TwOmI */}
                </div>
            </div>
        </div>
    )
}

export default Marriott;