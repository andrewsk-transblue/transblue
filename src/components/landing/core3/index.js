import React from 'react';
import engaged from '../../../images/landing/engaged.png';
import './style.css';

function Core3(props) {
    return(
        <div className='container-fluid core3'>
            <div className='row'>
                <div className='col-12 col-lg-6 my-auto'>
                    <img src={engaged} alt='Be Engaged' />
                </div>
                <div className='col-12 col-lg-6 my-auto'>
                    <div className='text bg-light'>
                    <h5 className='section-header'>BE ENGAGED</h5>
                    <p className='section-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac orci at tellus dictum molestie. Pellentesque cursus sed lacus vitae consectetur. Quisque euismod efficitur lobortis. Aliquam accumsan congue fringilla. Vestibulum vulputate semper eros vitae consectetur. Fusce consequat eu ante quis pulvinar.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Core3;