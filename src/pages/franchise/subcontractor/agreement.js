import React from 'react';
import './style.css';

function Agreement(props) {
    return(
        // <p>{props.location.subagreement}</p>
        <p className='agreement-wrapper' dangerouslySetInnerHTML={{__html: props.location.subagreement}}></p>
    )
}

export default Agreement;