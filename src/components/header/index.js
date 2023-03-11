import React, {Fragment, useEffect, useState} from 'react';
import FranchiseNav from '../franchiseNav';
import './style.css';
import military from '../../images/military.jpg';
import militarySmall from '../../images/military-small.png';
import Fade from 'react-reveal/Fade';

function Header(props) {
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
        </Fragment>
    )
}

export default Header;