import React from 'react';
import solar from '../../images/commercial/solar2.jpg';
import ev from '../../images/commercial/ev2.jpg';
import livingroof from '../../images/commercial/livingroof.jpg';
import './style.css';

function Green(props) {
    return(
        <div className='container-fluid green-solns'>
        <div className='row'>
            <div className='col-lg-12 title'>
                <h4 className='section-header'>TRANSBLUE ENVIRONMENTAL SERVICES</h4>
                <p className='section-p'>At Transblue, we offer a wide variety of environmental services to fit your {props.page} needs. For more information and full list of green services, visit our <a href='https://green.transblue.com/' target="_blank" rel="noreferer">green solutions website</a></p>
            </div>
        </div>
        <div className='row'>
        <div className='col-lg-4 col-md-6'>
                <img src={solar} alt='Government Solar Roof' />
                <p className='subtitle'>SOLAR PANELS</p>
                <p className='section-p mb-4'>{props.solar}</p>
            </div>
            <div className='col-lg-4 col-md-6'>
                <img src={ev} alt='Government EV Charger' />
                <p className='subtitle'>ELECTRIC VEHICLE CHARGERS</p>
                <p className='section-p mb-4'>{props.ev}</p>
            </div>
            <div className='col-lg-4 col-md-6'>
                <img src={livingroof} alt='Commercial Living Roof' />
                <p className='subtitle'>LIVING ROOFS</p>
                <p className='section-p mb-4'>{props.roof}</p>
            </div>
        </div>
    </div>
    )
}

export default Green;