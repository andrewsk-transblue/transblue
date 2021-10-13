import React from 'react';
import './style.css';

function Agreement(props) {
    return(
        <p className='agreement-wrapper' dangerouslySetInnerHTML={{__html: props.location.htmlagreement}}></p>
    )
}

export default Agreement;