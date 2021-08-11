import React, {Fragment, useState} from 'react';
import {Link} from 'react-router-dom';
import dawsonplace from '../../../images/charities/dawsonplace2.png';
import deeshope from '../../../images/charities/deeshope2.jpg';
import charity from '../../../images/newLanding/charity.jpeg';
import hope from '../../../images/charities/hope2.jpg';
import downarrow from '../../../images/landing/downarrow50.png';
import uparrow from '../../../images/landing/uparrow50.png';

function Mbridge() {

    const [displayDawson, setDisplayDawson] = useState(false);
    const [displayDees, setDisplayDees] = useState(false);
    const [displayHope, setDisplayHope] = useState(false);

    function toggle(charity) {
        if(charity === 'Dawson') setDisplayDawson(!displayDawson);
        else if(charity === 'Dees') setDisplayDees(!displayDees)
        else if(charity === 'Hope') setDisplayHope(!displayHope);
    }

    return(
        <Fragment>
            <div className='container-fluid stats'>
            <div className='row'>
                <div className='col-lg-6 pr-5 mx-auto'>
                    <div className='col-lg-12 text-dark'>
                        <small className='ml-0'>TRANSBLUE GIVES BACK</small>
                        <h6>OUR COMMITMENT TO A BETTER COMMUNITY</h6>
                        <p className='section-p'>Donec id dictum lorem, id sagittis arcu. Vivamus quis convallis sem. In dictum orci at blandit tincidunt. </p>
                        <p className='section-p'>Aenean vestibulum lacinia eleifend. Nulla ipsum erat, interdum at viverra lobortis, luctus sit amet lectus.</p>
                        <p className='section-p'>Nullam suscipit euismod elit, ut elementum est vehicula at. Curabitur lobortis diam aliquet, fermentum </p>
                        <a href='/' className='cta'>LEARN MORE</a>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='image-wrapper'>
                        <div className='overlay'></div>
                        <img src={charity}  alt='community'/>
                        <div className='community-stats'></div>
                    </div>
                </div>
            </div>
        </div>
        <div className='container-fluid mbridge'>
            <div className='row mx-0 mb-3'>
                <div className='col-lg-12'>
                    <h4 className='section-header pb-2'>TRANSBLUE PARTNERS WITH mBRIDGE</h4>
                    <hr />
                </div>
            </div>
            <div className='row mx-0'>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <img src={dawsonplace} alt='Dawson Place' />
                    <p className='text-secondary'>DAWSON PLACE</p>
                    <h5>HEALING FOR CHILD ABUSE VICTIMS</h5>
                    {displayDawson ? <p className='section-p'>Dawson Place Child Advocacy Center is a safe place where abused kids and non-offending family members can come for safety, justice, and healing. Medical and mental health professionals, law enforcement support, and advocates to help navigate and be informed are provided.
                    <br /><a href='/' className='cta'>LEARN MORE</a></p>
                        : <p className='section-p'>Dawson Place Child Advocacy Center is a safe place where abused kids and non-offending...</p>}
                    <button onClick={() => toggle('Dawson')}>
                        <img className='expand' src={displayDawson ? uparrow : downarrow} alt='Expand' />
                        {/* <i className={displayDawson ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}></i> */}
                    </button>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <img src={deeshope} alt='Dees Hope' />
                    <p className='text-secondary'>DEE'S HOPE FOR GIRLS FOUNDATION</p>
                    <h5>SOFT SLAVERY IN UGANDA</h5>
                    {displayDees ? <p className='section-p'>Dee's Hope is a nonprofit organization helping orphan girls in Uganda to have a better life by giving them education, food, and shelter. In the future, Dee’s Hope’s goal is to have a place to plant a school where all the children being served by the organization may attend, to teach life skills to end the cycle of education and poverty for girls.
                    <br /><a href='/' className='cta'>LEARN MORE</a></p>
                        : <p className='section-p'>Dee's Hope is a nonprofit organization helping orphan girls in Uganda to have a better life by giving...</p>}
                    <button onClick={() => toggle('Dees')}>
                        <img className='expand' src={displayDees ? uparrow : downarrow} alt='Expand' />
                        {/* <i className={displayDees ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}></i> */}
                    </button>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <img src={hope} alt='Hope Unlimited' />
                    <p className='text-secondary'>HOPE UNLIMITED</p>
                    <h5>FIRE AND POLICE CHAPLAINCY</h5>
                    {displayHope ? <p className='section-p'>Chaplains are called when there is a natural disaster, structural or brush fire, serious accident, need for a death notification, search and rescue, or other trauma. Their mission is to care for and comfort victims, families and first responders at critical incident scenes.
                    <br /><a href='/' className='cta'>LEARN MORE</a></p>
                        : <p className='section-p'>Chaplains are called when there is a natural disaster, structural or brush fire, serious accident...</p>}
                    <button onClick={() => toggle('Hope')}>
                        <img className='expand' src={displayHope ? uparrow : downarrow} alt='Expand' />
                        {/* <i className={displayHope ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}></i> */}
                    </button>
                </div>
            </div>
        </div>
        </Fragment>
    )
}

export default Mbridge;