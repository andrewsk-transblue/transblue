import React from 'react';
import db from './db';
import './style.css';

function OpenProject(props) {

    let project = db[props.project]

    return(
        <div className='openproject-wrapper'>
            <h4>{props.project}</h4>
            {project.body.map(paragraph => {
                return(
                    <div className='row'>
                        <div className='col-lg-6 right-text'>
                            <p dangerouslySetInnerHTML={{__html: paragraph.p}}></p>
                        </div>
                        <div className='col-lg-6'>
                            <img src={paragraph.img} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default OpenProject;