import React, {Fragment} from 'react';
import FranchiseNav from '../franchiseNav';
import './style.css';
import military from '../../images/military.jpg'

function Header(props) {
    return(
        <Fragment>
            <FranchiseNav />
            <div className='header-wrapper' name={props.name} region={props.region}>
                {props.name !== 'locations' && <div className='overlay'></div>}
                <div className={props.franchise === true 
                    ? 'header-text franchise-header' 
                    : 'header-text'}>{props.title}
                    <div className='header-subtext'>{props.subtitle}</div>
                </div>
            </div>
            <a href="https://militarymakeover.tv" target="_blank" rel="noopener"><img src={military} alt="Military Makeover on Lifetime" width="100%" /></a>
        </Fragment>
    )
}

export default Header;