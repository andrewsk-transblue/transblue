import React from 'react';
import core1 from '../../../images/landing/core1.png';
import core2 from '../../../images/landing/core2.png';
import core3 from '../../../images/landing/core3.png';
import './style.css';

function Core2() {
    return(
        <div className='core2-wrapper container-fluid'>
            <div className='row'>
                <div className='col-lg-6'>
                    <div className='row'>
                        <div className='col-3 col-lg-2 my-auto text-center pr-0'>
                            <img src={core1} alt='' />
                        </div>
                        <div className='col-9 col-lg-10 my-auto'>
                            <h4 className='section-header'>SEE IT THROUGH</h4>
                            <p className='section-p'>
                            Nunc pellentesque malesuada nunc in varius. Phasellus placerat magna at justo semper.
                            </p>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-2 my-auto text-center pr-0'>
                            <img src={core2} alt='' />
                        </div>
                        <div className='col-lg-10 my-auto'>
                            <h4 className='section-header'>BE ENGAGED</h4>
                            <p className='section-p'>
                            Nunc pellentesque malesuada nunc in varius. Phasellus placerat magna at justo semper.
                            </p>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-2 my-auto text-center pr-0'>
                            <img src={core3} alt='' />
                        </div>
                        <div className='col-lg-10 my-auto'>
                            <h4 className='section-header'>HAVE GRIT</h4>
                            <p className='section-p'>
                            Nunc pellentesque malesuada nunc in varius. Phasellus placerat magna at justo semper.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='row'>
                        <div className='col-lg-2 my-auto text-center pr-0'>
                            <img src={core1} alt='' />
                        </div>
                        <div className='col-lg-10 my-auto'>
                            <h4 className='section-header'>HELP FIRST</h4>
                            <p className='section-p'>
                            Nunc pellentesque malesuada nunc in varius. Phasellus placerat magna at justo semper.
                            </p>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-2 my-auto text-center pr-0'>
                            <img src={core2} alt='' />
                        </div>
                        <div className='col-lg-10 my-auto'>
                            <h4 className='section-header'>BE NIMBLE</h4>
                            <p className='section-p'>
                            Nunc pellentesque malesuada nunc in varius. Phasellus placerat magna at justo semper.
                            </p>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-2 my-auto text-center pr-0'>
                            <img src={core3} alt='' />
                        </div>
                        <div className='col-lg-10 my-auto'>
                            <h4 className='section-header'>FOR EACH OTHER</h4>
                            <p className='section-p'>
                            Nunc pellentesque malesuada nunc in varius. Phasellus placerat magna at justo semper.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Core2;