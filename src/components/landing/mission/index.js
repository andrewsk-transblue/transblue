import React, {Fragment} from 'react';
import icon from '../../../images/residential/whiteicon.png';

function Mission() {
    return(
        <Fragment>
            <div className='container-fluid mission w-100'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-6'>
                        <div className='row'>
                            <div className='col-lg-3 col-sm-12 col-md-3 col-3 px-0 my-auto'>
                                <img src={icon} alt='happy home' />
                            </div>
                            <div className='col-lg-9 col-md-9 col-sm-12 col-8 my-auto'>
                                <h1>TRANSBLUE'S<br /> MISSION</h1>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-6 my-auto'>
                        <p>We were founded on the principle of God, Family, then Business. We don't just build outdoor living spaces. We build communities. We build charities. We build to bless our clients, our employees and our surroundings</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Mission;