import React from 'react';
import './style.css';

function Section(props) {
    return(
        <div className='section-wrapper container-fluid'>
            <div className='row'>
                <div className={props.imageSide === 'left' ? 'col-lg-6 col-12' : 'col-lg-6 col-12 order-lg-12'}>
                    <img src={props.img} alt='' />
                </div>
                <div className={props.imageSide === 'left' ? 'col-12 col-lg-6 left-text' : 'col-12 col-lg-6 right-text'}>
                    <h4 className='section-header'>{props.title}</h4>
                    <p className='section-p'>{props.p1}</p>
                    <p className='section-p'>{props.p2}</p>
                    <p className='section-p' dangerouslySetInnerHTML={{__html: props.p3}}></p>
                </div>
            </div>
        </div>
    )
}

export default Section;