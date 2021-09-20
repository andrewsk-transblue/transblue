import React from 'react';
import './style.css';

function Header(props) {
    return(
        <div className='header-wrapper' name={props.name} region={props.region}>
            {props.name !== 'locations' && <div className='overlay'></div>}
            <div className={props.franchise === true ? 'header-text franchise-header' : 'header-text'}>{props.title}
                <div className='header-subtext'>{props.subtitle}</div>
            </div>
        </div>
    )
}

export default Header;