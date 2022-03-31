import React, { Fragment, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/header';
import Navbar from '../../components/navbar';
import ContactCta from '../../components/contactCta';
import Footer from '../../components/footer';
import headerBg from '../../images/commercial/header2.jpg';
import Hospitality from './hospitality';
import Card from './card';
import Services from './services';
import Green from '../../components/green';
import Carousel from './carousel';

import nextstep4 from '../../images/commercial/nextstep4.png';

import forward from '../../images/residential/forward.png';
import back from '../../images/residential/back.png';
import snow from '../../images/commercial/snow.jpeg';


import './commercial.css';
import './style.css';

import ReactGA from 'react-ga';
import Clients from './clients';
import Marriott from './marriott';
import Snow from '../../components/snow';
import Brands from './brands';
import ServiceModal from './modal';

const TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function Commercial() {

    useEffect(() => {
        ReactGA.event({
            category: 'User',
            action: 'Visited Commercial Page'
          });
    }, [])

    return(
        <Fragment>
            <ServiceModal />
                <Helmet>
                    <title>Transblue Commercial Services</title>
                    <meta name="description" content="Transblue is a leading general contractor, spanning on different states. We are a trusted source to design and construct commercial buildings, decks, and landscaping" />
                </Helmet>
                <Navbar page='COMMERCIAL' parentPage='gc' />
                <Header 
                    name='commercial' 
                    img={headerBg}
                    title='COMMERCIAL' />
                <ContactCta />

                <div className='deliverables wrapper'>
                    <div className='container-fluid about-wrapper'>
                        <div className='row mx-0'>
                            <div className='col-12 col-lg-4'>
                                <Card
                                    title='SPEED'
                                    body='At Transblue, we provide you with fast proposals and fast project execution. This  saves you time and effort so you could concentrate on what really matters – like thinking about strategy'
                                    icon='fa fa-clock-o mb-2'
                                />
                            </div>
                            <div className='col-12 col-lg-4'>
                                <Card 
                                    title='QUALITY WORK'
                                    body="At Transblue, you come first. Whether it’s on the local, regional, or national level, we focus on making you happy. Our passion, dedication, and commitment to our customers always results in quality work."
                                    icon='fas fa-building mb-2'
                                />
                            </div>
                            <div className='col-12 col-lg-4'>
                                <Card 
                                    title='COST EFFICIENT'
                                    body='A single point of contact for services, billing, multi-skilled people for a host of critical tasks, and bundling services with Transblue drives efficiency and cost savings.'
                                    icon='fa fa-usd mb-2'
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='about-wrapper'>
                    <Marriott />
                </div>
                
                <div className='quality-wrapper'>
                    <div className='text centered-text about-wrapper'>
                        <h4>BRAND LOYALTY</h4>
                        <hr className='center-hr'/>
                        <p className='section-p'>Brand loyalty means that your customers are coming back to your business again and again. The real loyal customers put in extra effort to find your establishment or product. If you have a physical location which your customers visit, then we are the best partner to have. Tranbslue understands and values customer loyalty.</p>
                    </div>
                </div>

                <div className='about-wrapper'>
                    <Snow
                        video={true}
                        img={snow}
                        title='REDUCE LIABILITY THIS WINTER'
                        p1='Safety is key to our World Class snow and ice programs. At Transblue we don’t consider it snow removal, we consider it risk removal.'
                        p2='Keeping your property plowed and deiced keeps your community safe during the worst winter storms.'
                        p3='We offer comprehensive snow and ice management plans that include plowing, deicing, hauling, snow staging, shoveling, and icicle melting.'
                    />
                </div>

                <Carousel />

                <div className='about-wrapper'>
                    <Green 
                        page='commercial'
                        solar='Reduce overhead and save on utility bills with solar panels'
                        ev='Increase customer retention and customer dwell time with EV Chargers'
                        roof='Diversify marketing and conserve energy with a living roof' />
                </div>

                <Brands />

                <Clients />

                <div className='container-fluid'>
                    <div className='charity-wrapper bg-light'>
                        <div className='wrapper'>
                            <h1>TRANSBLUE GIVES BACK</h1>
                            <div className='nextstep container-fluid'>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <img src={nextstep4} alt='Next Step Pregnancy' />
                                    </div>
                                    <div className='col-lg-6 left-text'>
                                        <h4 className='section-header'>
                                            <p className='text-secondary section-subheader'>TRANSBLUE AND NEXT STEP PREGNANCY CLINIC</p>
                                            SUPPORT FOR EXPECTING MOTHERS
                                        </h4>
                                        <p className='section-p'>It's important to us at Transblue to do things in the community and for the community.</p>
                                        <p className='section-p pb-4'>Next Step Pregnancy clinic an amazing organization that supports pregnant women with limited resources. Without insurance, mothers are provided free diapers, formula, pregnancy tests, ultrasounds, and more. Transblue provided complimentary commercial landscaping for Next Step with the goal of creating an exterior that is as beautiful as the work that they do.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </Fragment>
    )
}

export default Commercial;