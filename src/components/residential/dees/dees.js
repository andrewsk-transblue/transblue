import React from 'react';
import './style.css';
import '../../../App.css'
import dees from '../../../images/residential/dees.jpg';
import HoverImages from '../../hoverImages';

function Dees() {
    return(
        <div className='dees-container container-fluid'>
            <div className='row mx-0'>
                <div className='col-lg-7 col-xl-8 col-12 my-auto order-lg-12'>
                    {/* <img src={dees} alt='Dees Hope'></img> */}
                    <HoverImages />
                </div>
                <div className='col-lg-5 col-xl-4 col-12 text'>
                    <div className='section-header'>
                        <p className='text-secondary section-subheader'>TRANSBLUE &amp; DEE'S HOPE</p>
                        ABOLISHING SOFT SLAVERY IN UGANDA
                    </div>
                    <p className='section-p'>Some text about how Transblue contributes to Dee's hope in helping young girls in Uganda escape domestic servitude by providing an education and a place to stay.</p>
                    <p className='section-p'>Lorem ipsum dolor sit amet, consectetu a elit. Praesent eget elementum sem. Vivamus id m libero, eget ornare eros.</p>
                    {/* <p className='pr-2 mb-3 text-secondary'> Sed tincidunt ex nulla, id interdum odio aliquet vel. Praesent accumsan condimentum eros non luctus. */}
                    {/* </p> */}
                    <a className='cta' href='/blog'>LEARN MORE</a>
                </div>
            </div>
        </div>
    )
}

export default Dees;