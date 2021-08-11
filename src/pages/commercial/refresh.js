import React from 'react';
import paint from '../../images/commercial/paint.jpg';
import roof from '../../images/commercial/roof.jpg';
import './style.css';

function Refresh() {

    return(
        <div className='container-fluid refresh' id='refresh'>
        <h3>REFRESH YOUR COMMERCIAL BRAND</h3>
        <hr className='mb-4' />
        <div className='row'>
            <div className='col-lg-4 col-md-6'>
                <img src={paint} alt='Fresh Paint' />
                <h6 className='mt-4 mb-3'>FRESH NEW PAINT</h6>
                <p className='section-p mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et nunc tincidunt ipsum hendrerit pulvinar.</p>
            </div>
            <div className='col-lg-4 col-md-6'>
                <img src={roof} alt='Fresh Paint' />
                <h6 className='mt-4 mb-3'>A BRAND NEW ROOF</h6>
                <p className='section-p mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et nunc tincidunt ipsum hendrerit pulvinar.</p>
            </div>
            <div className='col-lg-4 col-md-6'>
                <img src={paint} alt='Fresh Paint' />
                <h6 className='mt-4 mb-3'>ALL NEW SIDING</h6>
                <p className='section-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et nunc tincidunt ipsum hendrerit pulvinar.</p>
            </div>
        </div>
    </div>
    )
}

export default Refresh;