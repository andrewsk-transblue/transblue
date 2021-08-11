import React from 'react';

function ServiceCard(props) {
    return(
        <div className='service-card'>
            <img src={props.image} alt='Service Card' />
            <h4>{props.service}</h4>
        </div>
    )
}

export default ServiceCard;