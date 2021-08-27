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
                            // description= 'Luxury exterior design is our specialty. From outdoor kitchens to gorgeous, functional retaining walls, we’ll build you the backyard retreat of your dreams. '
                            description='Whether you’re installing a new patio, re-furbishing a swimming pool, building an outdoor kitchen or adding a sun room our expert teams are the best choice for you and your family. Offering over 62 service lines, our turn-key installations are built to make your life easy. Our multi discipline expertise brings all your construction needs under one roof, the Transblue roof. '
                        />
                    </div>
                    <div className='col-lg-4 col-12 col-sm-6 col-md-6'>
                        <ServiceCard
                            image={commercial}
                            service='COMMERCIAL'
                            page='commercial'
                            description='Our teams are focused on making your life simple and reducing the burden that comes with the capital projects required to keep your business looking its best. Our experts offer a full range of services from swimming pool construction, roofing, siding, asphalt, concrete, painting, decking, fencing and interior remodels, to Electrical Vehicles and Solar installs to Snow and Ice management and everything in between. ' 
                        />
                    </div>
                    <div className='col-lg-4 col-12 col-sm-6 col-md-6'>
                        <ServiceCard
                            image={multifamily} 
                            service='MULTIFAMILY'
                            page='multifamily'
                            description='As a property manager, you are extremely busy. Our focus is being your resource. Our expert teams turn proposals around quickly to make your life easier! Our teams attend board meetings and describe projects and services to ensure the delivery to your communities is exactly what it should be, World Class.'
                        />
                    </div>
                    <div className='col-lg-4 col-12 col-sm-6 col-md-6'>
                        <ServiceCard
                            image={snowSmall}
                            service='SNOW'
                            page='snow'
                            description='Transblue, a leader in snow and ice management, understands what your property needs. Its simple consistent on time service with a focus on quality. The World Class Experience we deliver at Transblue will ensure that your clients, employees, and stakeholders don’t lose faith in your brand.'
                        />
                    </div>
                    <div className='col-lg-4 col-12 col-sm-6 col-md-6'>
                        <ServiceCard
                            image={government}
                            service='GOVERNMENT'
                            page='government'
                            description='Transblue General Contractors provides a full range of construction services to Government Facilities, whether it be Federal Government, Military, Municipality, School Districts, Parks and Recreation, etc. Transblue is positioned to deliver on the projects you’re planning to improve your properties. With a track record of success, we understand the scope from paperwork to prevailing wage and construction to completion.' 
                        />
                    </div>
                    <div className='col-lg-4 col-12 col-sm-6 col-md-6'>
                        <ServiceCard 
                            image={evSmall}
                            service='EV'
                            page='ev'
                            description='With a strong focus on making our World a Better Place Transblue’s ESG (environmental, social, and governance) program is World Class. Installing Electric Vehicle Charging Systems, Solar Energy, Xeriscape Initiatives, Water management programs,  Green Roofs, Lighting Projects, etc. Has set Transblue apart in the industry as an environmental leader. For a best in class consultation and install, call Transblue Today.'
                        />
                    </div>
                </div>
            </div>
        )

}

export default Services;