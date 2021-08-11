import React from 'react';
import upgrade from '../../../images/residential/upgrade.jpeg'
import './style.css';

function UpgradeNew() {

    return(
        <div className='upgrade'>
            <img src={upgrade} alt='Modern Neon Home' />
            <div className='overlay'></div>
            <div className='text'>
                <p>Transform your backyard into a</p>
                <p>PRIVATE OASIS</p>
                <a href='/locations'>FIND A LOCATION</a>
            </div>
        </div>
    )
}

export default UpgradeNew;