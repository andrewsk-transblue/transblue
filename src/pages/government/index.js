import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/navbar/index';
import Header from '../../components/header';
import Benefits from '../../components/government/benefits';
import Capabilities2 from '../../components/government/capabilities2';
import ThreeCols from '../../components/threeCol';
import Carousel from '../../components/carousel';
import ContactModal from '../../components/contactModal';
import Snow from '../../components/snow';
import ServiceList from '../../components/serviceList';
import ContactCta from '../../components/contactCta';
import Green from '../../components/green';
import Footer from '../../components/footer/index';
import govt from '../../images/government/govtseattle.jpg';
import govtbuilding from '../../images/government/govtbuilding2.jpg';
import asphaltCropped from '../../images/government/govtasphaltCropped.jpg';
import benefits from '../../images/government/benefits.jpeg';
import concreteCropped from '../../images/government/govtconcreteCropped.jpeg';
import snow from '../../images/government/govtsnow.jpg';
import fence from '../../images/government/govtfence.jpeg';
import ev from '../../images/government/evCropped.jpeg';
import './style.css';


class Government extends Component {

    render() {
        return(
            <Fragment>
                <Helmet>
                    <title>Transblue Government</title>
                    <meta name="description" content="Transblue Government Services" />
                </Helmet>
                <Navbar page='GOVERNMENT' parentPage='gc' />
                <Header img={govt} title='GOVERNMENT' subtitle='' name='government' />
                <ContactCta />
                <div className='government-body'>
                    <div className='container-fluid government-about'>
                        <div className='row'>
                            <div className='col-lg-6 order-lg-12'>
                                <img src={govtbuilding} alt='Government Building' />
                            </div>
                            <div className='col-lg-6 order-lg-12 left-text'>
                                <h4 className='section-header'>KEEP YOUR SERVICES RUNNING SMOOTHLY</h4>
                                <p className='section-p'>Transblue is strongly positioned to deliver World Class services to any local or federal government building. We understand the RFP process and the requirements necessary to participate in your initiatives.</p>
                                <p className='section-p'>After all requirements are met, we guarantee we will deliver the services the your team expects. From conception to close out, Transblue is the right fit for your property.</p>
                                <a className='cta' href='/locations'>FIND A LOCATION</a>
                            </div>
                        </div>
                    </div>
                    <Benefits 
                        img={benefits}
                        list={[
                            'We understand the government bidding process',
                            'We understand Scope of Work Requirements',
                            'Minority Owned business in specific markets',
                            'Top notch communication',
                            'We understand Wage Requirements',
                            'High level of project reporting',
                            'Onsite management',
                            'Superior safety program with track record of 0 injuries'
                        ]}
                    />
                    {/* <Capabilities2 /> */}
                    <ThreeCols 
                        title='REFRESH YOUR GOVERNMENT BUILDING'
                        subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at sapien non arcu pharetra volutpat.'
                        card1={{
                            img: concreteCropped,
                            title: 'CONCRETE INSTALLATION',
                            body: 'Nullam commodo tristique enim, a congue leo fermentum eu. Vivamus ut diam end'
                        }}
                        card2={{
                            img: asphaltCropped,
                            title: 'ASPHALT REFRESHMENT',
                            body: 'Nullam commodo tristique enim, a congue leo fermentum eu. Vivamus ut diam enim.'
                        }}
                        card3={{
                            img: concreteCropped,
                            title: 'FRESH NEW PAINT',
                            body: 'Nullam commodo tristique enim, a congue leo fermentum eu. Vivamus ut diam enim.'
                        }}
                    />
                    {/* <Green page='government' /> */}
                    <div className='new-green-solns container-fluid'>
                        <div className='row'>
                            <div className='col-12 col-lg-6'>
                                <img src={ev} alt='Government Green Solutions' />
                            </div>
                            <div className='col-12 col-lg-6 left-text'>
                                <h4 className='section-header'>LOWER YOUR ENERGY BILL AND ENVIRONMENTAL IMPACT</h4>
                                <p className='section-p'>
                                    Transblue installs EV charging systems in government properties. With the ever rising need for EV charging stations. Transblue provides the electrical engineering, trenching, electrical upgrades, concrete work, asphalt work, permitting, etc. Required to install Electric Charging Stations for your communities. 
                                </p>
                                <p className='section-p'>
                                    For more information or a full list of Transblue Green Services, visit our Green Solutions website or send us a message.
                                    
                                </p>
                                <a className='cta' href=''>GREEN SOLUTIONS</a>
                                <ContactModal />
                            </div>
                        </div>
                    </div>
                    <Snow
                        img={snow}
                        title='GOVERNMENT SNOW SERVICES'
                        p1='At Transblue, we provide comprehensive snow and ice management plans for government properties. This includes plowing, deicing, hauling, snow staging, shoveling, and icicle melting.'
                        p2='Keeping city officials, staff and community members safe is always our goal.'
                        // p2='Keeping city officials, staff and community members safe is always our goal. We map out each location to ensure our snow service does not impede city, county or federal business.'
                        p3='Send us a message today or visit our snow website to learn about the World Class Snow services we offer, and how Transblue can help you this winter.'
                    />
                    <ServiceList
                        img={fence}
                        title='ONE STOP SHOP'
                        // subtitle='At Transblue, we offer a variety of services to meet you exact needs. Give us a call today or send us a message to learn about what we can do for your government building.'
                        services={['Snow and Ice Management',
                            'Swimming Pool construction and resurfacing',
                            'Asphalt Paving',
                            'Large Landscape installs',
                            'Roofing',
                            'Siding',
                            'Painting',
                            'Remodels and refreshes',
                            'Concrete work',
                            'Drainage Systems',
                            'Decking, fencing, and railing systems',
                            'Electric Vehicle Charging Systems, Solar Power',
                            'ESG Service Offerings'	
                        ]}
                    />
                    {/* <Carousel /> */}
                    {/* <ServiceSlides /> */}
                </div>
                {/* <Capabilities /> */}
                <Footer />
            </Fragment>
        )
    }
}

export default Government;