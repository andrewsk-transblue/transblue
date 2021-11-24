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
import Fade from 'react-reveal/Fade';
import headerBg from '../../images/commercial/header2.jpg';
import simple from '../../images/commercial/simple.jpg';
import nextstep4 from '../../images/commercial/nextstep4.png';
import snow from '../../images/commercial/snow.jpeg';
import './style.css';

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
                    <meta name="description" content="Transblue Commercial Services" />
                </Helmet>
                <Navbar page='COMMERCIAL' parentPage='gc' />
                <Header name='commercial' img={headerBg} title='COMMERCIAL' subtitle='Your Business Construction Solution' />
                <ContactCta />
                <div className='commercial-body'>
                <div className='wrapper'>
                    <About />
                </div>
                <Impression />
                <Slideshow 
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
                            p1: 'REDUCE YOUR CARBON FOOTPRINT',
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