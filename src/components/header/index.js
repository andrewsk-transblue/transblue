import React from 'react';
import './style.css';

function Header(props) {
    return(
        <div className='header-wrapper'>
            <img src={props.img} alt='' />
            <div className='overlay'></div>
            <div className='header-text'>{props.title}
                <div className='header-subtext'>{props.subtitle}</div>
            </div>
        </div>
    )
}

export default Header;