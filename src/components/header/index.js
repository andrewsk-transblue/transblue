import React, {Fragment, useEffect, useState} from 'react';
import FranchiseNav from '../franchiseNav';
import './style.css';
import military from '../../images/military.jpg';
import militarySmall from '../../images/military-small.png';
import Fade from 'react-reveal/Fade';

function Header(props) {
    const [screenSize, setScreenSize] = useState('large');

    useEffect(() => {
        if(window.innerWidth < 600) {
            setScreenSize('small');
        }
        console.log(window.innerWidth)
    }, [])

    return(
        <Fragment>
            <FranchiseNav />
            <div className='header-wrapper' name={props.name} region={props.region}>
                {props.name !== 'locations' && <div className='overlay'></div>}
                <div className={props.franchise === true 
                    ? 'header-text franchise-header' 
                    : 'header-text'}><Fade top cascade>{props.title}</Fade>
                    <div className='header-subtext'>{props.subtitle}</div>
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