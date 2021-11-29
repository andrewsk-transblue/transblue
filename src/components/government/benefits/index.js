import React, {Fragment, useState} from 'react';
import Slide from 'react-reveal/Slide'
import ContactModal from '../../contactModal';
import check from '../../../images/check.png';
import './style.css';

function Benefits(props) {


    return(
        <Fragment>
        <div className='benefits-wrapper container-fluid'>
            <div className='row'>
                <div className='col-12 col-lg-6 order-lg-12'>
                    <img src={props.img} />
                </div>
                <div className='col-12 col-lg-6 left-text'>
                    <h4 className='section-header'>WHY CHOOSE TRANSBLUE?</h4>
                    {/* <p className='section-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at sapien non arcu pharetra volutpat.</p> */}
                    <div className='list section-p'>
                        {props.list.map(item => {
                            return(
                                <Fragment>
                                    <span><img src={check} alt='' className='check'></img>{item}</span><br />
                                </Fragment>
                            )
                        })}
                    </div>
                    <a className='cta' href='/locations'>FIND A LOCATION</a>
                    <ContactModal />
                </div>
            </div>
        </div>

        </Fragment>
    )
}

export default Benefits;