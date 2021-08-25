import React from 'react';

import friends from '../../../images/residential/friends.jpg';
import fire from '../../../images/residential/fire.jpeg';
import couple from '../../../images/residential/couple.png';

import './style.css';

function Lifestyle() {

    return(
        <div className='container-fluid lifestyle-container'>
            <div className='row mx-0'>
                <div className='col-lg-4 col-md-6 my-auto'>
                    <div className='image-container'>
                        <img src={friends} alt='Celebrate Your Friends' />
                        <div className='lifestyle-overlay'></div>
                        <div className='lifestyle-text centered-text'>
                            Celebrate your Friends
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 my-auto'>
                    <div className='image-container'>
                        <img src={fire} alt='Bond with Family' />
                        <div className='lifestyle-overlay'></div>
                        <div className='lifestyle-text centered-text'>
                            Bond with Family
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 my-auto'>
                    <div className='image-container'>
                        <img src={couple} alt='Love your Life' />
                        <div className='lifestyle-overlay'></div>
                        <div className='lifestyle-text centered-text'>
                            Love your Life
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lifestyle;