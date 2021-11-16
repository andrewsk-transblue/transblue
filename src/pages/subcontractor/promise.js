import React from 'react';
import './style.css';

function Promise() {
    return(
        <div className='promise-bg'>
        <div className='promise-wrapper'>
            <div className='row'>
                <div className='col-lg-12 text-center my-auto'>
                <h2>WHAT DOES OUR VIP PROMISE MEAN FOR YOU?</h2>
                </div>
                <div className='col-lg-12'>
                    <div className='row'>
                        <div className='col-lg-6 px-5'>
                           <i className='fas fa-check-circle'></i>  WE WILL
                            <p className='section-p'>grow with you and as you grow we will grow the business portfolio you handle for us</p>
                            <i className='fas fa-check-circle'></i> WE WILL
                            <p className='section-p'>always be fair, courteous, and respectful</p>
                            <i className='fas fa-check-circle'></i> WE WILL
                            <p className='section-p'>not only to treat you as a partner but treat you as family</p>
                            <i className='fas fa-check-circle'></i> WE WILL
                            <p className='section-p'>be of service to your business; because of this we offer early pay on all pre-approved accounts</p>
                           <i className='fas fa-check-circle'></i>  WE WILL
                            <p className='section-p'>provide our easy-to-use online vendor portal which will assist you in work order scheduling, invoicing, and prompt payment</p>
                        </div>
                        <div className='col-lg-6 px-5'>
                            <i className='fas fa-check-circle'></i> WE WILL
                            <p className='section-p'>treat you the way we want to be treated</p>
                            <i className='fas fa-check-circle'></i> WE WILL
                            <p className='section-p'>pay you for the services you perform.  In return we expect the highest quality of service</p>
                            {/* <p className='section-p'>resolve any billing issue or service issue immediately</p> */}
                            <i className='fas fa-check-circle'></i> WE WILL
                            <p className='section-p'>provide you with accurate site maps and scopes of work so you can succeed at your partnered services</p>
                            <i className='fas fa-times-circle'></i> WE WON'T
                            <p className='section-p'>let any billing or service issue go unresolved immediately</p>
                            <i className='fas fa-times-circle'></i> WE WON'T
                            <p className='section-p'> overload you with more than yau can handle</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Promise;