import React from 'react';

import residential from '../../../images/serviceCards/residential.jpeg';

import evSmall from '../../../images/serviceCards/evSmall.jpg';
//import evMed from '../../../images/serviceCards/evMed.jpg';

import snowSmall from '../../../images/serviceCards/snowSmall.jpg';
//import snowMed from '../../../images/serviceCards/snowMed.jpg';

import multifamily from '../../../images/serviceCards/commercial.jpg';
import commercial from '../../../images/serviceCards/commercial.jpeg';
import government from '../../../images/serviceCards/government.jpg';

import './style.css';

import ServiceCard from './serviceCard/index';

function Services() {

        return(
            <div className='container-fluid services-container'>
                <div className='col-lg-12'>
                    {/* <div className='col-lg-2 col-1 col-sm-1 col-md-1'></div> */}
                    {/* <div className='col-lg-2 col-3 col-sm-3 col-md-3 pr-0'>
                        <div className='line left  mr-auto'></div>
                    </div>
                    <h1 className='col-lg-4 col-4 col-sm-4 col-md-4 title px-0 mx-0'>
                        Our Services
                    </h1>
                    <div className='col-lg-2 col-3 col-sm-3 col-md-3 pl-0'>
                        <div className='line'></div>
                    </div>
                    <div className='col-lg-2 col-1 col-sm-1 col-md-1'></div> */}

                    <h3 className='section-header pb-2'>OUR SERVICES</h3>
                    <hr />
                </div>
                <div className='row services-cards'>
                    <div className='col-lg-4 col-12 col-sm-6 col-md-6'>
                        <ServiceCard
                            image={residential}
                            service='RESIDENTIAL'
                            page='residential'
                            description= 'Luxury exterior design is our specialty. From outdoor kitchens to gorgeous, functional retaining walls, we’ll build you the backyard retreat of your dreams. '
                        />
                    </div>
                    <div className='col-lg-4 col-12 col-sm-6 col-md-6'>
                        <ServiceCard
                            image={commercial}
                            service='COMMERCIAL'
                            page='commercial'
                            description='Luxury design isn’t only for the home. We’ll make your asphalt look smooth and brand new. We’ll plow and de-ice your parking lot to ensure the safety and security of your customers and residents. Your business deserves the best exterior care, and we’re proud to provide it.' 
                        />
                    </div>
                    <div className='col-lg-4 col-12 col-sm-6 col-md-6'>
                        <ServiceCard
                            image={multifamily} 
                            service='MULTIFAMILY'
                            page='multifamily'
                            description='If you’re in charge of an HOA or other multifamily residence management organization, you need a repair and beautification service you can rely on. Transblue offers all the multifamily services you need. We’ll repave your parking lot, replace your roofs, install decks, remove snow, and de-ice your parking lot during the winter.'
                        />
                    </div>
                    <div className='col-lg-4 col-12 col-sm-6 col-md-6'>
                        <ServiceCard
                            image={snowSmall}
                            service='SNOW'
                            page='snow'
                            description='At Transblue, we build more than just luxury backyard improvement projects. We transform your backyard into the perfect venue for your next family barbecue. We prepare the canvas for your summer dinner party. We turn your vision for outdoor luxury into reality.'
                        />
                    </div>
                    <div className='col-lg-4 col-12 col-sm-6 col-md-6'>
                        <ServiceCard
                            image={government}
                            service='GOVERNMENT'
                            page='government'
                            description='Luxury design isn’t only for the home. We’ll make your asphalt look smooth and brand new. We’ll plow and de-ice your parking lot to ensure the safety and security of your customers and residents. Your business deserves the best exterior care, and we’re proud to provide it.' 
                        />
                    </div>
                    <div className='col-lg-4 col-12 col-sm-6 col-md-6'>
                        <ServiceCard 
                            image={evSmall}
                            service='EV'
                            page='ev'
                            description='If you’re in charge of an HOA or other multifamily residence management organization, you need a repair and beautification service you can rely on. Transblue offers all the multifamily services you need. We’ll repave your parking lot, replace your roofs, install decks, remove snow, and de-ice your parking lot during the winter.'
                        />
                    </div>
                </div>
            </div>
        )

}

export default Services;