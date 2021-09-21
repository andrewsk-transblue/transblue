import React, {Fragment} from 'react';
import dawsonplace from '../../../images/charities/dawsonplace2.png';
import deeshope from '../../../images/charities/deeshope2.jpg';
import charity from '../../../images/newLanding/charity.jpeg';
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
                                <p className='body'>Landscapes are more than just backyards. They're birthday parties, holidays, and celebrations with family.</p>
                                <img src={heart} alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4'>
                        <div className='card'>
                        <div className='text'>
                            <p className='tb-is'>Transblue is</p>
                            <p className='title'>SAFER WINTERS</p>
                            <p className='body'>We offer quality snow services that keep your clients safe and your doors open for business.</p>
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
            <div className='row mx-0'>
                <div className='col-lg-6 right-text'>
                    <h6>BEAUTIFUL COMMUNITIES, INSIDE AND OUT</h6>
                    <p className='section-p'>At Transblue, we strive to create beautiful communities inside, and out.</p>
                    <p className='section-p'>
                    
                    Not only do we build beautiful outdoor living spaces, we are dedicated to eliminating social problems, and increasing wellness in people, society, and the planet. A portion of profits from each and every Transblue project is donated to charities around the globe. We aim to make the world a better place, one project at a time.</p>
                    <a href='/' className='cta'>LEARN MORE</a>
                </div>
                <div className='col-lg-6'>
                    {/* <div className='image-wrapper'>
                        <div className='overlay'></div>
                        <img src={charity}  alt='community'/>
                        <div className='community-stats centered-text'></div>
                    </div> */}
                </div>
            </div>
        </div>
        <div className='container-fluid mbridge'>
            <div className='row mx-0'>
                <div className='col-lg-12'>
                    <div className='title'>
                    <h4 className='section-header'>TRANSBLUE GIVES BACK</h4>
                    <div className='section-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at turpis ut velit imperdiet ultricies. Vestibulum sed placerat arcu. Aliquam.</div>
                    </div>
                    {/* <hr /> */}
                </div>
            </div>
            <div className='row mx-0'>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <img src={dawsonplace} alt='Dawson Place' />
                    <p className='text-secondary'>DAWSON PLACE</p>
                    <h6>HEALING FOR CHILD ABUSE VICTIMS</h6>
                    <p className='section-p'>Dawsons Place child advocacy center transforms hut to hope for children that have been traumatized by abuse. Transblue has consistently been one of Dawsons’ place primary community supporters.</p>
                    <a href='/givesback' className='mbridge-cta'>LEARN MORE</a>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <img src={deeshope} alt='Dees Hope' />
                    <p className='text-secondary'>DEE'S HOPE FOR GIRLS FOUNDATION</p>
                    <h6>SOFT SLAVERY IN UGANDA</h6>
                    <p className='section-p'>Dee's hope provides young girls a better way.  By providing them security, education, food and shelter, Dee's Hope is helping break young girls out of the nightmare of being someone’s house servant.</p>
                    <a href='/givesback' className='mbridge-cta'>LEARN MORE</a>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <img src={hope} alt='Hope Unlimited' />
                    <p className='text-secondary'>HOPE UNLIMITED</p>
                    <h6>FIRE AND POLICE CHAPLAINCY</h6>
                    <p className='section-p'>Hope Unlimited through Northwest Incident Support, partners with first responders during crisis situations and provides resources for families during loss or difficult circumstances.</p>
                    <a href='/givesback' className='mbridge-cta'>LEARN MORE</a>
                </div>
            </div>
        </div>
        </Fragment>
    )
}

export default Mbridge;