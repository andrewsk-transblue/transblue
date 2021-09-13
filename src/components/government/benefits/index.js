import React, {Fragment, useState} from 'react';
import Slide from 'react-reveal/Slide'
import Capabilities2 from '../capabilities2';
import check from '../../../images/check.png';
import './style.css';

function Benefits() {
    const [displayCapabilities, setDisplayCapabilities] = useState(false);

    return(
        <Fragment>
        <div className='benefits-wrapper container-fluid'>
            <div className='row'>
                <div className='col-12 col-lg-6 order-lg-12'>
                    {/* <img src={} /> */}
                </div>
                <div className='col-12 col-lg-6 right-text'>
                    <h4 className='section-header'>WHY CHOOSE TRANSBLUE?</h4>
                    <p className='section-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at sapien non arcu pharetra volutpat.</p>
                    <div className='list section-p'>
                        <span><img src={check} alt='' className='check'></img>We understand the government bidding process.</span><br />
                        <span><img src={check} alt='' className='check'></img>We understand Scope of Work Requirements.</span><br />
                        <span><img src={check} alt='' className='check'></img></span>We understand Wage Requirements<br />
                        <span><img src={check} alt='' className='check'></img></span>Minority Owned business in specific markets<br />
                        <span><img src={check} alt='' className='check'></img></span>Top notch communication<br />
                        <span><img src={check} alt='' className='check'></img></span>High level of project reporting <br />
                        <span><img src={check} alt='' className='check'></img></span>Onsite management<br />
                        <span><img src={check} alt='' className='check'></img></span>Superior safety program with track record of 0 injuries<br />
                    </div>
                    <button className='cta' onClick={() => setDisplayCapabilities(!displayCapabilities)}>VIEW OUR CAPABILITIES STATEMENT</button>
                </div>
            </div>
        </div>
        {displayCapabilities &&
            <Slide bottom>
                 <Capabilities2 />
            </Slide>}
        </Fragment>
    )
}

export default Benefits;