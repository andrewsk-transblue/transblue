import React from 'react';
import db from './db';
import './style.css';


function OpenProject(props) {
    return(
        <div className='openproject-wrapper'>
            <h6>{props.project}</h6>
        </div>
    )
}

export default OpenProject;