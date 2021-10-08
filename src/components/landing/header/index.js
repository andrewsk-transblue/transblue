import React, {Fragment} from 'react';
import Franchise from '../../../pages/franchise/franchise';
import FranchiseNav from '../../franchiseNav';

function Header() {
        return(
            <Fragment>
                <FranchiseNav />
                <div className='header'>
                <div id='header_slide'>
                    <div className='header-text landing-header'>
                        
                    </div>
                    <div className='overlay'></div>
                </div>
            </div>
            </Fragment>
        )
}

export default Header;