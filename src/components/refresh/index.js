import React from 'react';
import './style.css';

function Refresh(props) {

    return(
        <div className='container-fluid refresh-wrapper'>
        <div className='row'>
            <div className='col-12 text-center title'>
            <h4 className='section-header'>{props.title}</h4>
            {/* <p className='section-p'>With one of our multifamily capital projects</p> */}
            <div className='section-p'>
                Refreshed buildings keep property values high. Transblue is 100% committed to delivering World Class services that enhance the beauty of each and every space. 
            </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-lg-4'>
                <img src={props.images[0]} alt='Apartment Rooftop' />
                <p>{props.subtitles[0]}</p>
                <div className='section-p mb-4'>{props.body[0]}</div>
            </div>
            <div className='col-lg-4'>
                <img src={props.images[1]} alt='Apartment Rooftop' />
                <p>{props.subtitles[1]}</p>
                <div className='section-p mb-4'>{props.body[1]}</div>
            </div>
            <div className='col-lg-4'>
                <img src={props.images[2]} alt='Apartment Rooftop' />
                <p>{props.subtitles[2]}</p>
                <div className='section-p mb-4'>{props.body[2]}</div>
            </div>
        </div>
    </div>
    )
}

export default Refresh;