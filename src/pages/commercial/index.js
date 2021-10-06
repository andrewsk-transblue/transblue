import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/navbar/index';
import Header from '../../components/header';
import ContactCta from '../../components/contactCta';
import About from './about';
import Slideshow from '../../components/slideshow';
//import ServiceSlides from '../../components/commercial/serviceSlides/index';
//import Benefits from './benefits';
import Impression from './impression';
import Marriott from './marriott';
import Hospitality from './hospitality';
// import Green from './green';
import Green from '../../components/green';
import Snow from '../../components/snow';
import Carousel from '../../components/carousel';
import Footer from '../../components/footer/index';
// import Refresh from './refresh';
import Fade from 'react-reveal/Fade';
import headerBg from '../../images/commercial/header2.jpg';
import simple from '../../images/commercial/simple3.jpg';
import nextstep4 from '../../images/commercial/nextstep4.png';
import snow from '../../images/commercial/snow.jpeg';
import slidesnow from '../../images/commercial/snow.jpg';
import snowSmall from '../../images/commercial/snowSmall.jpg';
import asphalt from '../../images/commercial/asphalt4.jpg';
import asphaltSmall from '../../images/commercial/asphalt4Small.jpg';
import fence from '../../images/commercial/fence.jpg';
import fenceSmall from '../../images/commercial/fenceSmall.jpg';
import solar from '../../images/commercial/solar.jpg';
import solarSmall from '../../images/commercial/solarSmall.jpg';
import './style.css';


class Commercial extends Component {
    render() {
        return(
            <Fragment>
                <Helmet>
                    <title>Transblue Commercial</title>
                    <meta name="description" content="Transblue Commercial Services" />
                </Helmet>
                <Navbar page='COMMERCIAL' parentPage='gc' />
                <Header name='commercial' img={headerBg} title='COMMERCIAL' subtitle='Your Business Landscaping Solution' />
                <ContactCta />
                <div className='commercial-body'>
                <div className='wrapper'>
                    <About />
                </div>
                <Impression />
                <Slideshow 
                    images={[slidesnow, asphalt, fence, solar]}
                    smallImages={[snowSmall, asphaltSmall, fenceSmall, solarSmall]}
                    text={[
                        {
                            p1: "KEEP YOUR BUSINESS DOORS OPEN",
                            p2: ''
                        },
                        {
                            p1: 'REFRESH YOUR ASPHALT AND CONCRETE',
                            p2: ''
                        },
                        {
                            p1: 'INCREASE SECURITY AND PRIVACY',
                            p2: ''
                        },
                        {
                            p1: 'LOWER YOUR ENERGY BILL',
                            p2: ''
                        }
                    ]} />
                <div className='wrapper'>
                    <Marriott />
                    <Hospitality />
                </div>
                {/* <Benefits /> */}
                <div className='simple-process'>
                    <img src={simple} alt='Commercial Landscaping' />
                    <div className='overlay'></div>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-lg-8 my-auto pr-0'>
                                <h1 className='w-100'>Running a business is hard.</h1>
                                <h3 className='mb-3'><i>Designing your landscape shouldn't be.</i></h3>
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
                </div>
                <div className='wrapper'>
                    <Green 
                    page='commercial'
                    solar='Reduce overhead and save on utility bills with solar panels'
                    ev='Increase customer retention and customer dwell time with EV Chargers'
                    roof='Diversify marketing and conserve energy with a living roof' />
                    
                    {/* <Asphalt /> */}
                    <Snow
                        img={snow}
                        title='KEEP CUSTOMERS &amp; EMPLOYEES SAFE'
                        p1='Transblue specializes in providing commercial snow removal services to multisite commercial, retail, industrial, and government facilities.'
                        p2='Our comprehensive snow removal management plans will help with costing on budgets and costs control initiatives, project planning and management, and environmental impacts that that face your brands image every day. '
                        // p3='Nam elementum turpis id ipsum fermentum dapibus. In mollis venenatis purus, vitae iaculis ex hendrerit sed. Nunc congue nibh ut ipsum blandit, quis auctor neque tincidunt.'
                    />
                    
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
                                    HELPING PREGNANT WOMEN IN NEED
                                </h4>
                                <p className='section-p'>It's important to us at Transblue to do things in the community and for the community.</p>
                                <p className='section-p pb-4'>Next Step Pregnancy clinic an amazing organization that supports pregnant women with limited resources. Without insurance, women are provided free diapers, formula, pregnancy tests, ultrasounds, and more. Transblue provided complimentary commercial landscaping for Next Step with the goal of creating an exterior that is as beautiful as the work that they do.</p>
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