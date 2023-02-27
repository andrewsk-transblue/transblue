import React, { Fragment, useEffect, useState } from 'react';
import FranchiseNav from '../franchiseNav';
import './header.css';
import military from '../../../images/military.jpg';
import militarySmall from '../../../images/military-small.png';

function Header(props) {
    const { name, region, title, subtitle, franchise } = props;
    const [screenSize, setScreenSize] = useState('large');

    useEffect(() => {
        if(window.innerWidth < 600) {
            setScreenSize('small');
        }
    }, [])

    return(
        <Fragment>
            <FranchiseNav />
            <div className='header-wrapper' name={name} region={region}>
                {props.name !== 'locations' && <div className='overlay'></div>}
                <div className={franchise === true 
                    ? 'header-text franchise-header' 
                    : 'header-text'}>{title}
                    <div className='header-subtext'>{subtitle}</div>
                </div>
            </div>
            {screenSize === 'large'
                ?   <a href="https://militarymakeover.tv/opportunities-for-building-a-better-america/" target="_blank" rel="noopener"><img src={military} alt="Military Makeover on Lifetime" width="100%" /></a>
                :   <a href="https://militarymakeover.tv/opportunities-for-building-a-better-america/" target="_blank" rel="noopener"><img src={militarySmall} alt="Military Makeover on Lifetime" width="100%" /></a>
            }
        </Fragment>
    )
}

export default Header;