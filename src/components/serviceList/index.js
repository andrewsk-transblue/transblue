import React from 'react';
import ContactModal from '../contactModal';
// import services from '../../../images/multifamily/services.jpeg';
import './style.css';

function ServiceList(props) {
    console.log(props.page)
    return(
        <div className='servicelist-wrapper container-fluid'>
            <div className='row'>
                <div className='col-12 col-lg-7'>
                    {props.page === 'government' ? <iframe width="100%" height="430" src="https://www.youtube.com/embed/ddYhFI8NU3w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> : <img src={props.img} alt='' />}
                </div>
                <div className='col-12 col-lg-5 left-text my-auto'>
                    <h4 className='section-header' dangerouslySetInnerHTML={{__html: props.title}}></h4>
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