import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/navbar/index';
import Header from '../../components/header';
import LocationsCta from '../../components/locationsCTA';
import ContactCta from '../../components/contactCta';
import About from './about';
import Slideshow from './slideshow';
import Footer from '../../components/footer/index';
import ServiceSlides from '../../components/commercial/serviceSlides/index';
import Benefits from './benefits';
// import Asphalt from './asphalt';
import Impression from './impression';
import Marriott from './marriott';
// import Refresh from './refresh';
import Fade from 'react-reveal/Fade';
//import NewReviews from '../../components/landing/newReviews/newReviews';
import headerBg from '../../images/commercial/header2.jpg';
//import asphalt from '../../images/commercial/asphalt2.jpg';
import simple from '../../images/commercial/simple3.jpg';
import nextstep4 from '../../images/commercial/nextstep4.JPG';
import snow from '../../images/commercial/snow.jpeg';
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
                <Header img={headerBg} title='COMMERCIAL' subtitle='Your Business Landscaping Solution' />
                {/* <LocationsCta /> */}
                <ContactCta />
                <About />
                <Impression />
                <Marriott />
                <Slideshow />
                <Benefits />
                <div className='mb-5 simple-process'>
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

                <div className='nextstep container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6 order-lg-12'>
                            <h4 className='section-header'>
                                <p className='ml-0 mb-0 text-secondary section-subheader'>TRANSBLUE AND NEXT STEP PREGNANCY CLINIC</p>
                                HELPING PREGNANT WOMEN IN NEED
                            </h4>
                            <p className='section-p'>It's important to us at Transblue to do things in the community and for the community.</p>
                            <p className='section-p pb-4'>Next Step Pregnancy clinic an amazing organization that supports pregnant women with limited resources. Without insurance, women are given free diapers, formula, pregnancy tests, ultrasounds, and more. Transblue provided complimentary commercial landscaping for Next Step with the goal of creating an exterior that is as beautiful as the work that they do.</p>
                        </div>
                        <div className='col-lg-6'>
                            <img src={nextstep4} alt='Next Step Pregnancy' />
                        </div>
                    </div>
                </div>
                
                {/* <Asphalt /> */}

                <div className='container-fluid snow'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <h4 className='section-header'>KEEP CUSTOMERS &amp; EMPLOYEES SAFE</h4>
                            <p className='section-p pr-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus faucibus neque, sed sodales lectus blandit vel.</p>
                            <p className='section-p pr-5 mt-3'>Aliquam at vestibulum metus. Vestibulum non est et risus ultrices malesuada sit amet id felis. Morbi aliquet, tortor quis consectetur.</p>
                            <p className='section-p pr-5 mt-3'>Nam elementum turpis id ipsum fermentum dapibus. In mollis venenatis purus, vitae iaculis ex hendrerit sed. Nunc congue nibh ut ipsum blandit, quis auctor neque tincidunt. </p>
                            <a className='cta mt-3' href='https://tbsnow.herokuapp.com/' target='_blank' rel='noreferrer'>SNOW SERVICES</a>
                        </div>
                        <div className='col-lg-6'>
                            <img className='pt-4' src={snow} alt='Commercial Snow Removal'/>
                        </div>
                    </div>
                </div>

                <ServiceSlides />

                <div className='schedule text-center'>
                    <h1>SCHEDULE A FREE CONSULTATION TODAY!</h1>
                    <a className='cta' href='/locations'>FIND A LOCATION</a>
                </div>

                <Footer />
            </Fragment>
        )
    }
}

export default Commercial;