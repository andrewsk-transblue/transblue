import React from 'react';
import './style.css';

function Agreement(props) {
    console.log(props)
    return(
        <p>{props.location.subagreement}</p>
    )
}

export default Agreement;