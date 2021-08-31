import React from 'react';
import commercial from '../../images/franchise/commercial.jpeg';
import './commercial.css';

function Commercial(props) {
    return(
        <div className='franchise-commercial-wrapper container-fluid'>
            <div className='row'>
                <div className='col-12 col-lg-6'>
                    <img src={commercial} alt='' />
                </div>
                <div className='col-12 col-lg-6 left-text'>
                    <h4 className='section-header'>UPGRADE YOUR BUSINESS</h4>
                    <p className='section-p'>At {props.location.name}, our teams are focused on making your life simple and reducing the burden that comes with the capital projects required to keep your business looking its best.</p>
                    <p className='section-p'>We understand that cost and quality are the keys to success of your initiative. Our promise is to deliver a truly World Class Experience.</p>
                    <p className='section-p'>
                        Contact us today and experience what construction should be like!<br />
                        <b>{props.location.phone}<br />
                        {props.location.email}</b>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Commercial;