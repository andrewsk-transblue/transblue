import React from 'react';
import upgrade from '../../../images/residential/upgrade.jpeg';
import upgradeSmall from '../../../images/residential/upgradeSmall.jpg';
import './style.css';

function UpgradeNew() {
    return(
        <div className='upgrade'>
            <img src={upgradeSmall} alt='Modern Neon Home' srcSet={`${upgradeSmall} 576w, ${upgrade} 1400w`} sizes='(max-width: 576px) 576px, 1400px' />
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