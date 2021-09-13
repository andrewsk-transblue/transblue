import React from 'react';
import ContactModal from '../contactModal';
// import services from '../../../images/multifamily/services.jpeg';
import './style.css';

function ServiceList(props) {
    return(
        <div className='servicelist-wrapper container-fluid'>
            <div className='row'>
                <div className='col-12 col-lg-7'>
                    <img src={props.img} alt='' />
                </div>
                <div className='col-12 col-lg-5 left-text'>
                    <h4 className='section-header'>{props.title}</h4>
                    <p className='section-p'>{props.subtitle}</p>
                    {props.services.map(service => {
                        return(
                            <p className='asterisk section-p'><span>*</span>{service}</p>
                        )
                    })}
                
                    <a className='cta' href='/locations'>LOCATIONS</a>
                    <ContactModal />
                </div>
            </div>
        </div>
    )
}

export default ServiceList;