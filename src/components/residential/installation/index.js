import React from 'react';
import installation from '../../../images/residential/installation.jpeg';
import ContactModal from '../../contactModal';
import './style.css';

function Installation() {
    return(
        <div className='installation-wrapper container-fluid'>
            <div className='row'>
                <div className='col-12 col-lg-6'>
                    <img src={installation} alt='' />
                </div>
                <div className='col-12 col-lg-6 left-text'>
                    <h4 className='section-header'>DESIGN, INSTALLATION, CONSTRUCTION</h4>
                    <p className='section-p'>
                        At Transblue, our team of landscape architects and designers and put your plans on paper to design a beautiful landscape. Our projects are  cost effective and add beautification to your property, no matter the size.
                    </p>
                    <p className='section-p'>
                        Once the cost and plan is approved, our installation and construction team will provide you with a written time line and project schedule. We stay on schedule from conception to completion.
                        {/* We will stay on task and on schedule and complete the installation of your project from conception to completion. */}
                    </p>
                    <a className='cta' href='/locations'>LOCATIONS</a>
                    <ContactModal />
                </div>
            </div>
        </div>
    )
}

export default Installation;