import React, { useState } from 'react';
import ContactModal from '../contactModal';
import './style.css';

function Snow(props) {
    const { img, title, p1, p2, p3, video } = props;
    const [displayVideo, setDisplayVideo] = useState(false)
    return(
        <div className='snow-wrapper container-fluid'>
            <div className='row'>
                <div className='col-lg-7 order-lg-12'>
                    {!video ? 
                        <img className='pt-4' src={img} alt='Government Snow Services' />

                        : <div className='video-wrapper'>
                            {!displayVideo && <img src={img} alt='Marriott Asphalt' />}
                            {!displayVideo && <button className='play' onClick={() => setDisplayVideo(true)}><i className="far fa-play-circle fa-5x"></i></button>}
                            {displayVideo && <iframe src="https://www.youtube.com/embed/_5DPpfJEMhw?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
                        </div>
                    }
                </div>
                <div className='col-lg-5 right-text'>
                    <h4 className='section-header'>{title}</h4>
                    <p className='section-p'>{p1}</p>
                    <p className='section-p'>{p2}</p>
                    <p className='section-p'>{p3}</p>
                    <a className='cta' href='https://snow.transblue.com' target='_blank' rel='noreferrer'>SNOW SERVICES</a><ContactModal />
                </div>

            </div>
        </div>
    )
}

export default Snow;