import React from 'react';
import residential from '../../../images/serviceCards/residential.jpeg';
import ev from '../../../images/serviceCards/evSmall.jpg';
import snowSmall from '../../../images/serviceCards/snowSmall.jpg';
import multifamily from '../../../images/serviceCards/commercial.jpg';
import commercial from '../../../images/serviceCards/commercial.jpeg';
import government from '../../../images/serviceCards/government.jpg';
import asphalt from '../../../images/serviceCards/asphalt.jpg';

import './style.css';

import ServiceCard from './serviceCard/index';

function Services(props) {

    console.log(props.noSnow)

        return(
            <div className='container-fluid services-container'>
                <h3 className='section-header'>WHO ARE OUR CLIENTS?</h3>
                <div className='row services-cards'>
                    <div className='col-lg-4 col-12 col-sm-6 col-md-6'>
                        <ServiceCard
                            image={residential}
                            service='RESIDENTIAL'
                            page='residential'
                            link='/residential'
                            // description= 'Luxury exterior design is our specialty. From outdoor kitchens to gorgeous, functional retaining walls, we’ll build you the backyard retreat of your dreams. '
                            description='Whether you’re installing a new patio, refurbishing a swimming pool, building an outdoor kitchen, or adding a sun room, our expert teams are the best choice for you and your family. Offering over 62 service lines, our turn-key installations are built to make your life easy. Our multi discipline expertise brings all your construction needs under one roof, the Transblue roof.'
                        />
                    </div>
                    <div className='col-lg-4 col-12 col-sm-6 col-md-6'>
                        <ServiceCard
                            image={commercial}
                            service='COMMERCIAL'
                            page='commercial'
                            link='/residential'
                            description='Our teams are focused on making your life simple and reducing the burden that comes with the capital projects required to keep your business looking its best. Our experts offer a full range of services from roofing, siding, asphalt, concrete, decking, fencing, to EV chargers and Solar installs, to Snow &amp; Ice management and everything in between.'
                        />
                    </div>
                    <div className='col-lg-4 col-12 col-sm-6 col-md-6'>
                        <ServiceCard
                            image={multifamily} 
                            service='MULTIFAMILY'
                            page='multifamily'
                            link='/multifamily'
                            description='As a property manager, you are extremely busy. Our focus is being your resource. Our expert teams turn proposals around quickly to make your life easier! Our teams attend board meetings and describe projects and services to ensure the delivery to your communities is exactly what it should be, World Class.'
                        />
                    </div>
                    {!props.noSnow && <div className='col-lg-4 col-12 col-sm-6 col-md-6'>
                        <ServiceCard
                            image={snowSmall}
                            service='SNOW'
                            page='snow'
                            link='http://snow.transblue.com/'
                            description="Transblue, a leader in snow and ice management, understands what your property needs. It's simple, consistent, on time service with a focus on quality. The World Class Experience we deliver at Transblue will ensure that your clients, employees, and stakeholders don’t lose faith in your brand."
                        />
                    </div>}
                    {props.noSnow && <div className='col-lg-4 col-12 col-sm-6 col-md-6'>
                        <ServiceCard
                            image={asphalt}
                            service='ASPHALT'
                            page='commercial'
                            link='/commercial'
                            description="Transblue, a leader in snow and ice management, understands what your property needs. It's simple, consistent, on time service with a focus on quality. The World Class Experience we deliver at Transblue will ensure that your clients, employees, and stakeholders don’t lose faith in your brand."
                        />
                    </div>}
                    <div className='col-lg-4 col-12 col-sm-6 col-md-6'>
                        <ServiceCard
                            image={government}
                            service='GOVERNMENT'
                            page='government'
                            link='/government'
                            description='Transblue provides a full range of construction services to Government Facilities, including Federal Government, Military, Municipality, School Districts, etc. With a track record of success, we understand the scope from paperwork to prevailing wage and construction to completion.'
                        />
                    </div>
                    <div className='col-lg-4 col-12 col-sm-6 col-md-6'>
                        <ServiceCard 
                            image={ev}
                            service='EV'
                            page='ev'
                            link='http://green.transblue.com/'
                            description='At Transblue, we focus on making our world a better place with our World Class ESG (environmental, social, and governance) Program. Our experience in the industry has set Transblue apart as an environmental leader. For a best in class consultation and install, call Transblue Today.'
                        />
                    </div>
                </div>
            </div>
        )

}

export default Services;