import React from 'react';
import Fade from 'react-reveal/Fade'
import through from '../../images/careers/through.png';
import engaged from '../../images/careers/engaged.png';
import nimble from '../../images/careers/nimble.png';
import grit from '../../images/careers/grit.png';
import help from '../../images/careers/help.png';
import eachother from '../../images/careers/eachother.png';
import './style.css';

function Core() {
    return(
        <div className='core-bg'>
        <div className='core-wrapper'>
            <div className='row'>
                <div className='col-lg-5 pr-5'>
                    <h2>WHO ARE WE?</h2>
                    <p className='section-p'>At Transblue, we prioritize the well being of our employees, our customers, and the community. We have curated a list of our core values that we live by both in and out of the workplace.</p>
                    <p className='section-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis est ex. Sed enim orci, porttitor nec volutpat a, fringilla eu dui. Cras elit ex.</p>
                </div>
                <div className='col-lg-1'></div>
                <div className='col-lg-6 my-auto'>
                    <div className='row ml-5'>
                        <div className='col-4' style={{marginLeft: '-16%'}}>
                            <Fade duration={1200}>
                                <img src={engaged} alt='' />
                            </Fade>
                        </div>
                        <div className='col-4'>
                            <Fade duration={1200} delay={400}>
                                <img src={nimble} alt='' />
                            </Fade>
                        </div>

                        <div className='col-4'>
                            <Fade duration={1200} delay={800}>
                                <img src={grit} alt='' />
                            </Fade>
                        </div>

                        <div className='col-4'>
                            <Fade duration={1200} delay={1200}>
                                <img src={help} className='bottom-row' alt=''/>
                            </Fade>
                        </div>

                        <div className='col-4'>
                            <Fade duration={1200} delay={1600}>
                                <img src={eachother} className='bottom-row' alt=''/>
                            </Fade>
                        </div>

                        <div className='col-4'>
                            <Fade duration={1200} delay={2000}>
                            <img src={through} className='bottom-row' alt=''/>
                            </Fade>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Core;