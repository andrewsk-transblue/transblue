import React from 'react';
import './style.css';

function ServiceCard(props) {
    return(
        <div className='container service-container'>
            <div className='service-image'>
                <div className='service-overlay'></div>
                <a href={`/${props.page}`}><img src={props.image} id='service-image' alt={`${props.service}`} /></a>
                <div className='service-description'>
                    <div className='description-text centered-text'>
                        <div className='description-header'>{props.service}</div>
                        <p>{props.description}</p>
                        <a href={`/${props.page}`} ><button className='service-button'>LEARN MORE</button></a>
                    </div>
                </div>
            </div>
            <div className='service-title centered-text'>
                {props.service}
            </div>
        </div>
    )
}

export default ServiceCard;