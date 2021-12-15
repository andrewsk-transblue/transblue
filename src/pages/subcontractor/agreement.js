import React from 'react';
import './style.css';

function Agreement(props) {
    // console.log(JSON.stringify(props.location.htmlagreement))
    //console.log(JSON.parse(props.location.jsonagreement))
    return(
        // <p className='agreement-wrapper' dangerouslySetInnerHTML={{__html: JSON.parse(props.location.htmlagreement)}}></p>
        props.location.jsonagreement && <p className='agreement-wrapper' dangerouslySetInnerHTML={{__html: props.location.jsonagreement.replace(/\\n/g, "<br />").replace(/\\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;')}}></p>
    )
}

export default Agreement;