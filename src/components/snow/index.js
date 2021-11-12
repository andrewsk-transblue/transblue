import React from 'react';
import ContactModal from '../contactModal';
import './style.css';

function Snow(props) {
    return(
        <div className='snow-wrapper container-fluid'>
            <div className='row'>
                <div className='col-lg-7 order-lg-12'>
                    <img className='pt-4' src={props.img} alt='Government Snow Services' />
                </div>
                <div className='col-lg-5 right-text'>
                    <h4 className='section-header'>{props.title}</h4>
                    <p className='section-p'>{props.p1}</p>
                    <p className='section-p'>{props.p2}</p>
                    <p className='section-p'>{props.p3}</p>
                    <a className='cta' href='https://snow.transblue.com' target='_blank' rel='noreferrer'>SNOW SERVICES</a><ContactModal />
                </div>

            </div>
        </div>
    )
}

export default Snow;