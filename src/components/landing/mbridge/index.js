import React, {Fragment} from 'react';
import heartEarth from '../../../images/newLanding/heart.jpg';
import dawsonplace from '../../../images/charities/dawsonplace2.png';
import deeshope from '../../../images/charities/deeshope2.jpg';
//import charity from '../../../images/newLanding/charity.jpeg';
import hope from '../../../images/charities/hope2.jpg';
//import whitesnow from '../../../images/landing/whitesnow.png';
import whitesnow from '../../../images/newLanding/snow.png';
import fire from '../../../images/landing/fire.png';
import heart from '../../../images/newLanding/heart.png';
import './style.css';

function Mbridge() {

    return(
        <Fragment>
            <div className='who-is-tb card-wrapper container-fluid'>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-4'>
                        <div className='card'>
                            <div className='text'>
                                <p className='tb-is'>Transblue is</p>
                                <p className='title'>QUALITY OF LIFE</p>
                                <p className='body'>We understand that backyards are more than a beautiful lawn. They're birthday parties, holidays, and celebrations with family.</p>
                                <img src={heart} alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4'>
                        <div className='card'>
                        <div className='text'>
                            <p className='tb-is'>Transblue is</p>
                            <p className='title'>SAFER WINTERS</p>
                            <p className='body'>We offer snow and ice services that keep your clients safe, and your doors open for business.</p>
                            <img src={whitesnow} alt='' />
                        </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4'>
                        <div className='card'>
                        <div className='text'>
                            <p className='tb-is'>Transblue is</p>
                            <p className='title'>LANDSCAPE DESIGN</p>
                            <p className='body'>Landscape design enhances your property and increases your home's value.</p>
                            <img src={fire} alt='' />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid stats'>
            <div className='row'>
                <div className='col-lg-6 my-auto'>
                    <img src={heartEarth} alt='' />
                    {/* <div className='image-wrapper'>
                        <div className='overlay'></div>
                        <img src={charity}  alt='community'/>
                        <div className='community-stats centered-text'></div>
                    </div> */}
                </div>
                <div className='col-lg-6 right-text my-auto'>
                    <h6>BEAUTIFUL COMMUNITIES, <br />INSIDE AND OUT</h6>
                    <p className='section-p'>
                    At Transblue, we have been in the business of transforming lifestyles through landscape construction for over 17 years. We love helping people and we love doing a great job for every one of our clients. We never cut corners and see every project through to the end, whether it's landscaping, asphalt or snow services.</p>
                    
                    <p className='section-p'> Our passion is to build beautiful projects and we believe in treating your home like ours. We truly care about your project and doing a great job for you. We listen, collaborate, and design. This enables us to turn your project and dream into a reality. Our goal is to always exceed expectations of our customers!
                        {/* At Transblue, we have been in the business of transforming lifestyles through landscape construction for over 17 years. */}
                    </p>
                    <p className='section-p'>
                    {/* At Transblue, we see every project through to the end. We notice and do what’s right by never cutting corners. We monitor all projects to ensure an exceptional final product. */}
                    {/* Not only do we build beautiful outdoor living spaces, we are dedicated to eliminating social problems and increasing wellness in people, society, and the planet. A portion of profits from each and every Transblue project is donated to charities around the globe. We aim to make the world a better place, one project at a time. */}
                    </p>
                    <a href='/givesback' className='cta'>LEARN MORE</a>
                </div>

            </div>
        </div>
        <div className='container-fluid mbridge'>
            <div className='row mx-0'>
                <div className='col-lg-12'>
                    <div className='title'>
                    <h4 className='section-header'>TRANSBLUE GIVES BACK</h4>
                    <div className='section-p'>Not only do we build beautiful outdoor living spaces, we are dedicated to eliminating social problems and increasing wellness in people, society, and the planet. A portion of profit from every project is dontated to helping those in need around the globe. We are here for each other.</div>
                    </div>
                    {/* <hr /> */}
                </div>
            </div>
            <div className='row mx-0'>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <img src={dawsonplace} alt='Dawson Place' />
                    <p className='text-secondary'>DAWSON PLACE</p>
                    <h6>HEALING FOR CHILD ABUSE VICTIMS</h6>
                    <p className='section-p'>Dawson Place child advocacy center transforms hurt to hope for children traumatized by abuse. Transblue is consistently one of Dawson Place's primary community supporters.</p>
                    <a href='/givesback' className='mbridge-cta'>LEARN MORE</a>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <img src={deeshope} alt='Dees Hope' />
                    <p className='text-secondary'>DEE'S HOPE FOR GIRLS FOUNDATION</p>
                    <h6>FIGHTING SOFT SLAVERY IN UGANDA</h6>
                    <p className='section-p'>Dee's Hope helps Ugandan women find a better way. By providing security, education, food, and shelter, Dee's Hope helps young girls escape the nightmare of forced servitude.</p>
                    <a href='/givesback' className='mbridge-cta'>LEARN MORE</a>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <img src={hope} alt='Hope Unlimited' />
                    <p className='text-secondary'>HOPE UNLIMITED</p>
                    <h6>FIRE AND POLICE CHAPLAINCY</h6>
                    <p className='section-p'>Through Northwest Incident Support, Hope Unlimited partners with first responders during crisis situations, providing resources for families during loss or difficult circumstances.</p>
                    <a href='/givesback' className='mbridge-cta'>LEARN MORE</a>
                </div>
            </div>
        </div>
        </Fragment>
    )
}

export default Mbridge;