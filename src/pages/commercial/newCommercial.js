import React, { Fragment, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/header';
import Navbar from '../../components/navbar';
import ContactCta from '../../components/contactCta';
import Footer from '../../components/footer';
import headerBg from '../../images/commercial/header2.jpg';

import enterprise from './logos/enterprise.jpg';
import albertsons from './logos/albertsons.png';
import cbre from './logos/cbre.webp';
import gatorade from './logos/gatorade.png';
import goodwill from './logos/goodwill.png';
import homestreet from './logos/homestreet.png';
import safeway from './logos/Untitled.png';
import marriott from './logos/marriott.png';
import usps from './logos/usps.webp';
import jll from './logos/jll.png';
import pepsi from './logos/pepsi.png';
import redroof from './logos/redroof.png';

import './commercial.css';


import ReactGA from 'react-ga';
const TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function Commercial() {

    useEffect(() => {
        ReactGA.event({
            category: 'User',
            action: 'Visited Snow Landing Page'
          });
    }, [])
    return(
        <Fragment>
                <Helmet>
                    <title>Transblue Commercial Services</title>
                    <meta name="description" content="Transblue is a leading general contractor, spanning on different states. We are a trusted source to design and construct commercial buildings, decks, and landscaping" />
                </Helmet>
                <Navbar page='COMMERCIAL' parentPage='gc' />
                <Header 
                    name='commercial' 
                    img={headerBg}
                    title='COMMERCIAL' 
                    subtitle='Your Business Construction Solution' />
                <ContactCta />
                <div className='container-fluid about-wrapper'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <h1>FAST &amp; RELIABLE <br />COMMERCIAL SERVICES</h1>
                            {/* <a className='cta' href='/operate'>HOW WE OPERATE</a> */}
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

                    <div className='row mt-5'>
                        <div className='col-lg-6 order-lg-12'>
                            {/* <img src={starbucks} alt='Starbucks Snow Plowing' /> */}
                        </div>
                        <div className='col-lg-6 order-lg-12'>
                            <h4 className='section-header'>NATIONWIDE SERVICES, LOCAL EXPERTISE</h4>
                            <p className='section-p'>Transblue is focused on building real business solutions with real time 
                                results. Our clients are able to focus on meeting strategic business 
                                objectives, while maximizing internal resources and efficiencies.</p>
                            <p className='section-p pb-4'> Using our unique consultative 
                                approach and latest technologies, Transblue works with clients to 
                                develop snow removal plans that include operational and financial 
                                efficiencies. We present on demand plowing services as an investment, 
                                rather than an expense, to help design a more effective approach to 
                                risk management and service execution.</p>
                        </div>
                    </div>


                </div>
                <div className='brands-wrapper container-fluid'>
                        <h3>SERVICING TOP BRANDS NATIONWIDE</h3>
                        <hr />
                        <div className='row mt-4'>
                            <div className='col-lg-2 col-md-2 col-sm-4 col-4 my-auto brand-img'>
                                <img src={enterprise} alt='Enterprise' />
                            </div>
                            <div className='col-lg-2 col-md-2 col-sm-4 col-4 my-auto brand-img'>
                                <img src={albertsons} alt='Albertsons' />
                            </div>
                            <div className='col-lg-2 col-md-2 col-sm-4 col-4 my-auto brand-img'>
                                <img src={cbre} alt='CBRE' />
                            </div>
                            <div className='col-lg-2 col-md-2 col-sm-4 col-4 my-auto brand-img'>
                                <img src={gatorade} alt='costco' />
                            </div>
                            <div className='col-lg-2 col-md-2 col-sm-4 col-4 my-auto brand-img'>
                                <img src={goodwill} alt='walmart' />
                            </div>
                            <div className='col-lg-2 col-md-2 col-sm-4 col-4 my-auto brand-img'>
                                <img src={homestreet} alt='wellsfargo' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-2 col-md-2 col-sm-4 col-4 my-auto brand-img'>
                                <img src={safeway} alt='Safeway' />
                            </div>
                            <div className='col-lg-2 col-md-2 col-sm-4 col-4 my-auto brand-img'>
                                <img src={usps} alt='USPS' />
                            </div>
                            <div className='col-lg-2 col-md-2 col-sm-4 col-4 my-auto brand-img'>
                                <img src={marriott} alt='Marriott' />
                            </div>
                            <div className='col-lg-2 col-md-2 col-sm-4 col-4 my-auto brand-img'>
                                <img src={jll} alt='JLL' />
                            </div>
                            <div className='col-lg-2 col-md-2 col-sm-4 col-4 my-auto brand-img'>
                                <img src={pepsi} alt='Pepsi' />
                            </div>
                            <div className='col-lg-2 col-md-2 col-sm-4 col-4 my-auto brand-img'>
                                <img src={redroof} alt='Red Roof Inn' />
                            </div>
                        </div>
                        <div className='row'>
                            <p>*All company names and logos are trademarks or registered tradmarks of their respective holders. Transblue is not associated with or sponsored by the companies listed above.</p>
                        </div>
                    </div>
            <Footer />
        </Fragment>
    )
}

export default Commercial;