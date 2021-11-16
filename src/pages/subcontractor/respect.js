import React from 'react';
import './style.css';


function Respect() {
    return(
        <div className='respect-wrapper'>
            <div className='row'>
                <div className='col-lg-5 my-auto'>
                    <h1>WE WERE BUILT<br />ON RESPECT.</h1>
                    <p className='section-p'>At Transblue, we believe respect is the foundation of any successful business.</p>
                    <button className='cta ml-0 mt-3'>APPLY NOW</button>
                </div>
                <div className='col-lg-1'></div>
                <div className='col-lg-6 my-auto left-text'>
                    <div className='row mx-0 mb-4'><i className='far fa-gem mt-2 mr-3 fa-2x'></i> <h5> We will treat you the way you want to be treated</h5></div>
                    <div className='row mx-0 mb-4'><i className='far fa-handshake mt-2 mr-3 fa-2x'></i> <h5> We will always be fair, courteous, and respectful</h5></div>
                    <div className='row mx-0'><i className='fas fa-user-friends mt-2 mr-3 fa-2x'></i> <h5> We will not only treat you as a partner, but as family</h5></div>
                </div>
            </div>
        </div>
    )
}

export default Respect;
