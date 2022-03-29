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
import nextstep4 from '../../images/commercial/nextstep4.png';

import forward from '../../images/residential/forward.png';
import back from '../../images/residential/back.png';


import './commercial.css';
import './style.css';

import ReactGA from 'react-ga';
import Clients from './clients';

const TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function Commercial() {

    useEffect(() => {
        ReactGA.event({
            category: 'User',
            action: 'Visited Commercial Page'
          });
    }, [])

    const [index, setIndex] = useState(0);

    function changeIndex() {
        index === 0
            ? setIndex(1)
            : setIndex(0)
    }

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
                <div className='container-fluid about-wrapper wrapper'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <h1>FAST &amp; RELIABLE <br />COMMERCIAL CONSTRUCTION</h1>
                            {/* <a className='cta' href='/operate'>HOW WE OPERATE</a> */}
                        </div>
                        <div className='col-lg-6'>
                            <p className='section-p'>
                                At Transblue, we are engaged with our customers as we design and build their capital projects. We understand that time, quality, and budget are keys to ensuring a World Class Delivery.
                            </p>
                            <p className='section-p'>
                                When working with Transblue, you can experience a company focused on the customer experience. We strive to provide a World Class experience for both you and your customer. 
                                {/* When fulfilling project deliverables, our primary objective is ensuring your customers don't lose faith in your brand. */}
                            </p>
                        </div>
                    </div>


                </div>

                <div className='deliverables bg-light wrapper'>
                    <div className='container-fluid about-wrapper'>
                        <div className='row mx-0'>
                            <div className='col-12 col-lg-4'>
                                <Card
                                    title='SPEED'
                                    body='At Transblue, we save you time and headache by providing you with fast proposals and fast project execution.'
                                    icon='fa fa-clock-o mb-2'
                                />
                            </div>
                            <div className='col-12 col-lg-4'>
                                <Card 
                                    title='QUALITY WORK'
                                    body="With over 20 years in the commercial construction industry, we are committed and determined to deliver work of the highest quality."
                                    icon='fas fa-building mb-2'
                                />
                            </div>
                            <div className='col-12 col-lg-4'>
                                <Card 
                                    title='COMPETITIVE RATES'
                                    body='amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo'
                                    icon='fa fa-usd mb-2'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='quality-wrapper'>
                    <div className='text centered-text about-wrapper'>
                        <h4>BRAND LOYALTY</h4>
                        <hr className='center-hr'/>
                        {/* <p className='section-p'>Nam sollicitudin massa libero, id euismod massa lobortis eu. Fusce varius diam quis ex gravida, et luctus mauris facilisis. Morbi urna neque, gravida quis pellentesque vitae, aliquam sodales felis.</p> */}
                        <p className='section-p'>Brand loyalty means that your customers are coming back to your business again and again. The real loyal customers put in extra effort to find your establishment or product. If you have a physical location which your customers visit, then we are the best partner to have. Tranbslue understands and values customer loyalty.</p>
                    </div>
                </div>

                <Services />
                {/* <div className='container-fluid about-wrapper'>
                    <div className='row mx-0'>
                        <div className='col-lg-6 order-lg-12'>
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
                </div> */}
                {/* <div className='container-fluid'>
                    <div className='row mb-5 mx-0'>
                        <ServiceCard title='Snow and Ice Removal' body='Snow removal and de-icing services bring safety to your facility, making sure your business is up and running regardless of inclement weather.' />
                        <ServiceCard title='CAPITAL EXPENDITURE' body='We’ll take care of your business exterior—including roofing, landscaping, painting, and brand refreshing, so you can focus on what matters most to you: running your business.' />
                    </div>
                </div> */}
                {/* <Hospitality /> */}
                <div className='brands-wrapper container-fluid'>
                        <div className='row about-wrapper'>
                            <div className='col-12 col-lg-5 my-auto'>
                                <h3>SERVICING TOP BRANDS NATIONWIDE</h3>
                                <hr />

                                <button className='case-studies'>CASE STUDIES</button>
                            </div>
                            <div className='col-lg-7 col-12'>
                                <div className='row'>
                                    <div className='col-2 my-auto'>
                                        <button
                                            onClick={changeIndex}
                                        >
                                            <img src={back} alt='' />
                                        </button>
                                    </div>
                                    
                                        {index === 0 &&
                                            <div className='col-8 text-center'>
                                                <div className='row mt-4'>
                                                    <div className='col-lg-4 col-md-2 col-sm-4 col-4 my-auto brand-img'>
                                                        <img src={enterprise} alt='Enterprise' />
                                                    </div>
                                                    <div className='col-lg-4 col-md-2 col-sm-4 col-4 my-auto brand-img'>
                                                        <img src={albertsons} alt='Albertsons' />
                                                    </div>
                                                    <div className='col-lg-4 col-md-2 col-sm-4 col-4 my-auto brand-img'>
                                                        <img src={cbre} alt='CBRE' />
                                                    </div>
                                                    <div className='col-lg-4 col-md-2 col-sm-4 col-4 my-auto brand-img'>
                                                        <img src={gatorade} alt='costco' />
                                                    </div>
                                                    <div className='col-lg-4 col-md-2 col-sm-4 col-4 my-auto brand-img'>
                                                        <img src={goodwill} alt='walmart' />
                                                    </div>
                                                    <div className='col-lg-4 col-md-2 col-sm-4 col-4 my-auto brand-img'>
                                                        <img src={homestreet} alt='wellsfargo' />
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    
                                    
                                        {index === 1 &&
                                            <div className='col-8 text-center'>
                                                <div className='row mt-4'>
                                                    <div className='col-lg-4 col-md-2 col-sm-4 col-4 my-auto brand-img'>
                                                        <img src={safeway} alt='Safeway' />
                                                    </div>
                                                    <div className='col-lg-4 col-md-2 col-sm-4 col-4 my-auto brand-img'>
                                                        <img src={usps} alt='USPS' />
                                                    </div>
                                                    <div className='col-lg-4 col-md-2 col-sm-4 col-4 my-auto brand-img'>
                                                        <img src={marriott} alt='Marriott' />
                                                    </div>
                                                    <div className='col-lg-4 col-md-2 col-sm-4 col-4 my-auto brand-img'>
                                                        <img src={jll} alt='JLL' />
                                                    </div>
                                                    <div className='col-lg-4 col-md-2 col-sm-4 col-4 my-auto brand-img'>
                                                        <img src={pepsi} alt='Pepsi' />
                                                    </div>
                                                    <div className='col-lg-4 col-md-2 col-sm-4 col-4 my-auto brand-img'>
                                                        <img className='w-40' src={redroof} alt='Red Roof Inn' />
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    
                                    <div className='col-2 my-auto'>
                                        <button
                                            onClick={changeIndex}
                                        >
                                            <img src={forward} alt='' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            </div>
                        <div className='row'>
                            <p>*All company names and logos are trademarks or registered tradmarks of their respective holders. Transblue is not associated with or sponsored by the companies listed above.</p>
                        </div>
                </div>

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