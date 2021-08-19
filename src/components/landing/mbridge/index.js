import React, {Fragment} from 'react';
import dawsonplace from '../../../images/charities/dawsonplace2.png';
import deeshope from '../../../images/charities/deeshope2.jpg';
import charity from '../../../images/newLanding/charity.jpeg';
import hope from '../../../images/charities/hope2.jpg';
import card1 from '../../../images/newLanding/card1.png';
import card2 from '../../../images/newLanding/card2.png';
import card3 from '../../../images/newLanding/card3.png';
import card4 from '../../../images/newLanding/card4.png';
import card5 from '../../../images/newLanding/card5.png';
import './style.css';

function Mbridge() {

    return(
        <Fragment>
            <div className='card-wrapper container-fluid'>
                <div className='row'>
                    <div className='col-12 col-lg-4'>
                        <img src={card4} alt='' />
                    </div>
                    <div className='col-12 col-lg-4'>
                        <img src={card3} alt='' />
                    </div>
                    <div className='col-12 col-lg-4'>
                        <img src={card5} alt='' />
                    </div>
                </div>
            </div>
            <div className='container-fluid stats'>
            <div className='row mx-0'>
                <div className='col-lg-6 mbridge-text'>
                    <small className='ml-0'>TRANSBLUE GIVES BACK</small>
                    <h6>OUR COMMITMENT TO A BETTER COMMUNITY</h6>
                    <p className='section-p'>Donec id dictum lorem, id sagittis arcu. Vivamus quis convallis sem. In dictum orci at blandit tincidunt. </p>
                    <p className='section-p'>Aenean vestibulum lacinia eleifend. Nulla ipsum erat, interdum at viverra lobortis, luctus sit amet lectus.</p>
                    <p className='section-p'>Nullam suscipit euismod elit, ut elementum est vehicula at. Curabitur lobortis diam aliquet, fermentum </p>
                    <a href='/' className='cta'>LEARN MORE</a>
                </div>
                <div className='col-lg-6'>
                    <div className='image-wrapper'>
                        <div className='overlay'></div>
                        <img src={charity}  alt='community'/>
                        <div className='community-stats centered-text'></div>
                    </div>
                </div>
            </div>
        </div>
        <div className='container-fluid mbridge'>
            <div className='row mx-0'>
                <div className='col-lg-12'>
                    <h4 className='section-header'>TRANSBLUE PARTNERS WITH mBRIDGE</h4>
                    {/* <hr /> */}
                </div>
            </div>
            <div className='row mx-0'>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <img src={dawsonplace} alt='Dawson Place' />
                    <p className='text-secondary'>DAWSON PLACE</p>
                    <h6>HEALING FOR CHILD ABUSE VICTIMS</h6>
                    <p className='section-p'>Dawson Place Child Advocacy Center is a safe place where abused kids and non-offending</p>
                    <a href='/' className='mbridge-cta'>LEARN MORE</a>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <img src={deeshope} alt='Dees Hope' />
                    <p className='text-secondary'>DEE'S HOPE FOR GIRLS FOUNDATION</p>
                    <h6>SOFT SLAVERY IN UGANDA</h6>
                    <p className='section-p'>Dee's Hope is a nonprofit organization helping orphan girls in Uganda to have a better life by giving</p>
                    <a href='/' className='mbridge-cta'>LEARN MORE</a>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <img src={hope} alt='Hope Unlimited' />
                    <p className='text-secondary'>HOPE UNLIMITED</p>
                    <h6>FIRE AND POLICE CHAPLAINCY</h6>
                    <p className='section-p'>Chaplains are called when there is a natural disaster, structural or brush fire, serious accident</p>
                    <a href='/' className='mbridge-cta'>LEARN MORE</a>
                </div>
            </div>
        </div>
        </Fragment>
    )
}

export default Mbridge;