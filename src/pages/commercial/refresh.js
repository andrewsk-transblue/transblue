import React from 'react';
import paint from '../../images/commercial/paint.jpg';
import roof from '../../images/commercial/roof.jpg';
import './style.css';

function Refresh() {

    return(
        <div className='container-fluid refresh' id='refresh'>
        <h4 className='section-header'>REFRESH YOUR COMMERCIAL BRAND</h4>
        <hr className='mb-4' />
        <div className='row'>
            <div className='col-lg-4 col-md-6'>
                <img src={paint} alt='Fresh Paint' />
                <h6 className='mt-4 mb-3'>ASPHALT SERVICES</h6>
                <p className='section-p mb-4'>We will assess your property's current condition and provide a quote to patch, pave, restore, mill, sealcoat or stripe your existing parking lot areas. We offer full-service paving for new construction. We also offer overlaying services for parking lots with excessive damaged asphalt.</p>
            </div>
            <div className='col-lg-4 col-md-6'>
                <img src={roof} alt='Fresh Paint' />
                <h6 className='mt-4 mb-3'>ROOFING SERVICES</h6>
                <p className='section-p mb-4'>At Transblue we provide commercial roofing services, including stripping your old roofing system, making structural repairs as required, and re-roofing with roofing material chosen by you. We install metals, asphalt shingles, green roofs, tiles, torch down, and systems such as flat PVC and TPO.</p>
            </div>
            <div className='col-lg-4 col-md-6'>
                <img src={paint} alt='Fresh Paint' />
                <h6 className='mt-4 mb-3'>BRAND REFRESHES</h6>
                <p className='section-p'>Is your brand looking tired and in need of a face lift? Transblue can transform the exterior with a new design, façade, construction and paint! Ready for the inside as well? We offer new carpet, tiles, paint, and complete overhauls.</p>
            </div>
        </div>
    </div>
    )
}

export default Refresh;