import React from 'react';
import check from '../../images/checkorange.png';
import './style.css';

function Hospitality() {
    return(
        <div className='hospitality-wrapper container-fluid'>
            <div className='row'>
                <div className='col-12 col-lg-6'>
                    <h4 className='section-header'>
                        NO MATTER THE PROJECT,<br />
                        YOU CAN COUNT ON TRANSBLUE
                    </h4>
                    <p className='hospitality-subheader'>
                        <img src={check} className='check-icon' /> WE NEVER CUT CORNERS
                    </p>
                    <p className='section-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis sed odio sed lobortis. Pellentesque.</p>
                    <p className='hospitality-subheader'>
                        <img src={check} className='check-icon' /> WE ALWAYS GO ABOVE &amp; BEYOND
                    </p>
                    <p className='section-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis sed odio sed lobortis. Pellentesque.</p>
                    <p className='hospitality-subheader'>
                        <img src={check} className='check-icon' /> WE'RE A ONE-STOP SHOP FOR ALL YOUR NEEDS
                    </p>
                    <p className='section-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis sed odio sed lobortis. Pellentesque.</p>
                </div>
            </div>
        </div>
    )
}

export default Hospitality;