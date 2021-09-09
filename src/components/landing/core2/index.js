import React from 'react';
import core1 from '../../../images/landing/core1.png';
import core2 from '../../../images/landing/core2.png';
import core3 from '../../../images/landing/core3.png';
import './style.css';

function Core2() {
    return(
        <div className='core2-wrapper container-fluid d-lg-none'>
            <div className='row'>
                <div className='col-12 text-center'>
                    <h4 className='section-header'>
                        TRANSBLUE CORE VALUES
                    </h4>
                    <p className='section-p'>
                        {/* At Transblue, we understand the importance of having values within the company that bleed over */}
                    Massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est
                    </p>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6'>
                    <div className='row'>
                        <div className='col-3 col-lg-2 my-auto text-center px-0'>
                            <img src={core1} alt='' />
                        </div>
                        <div className='col-9 col-md-8 col-lg-10 my-auto'>
                            <h4 className='subheader'>SEE IT THROUGH</h4>
                            <p className='section-p'>
                            Nunc pellent malesuada nunc in varius. Phasellus placerat magna at justo semper.
                            </p>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-3 col-lg-2 my-auto text-center px-0'>
                            <img src={core3} alt='' />
                        </div>
                        <div className='col-9 col-md-8 col-lg-10 my-auto'>
                            <h4 className='subheader'>HAVE GRIT</h4>
                            <p className='section-p'>
                            Nunc pellent malesuada nunc in varius. Phasellus placerat magna at justo semper.
                            </p>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-3 col-lg-2 my-auto text-center px-0'>
                            <img src={core2} alt='' />
                        </div>
                        <div className='col-9 col-md-8 col-lg-10 my-auto'>
                            <h4 className='subheader'>BE ENGAGED</h4>
                            <p className='section-p'>
                            Nunc pellent malesuada nunc in varius. Phasellus placerat magna at justo semper.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Core2;