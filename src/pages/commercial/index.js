import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/navbar/index';
import Header from '../../components/header';
import ContactCta from '../../components/contactCta';
import About from './about';
import Slideshow from '../../components/slideshow';
import Impression from './impression';
import Marriott from './marriott';
import Hospitality from './hospitality';
import Green from '../../components/green';
import Snow from '../../components/snow';
import Footer from '../../components/footer/index';
import headerBg from '../../images/commercial/header2.jpg';
import nextstep4 from '../../images/commercial/nextstep4.png';
import snow from '../../images/commercial/snow.jpeg';
import ContactModal from '../../components/contactModal';
import ThreeCols from '../../components/threeCol';
import ServiceList from '../../components/serviceList';

import roof from '../../images/commercial/roof.jpg';
import asphalt from '../../images/commercial/asphalt2.jpg';
import refresh from '../../images/commercial/refresh.jpg';
import asphalt3 from '../../images/commercial/asphalt3.jpg';
import commercial2 from '../../images/commercial/commercial2.jpg';


import './style.css';
import '../multifamily/style.css';

import ReactGA from 'react-ga';
const TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

class Commercial extends Component {

    componentDidMount() {
        ReactGA.event({
            category: 'User',
            action: `Visited Commercial Page`
        });
    }

    render() {
        return(
            <Fragment>
                <Helmet>
                    <title>Transblue Commercial</title>
                    <meta name="description" content="Transblue is a leading general contractor, spanning on different states. They are a trusted source to design and construct commercial buildings, decks, and landscaping" />
                </Helmet>
                <Navbar page='COMMERCIAL' parentPage='gc' />
                <Header 
                    name='commercial' 
                    img={headerBg}
                    title='COMMERCIAL' 
                    subtitle='Your Business Construction Solution' />
                <ContactCta />
                <div className='multifamily-body'>
                    <div className='wrapper'>
                        <div className='container-fluid multifamily-about'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <h1>BEAUTIFY YOUR<br /> COMMERCIAL PROPERTY</h1>
                                    <a href='/locations'>FIND YOUR LOCAL TRANSBLUE</a>
                                </div>
                                <div className='col-lg-6'>
                                    <p className='section-p'>
                                        At Transblue, we are engaged with our customers as we design and build their capital projects. We understand that time, quality, and budget are keys to ensuring a World Class Delivery.
                                    </p>
                                    <p className='section-p'>
                                        When working with Transblue, you can experience a company focused on the customer experience. We strive to provide a World Class experience for both you and your customer. When fulfilling project deliverables, our primary objective is ensuring your customers don't lose faith in your brand.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='container-fluid benefits'>
                            <div className='row'>
                                <div className='col-lg-6 order-lg-12'>
                                <img className='pt-4' style={{width: '100%'}} src={commercial2} alt='Luxury Apartment' />
                                </div>
                                <div className='col-lg-6 right-text'>
                                    <h4 className='section-header'>TAKE YOUR BUSINESS <br />TO THE NEXT LEVEL</h4>
                                    <p className='section-p'>We’ll take care of your business exterior so you can focus on what matters most to you: running your business.</p>
                                    <ul className='section-p'>
                                        <li className='py-1'>Enhance your curb appeal</li>
                                        <li className='py-1'>Increase your business's value</li>
                                        <li className='py-1'>Attract and retain more customers</li>
                                        <li className='py-1'>Save time and money</li>
                                        {/* <li className='py-1'>A thorough consultation</li>
                                        <li className='py-1'>Transparent quote with no hidden fees</li>
                                        <li className='py-1'>Communication from start to finish</li>
                                        <li className='py-1'>100% commitment to your satisfaction</li> */}
                                    </ul>
                                    <a className='cta' href='/locations'>LOCATIONS</a><ContactModal />
                                </div>
                            </div>
                        </div>
                        <Hospitality />
                        <ThreeCols
                            title='REFRESH YOUR COMMERCIAL BRAND'
                            subtitle='Refreshed buildings keep property values high. Transblue is 100% committed to delivering World Class services that enhance the beauty of each and every space.'
                            card1={{
                                img: roof,
                                title: 'RETHINK YOUR ROOF',
                                body: 'At Transblue we provide commercial roofing services, including stripping your old roofing system, making structural repairs as required, and re-roofing with roofing material chosen by you. We install metals, asphalt shingles, green roofs, tiles, torch down, and systems such as flat PVC and TPO.'
                            }}
                            card2={{
                                img: asphalt,
                                title: 'ASPHALT SERVICES',
                                body: "We will assess your property's current condition and provide a quote to patch, pave, restore, mill, sealcoat or stripe your existing parking lot areas. We offer full-service paving for new construction. We also offer overlaying services for parking lots with excessive damaged asphalt."
                            }}
                            card3={{
                                img: refresh,
                                title: 'BRAND REFRESHES',
                                body: 'Is your brand looking tired and in need of a face lift? Transblue can transform the exterior with a new design, façade, construction and paint! Ready for the inside as well? We offer new carpet, tiles, paint, and complete overhauls.'
                            }}
                        />
                    </div>

                    <div className='wrapper'>
                        <Snow
                            img={snow}
                            title='KEEP YOUR CUSTOMERS SAFE THIS WINTER'
                            p1='Safety is key to our World Class snow and ice programs. At Transblue we don’t consider it snow removal, we consider it risk removal.'
                            p2='Keeping your property plowed and deiced keeps your community safe during the worst winter storms.'
                            p3='We offer comprehensive snow and ice management plans that include plowing, deicing, hauling, snow staging, shoveling, and icicle melting.'
                        />
                        <Green 
                            page='commercial'
                            solar='Reduce overhead and save on utility bills with solar panels'
                            ev='Increase customer retention and customer dwell time with EV Chargers'
                            roof='Diversify marketing and conserve energy with a living roof' />
                        <ServiceList
                            title='ALL TRANSBLUE COMMERCIAL SERVICES'
                            img={asphalt3}
                            services={[
                                'Snow and Ice Management',
                                'Swimming Pool construction and resurfacing',
                                'Asphalt Paving',
                                'Large Landscape installs',
                                'Roofing',
                                'Siding',
                                'Painting',
                                'Remodels and refreshes',
                                'Concrete work',
                                'Drainage Systems',
                                'Decking, fencing and railing systems',
                                'Electric Vehicle Charging Systems, Solar Power',
                                'ESG Service Offerings'
                        ]} />
                
                    </div>

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
}

export default Commercial;


 {/* <div className='wrapper'>
                    <About />
                </div> */}
                {/* <div className='wrapper'>
                    <Marriott />
                    <Hospitality />
                </div> */}
                {/* <div className='simple-process'>
                    <img src={simple} alt='Commercial Landscaping' />
                    <div className='overlay'></div>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-lg-8 my-auto pr-0'>
                                <h1 className='w-100'>Running a business is hard.</h1>
                                <h3 className='mb-3'><i>Handling construction management shouldn't be.</i></h3>
                                <h6>Our professionals simplify the process with:</h6>
                                <Fade right cascade>
                                    <ul>
                                        <li className='py-1'>A thorough consultation</li>
                                        <li className='py-1'>Transparent quote with no hidden fees</li>
                                        <li className='py-1'>Communication from start to finish</li>
                                        <li className='py-1'>100% commitment to your satisfaction</li>
                                    </ul>
                                </Fade>
                            </div>
                            <div className='col-lg-4 pt-3'></div>
                        </div>
                    </div>
                </div> */}
                {/* <div className='wrapper'>
                    <Green 
                    page='commercial'
                    solar='Reduce overhead and save on utility bills with solar panels'
                    ev='Increase customer retention and customer dwell time with EV Chargers'
                    roof='Diversify marketing and conserve energy with a living roof' />
                    <Snow
                        img={snow}
                        title='KEEP CUSTOMERS &amp; EMPLOYEES SAFE'
                        p1='Transblue specializes in providing commercial snow removal services to multisite commercial, retail, industrial, and government facilities.'
                        p2="Our comprehensive snow removal management plans will help with staying on budget and cost control initiatives, project planning and management, and environmental impacts that that face your brands image every day."
                    />
                    
                </div> */}