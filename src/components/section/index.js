import React, { Fragment } from 'react';
import './style.css';

function Section(props) {
    let tel;
    props.contact ? tel = props.contact.phone.replace(/[^A-Z0-9]/ig, "") : tel = ''
    return(
        <div className='section-wrapper container-fluid'>
            <div className='row'>
                <div className={props.imageSide === 'left' ? 'col-md-6 col-12' : 'col-md-6 col-12 order-lg-12'}>
                    <img src={props.img} alt='' />
                </div>
                <div className={props.imageSide === 'left' ? 'col-12 col-md-6 left-text' : 'col-12 col-md-6 right-text'}>
                    <h4 className='section-header'>{props.title}</h4>
                    <p className='section-p'>{props.p1}</p>
                    <p className='section-p'>{props.p2}</p>
                    <div className='services bg-light'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                {props.services.map(service => {
                                    return(
                                        <Fragment>{service}<br /></Fragment>
                                    )
                                })}
                            </div>
                            <div className='col-lg-6'>
                                {props.services2.map(service => {
                                    return(
                                        <Fragment>{service}<br /></Fragment>
                                    )
                                })}
                            </div>
                        </div>
                        
                    </div>
                    {/* <p className='section-p' dangerouslySetInnerHTML={{__html: props.p3}}></p> */}
                </div>
            </div>
        </div>
    )
}

export default Section;