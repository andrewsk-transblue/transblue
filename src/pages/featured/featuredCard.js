import React from 'react';
import mapmarker from '../../images/featured/mapmarker.png';
import './style.css';

function FeaturedCard(props) {
    return(
        <div className='card-wrapper'>
            <img src={props.img} alt='Featured Project' />
            <div className='overlay'></div>
            <div className='label'>
                <h5><img className='pr-1 map-marker' src={mapmarker} alt=''/>{props.title}</h5>
            </div>
        </div>
    )
}

export default FeaturedCard;