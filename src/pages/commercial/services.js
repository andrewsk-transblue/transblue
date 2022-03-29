import React from 'react';
import snow from '../../images/commercial/snow.jpeg';
import refresh from '../../images/commercial/refresh.jpg';
import roof from '../../images/commercial/roof.jpg';
import asphalt from '../../images/commercial/asphalt2.jpg';
import ContactModal from '../../components/contactModal';

function Services() {
    return(
        <div className='about-wrapper services'>
            <h3 className='section-header'>OUR COMMERCIAL SERVICES</h3>
            <p className='section-p' style={{textAlign: 'center',  width: '90%', maxWidth: '700px', margin: '0 auto'}}>
                ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis
            </p>
            <div className='row mt-5'>
                <div className='col-12 col-md-6 col-lg-3'>
                    <img src={snow} alt='Snow and Ice Removal' />
                    <h5>SNOW &amp; ICE REMOVAL</h5>
                    <p className='section-p'>
                        Snow removal and de-icing services bring safety to your facility, making sure your business is up and running regardless of inclement weather.
                    </p>
                </div>
                <div className='col-12 col-md-6 col-lg-3'>
                    <img src={refresh} alt='Capital Expenditure' />
                    <h5>CAPITAL EXPENDITURE</h5>
                    <p className='section-p'>
                        We’ll take care of your business exterior—including roofing, landscaping, painting, and brand refreshing, so you can focus on what matters most to you: running your business.
                    </p>
                </div>
                <div className='col-12 col-md-6 col-lg-3'>
                    <img src={roof} alt='Roofing and Railing' />
                    <h5>ROOFING &amp; RAILING</h5>
                    <p className='section-p'>
                        We offer comprehensive roofing systems for all types of commercial applications and buildings. Let us take care of the most important part of your establishment.
                    </p>
                </div>
                <div className='col-12 col-md-6 col-lg-3'>
                    <img src={asphalt} alt='Asphalt and Concrete' />
                    <h5>ASPHALT &amp; CONCRETE</h5>
                    <p className='section-p'>
                        Customer experience starts in your parking lot. Professional asphalt services from Transblue enhance this experience, developing loyalty to your brand.
                    </p>
                </div>
                <div style={{margin: '0 auto', marginTop: '40px'}}>
                    <a href='/locations' className='cta'>LOCATIONS</a>
                    <ContactModal />
                </div>
            </div>
        </div>
    )
}

export default Services;