import React from 'react';
import snow from '../../images/commercial/snow.jpeg';


function ServiceCard(props) {
    let { title, body } = props;
    return(
        <div className='col-12 col-lg-6 service-card'>
            <div className='row'>
                <div className='col-6'>
                    <img src={snow} />
                </div>
                <div className='col-6'>
                    <h5 className=''>
                        {title}
                    </h5>
                    <p className='section-p'>
                        {body}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard;