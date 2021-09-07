import React from 'react';
import './style.css';

function Header(props) {
    return(
        <div className='header-wrapper' name={props.name}>
            {/* <img src={props.img} alt='' /> */}
            {props.name !== 'locations' && <div className='overlay'></div>}
            <div className='header-text'>{props.title}
                <div className='header-subtext'>{props.subtitle}</div>
            </div>
        </div>
    )
}

export default Header;